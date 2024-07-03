import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentF(){

    return(
        <UserConsumer>
            {(username) => {
                return <h1>{username}</h1>
            }}
        </UserConsumer>
    )
}

export default ComponentF
