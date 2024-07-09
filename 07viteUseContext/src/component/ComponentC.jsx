import React from 'react'
import { UserContext, ChannelContext } from '../App.jsx'

function ComponentC(){
    return(
        <UserContext.Consumer>

            {
                (user) => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                (channel) => {
                                    return <div>Componentc - {user} follows {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }

        </UserContext.Consumer>
    )
}

export default ComponentC
