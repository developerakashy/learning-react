import React, { useState } from 'react'

function HookCounterTwo(){
    let initialValue = 0
    const [count, setCount] = useState(initialValue)

    const IncrementByFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevState => prevState + 1)
        }
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment by 1</button>
            <button onClick={() => setCount(count - 1)}>Decrement by 1</button>
            <button onClick={IncrementByFive}>IncrementByFive</button>
        </div>

    )
}

export default HookCounterTwo
