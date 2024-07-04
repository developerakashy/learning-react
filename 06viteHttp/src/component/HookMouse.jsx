import React, { useEffect, useState } from 'react'

function HookMouse(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('mouse event unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    const logMousePosition = (e) => {
        console.log("useeffect")
        setX(e.clientX)
        setY(e.clientY)
    }

    return(
        <div>
            <h1>X - {x} , Y - {y}</h1>
        </div>
    )
}

export default HookMouse
