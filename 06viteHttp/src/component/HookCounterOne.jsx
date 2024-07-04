import React, { useEffect, useState } from 'react'

function HookCounterOne(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("useEffect")
        document.title = `Clicked ${count} times`
    },[count])

    const inputChangeHandler = (e) => {
        setName(e.target.value)
    }

    return(
        <div>
            <h1>Hook Count: {count}</h1>
            <input type="text" value={name} onChange={(e) => inputChangeHandler(e)}/>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default HookCounterOne
