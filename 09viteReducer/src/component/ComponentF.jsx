import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComponentF(){
    const counter = useContext(CountContext)

    return(
        <div>
            Component F: {counter.currentCount}
            <button onClick={() => counter.dispatcher('increment')}>Increment</button>
            <button onClick={() => counter.dispatcher('decrement')}>Decrement</button>
            <button onClick={() => counter.dispatcher('reset')}>Reset</button>
        </div>
    )
}


export default ComponentF
