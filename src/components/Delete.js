import React from 'react'
import {useState} from 'react'

import {deleteUser} from "../utils"

const Delete = ({newUser}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


const submitHandler = async (event) => {
    event.preventDefault()
    await deleteUser(username, password)
}
return(
    <div className = "login">
        <h2>Remove Profile</h2>

        <form onSubmit={submitHandler}>
            <label>Username:
                <input onChange={(event) => setUsername(event.target.value)}></input>
            </label>

            <br></br>

            <label>Password:
            <input type='password' onChange={(event) => setPassword(event.target.value)}></input>
            </label>

            <br></br>

            <button  type="submit"> Click here to delete profile</button>

        </form>
    </div>
)
}

export default Delete