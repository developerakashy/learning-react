import React from 'react'

function MemoComp({name}){
    console.log("Functional Memo component")
    return (
        <h1>MemoComp - {name}</h1>
    )
}

export default React.memo(MemoComp)
