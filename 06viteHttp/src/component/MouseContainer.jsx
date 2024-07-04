import React, {useState} from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

function MouseCointainer(){
    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toogle display</button>
            {display && <ClassMouse/>}
        </div>
    )
}

export default MouseCointainer
