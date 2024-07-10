import React, { useContext } from 'react'
import {CountContext} from '../App.jsx'


function ComponentD(){
    const counter = useContext(CountContext)

    return(
        <div>
            Component D: {counter.currentCount}
            <button onClick={() => counter.dispatcher('increment')}>Increment</button>
            <button onClick={() => counter.dispatcher('decrement')}>Decrement</button>
            <button onClick={() => counter.dispatcher('reset')}>Reset</button>
        </div>
    )
}


export default ComponentD
