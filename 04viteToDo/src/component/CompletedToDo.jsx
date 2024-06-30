import React from 'react'
import './styles.css'

function CompletedToDo({completedList}){
    return(
        <div className='completed onGoing'>
            <h2>Completed  ({completedList.length})</h2>
            {completedList}
        </div>
    )
}

export default CompletedToDo
