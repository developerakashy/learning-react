import React from 'react'

function ChildComponent(props){
    const {greetHandler} = props

    return(
        <button onClick={greetHandler}>Greet Parent using child component</button>

    )
}

export default ChildComponent
