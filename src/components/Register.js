import React from 'react'
import {useState} from 'react'

import {registerUser} from "../utils"

const Register = ({newUser}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await registerUser(username, email, password)
    }

    return (
        <div className = "register">
            <h2>Please register your details below</h2>

            <form onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)}></input>
                </label>

                <br></br>

                <label>Email:
                <input onChange={(event) => setEmail(event.target.value)}></input>
                </label>

                <br></br>

                <label>Password:
                <input type='password' onChange={(event) => setPassword(event.target.value)}></input>
                </label>

                <br></br>

                <button type="submit"> Click here to register your account</button>

            </form>

        </div>
    )
}

export default Register
