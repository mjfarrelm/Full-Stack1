import { writeCookie } from "../common"

export const loginUser = async (username, password, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })

    const data = await response.json()
    console.log(data)
    console.log(data.token)
    writeCookie("jwt_token", data.token, 7)
    newUser(data.username)
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (username, email, password) => {

    console.log(username)
    console.log(email)
    console.log(password)
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })

        })

        const data = await response.json()
        console.log(data)
    }catch (error) {
        console.log(error)
    }
}


export const readUsers = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}readUsers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            const data = await response.json()
            // console.log(data)
            const usernames = data.users.map(users => users.username)
            console.log(usernames)
            return usernames
        } catch (error) {
            console.log(error)
        }
}

export const authCheck = async (cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}authCheck`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : cookie
            }
        })
        const data = await response.json()
        return data.user.user
    } catch (error) {
        console.log(error)
    }
}



export const deleteUser = async (username, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}deleteUser`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })

    const data = await response.json()
    console.log(data)
    return deleteUser(data.username)
    } catch (error) {
        console.log(error)
    }
}