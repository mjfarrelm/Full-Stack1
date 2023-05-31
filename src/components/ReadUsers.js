import React from 'react'
import {useState, useEffect} from 'react'

import {readUsers} from "../utils"

const ReadUsers = () => {

    const [usernames, setUsernames] = useState()
    useEffect (()=> {
        loadUsers()
    }, [])

    const loadUsers = async () => {
    let users = await readUsers()
    setUsernames(users)
    }

    return (
        <div className="container">
            {
                usernames?.length > 0
                ?(
                    <div className="usernames">
                        {
                            usernames.map((user)=>(
                                <h3 key={user}> {user} </h3>
                            ))
                        }
                        </div>
                    ):(
                        <h3>NO users found</h3>
                    )
            }
        </div>
    )
}



export default ReadUsers