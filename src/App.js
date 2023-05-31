import React from 'react'
import Login from "./components/Login"
import Register from "./components/Register"
import ReadUsers from "./components/ReadUsers"
import Delete from "./components/Delete"
import { getCookie } from './common'
import { authCheck } from './utils'

// TODO: import register componet here

import {useState, useEffect} from 'react'


function App() {

    const [user, setUser] = useState()

    useEffect (()=> {
        let cookie = getCookie("jwt_token")
        if(cookie !== false){
        loginWithToken(cookie)
        }
    }, [])

    const loginWithToken = async (cookie) => {
       let user = await authCheck(cookie)
       console.log(user)
       setUser(user)
    }

    return (
    <div className="App">
        <h1>My amazing app!</h1>

<Register />
<br></br>
<br></br>

<Login newUser={setUser} />

{/* TODO: render Register componet here */}

 {
 user
 ?
 <>
 <h2>Hello welcome {user} you have logged in</h2>
 <ReadUsers/>
 </>
 :
 <h2>Please log in</h2>
 }

<Delete/>


 </div>
 );
}



export default App;