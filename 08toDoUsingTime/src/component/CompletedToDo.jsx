import React from 'react'
// import './styles.css'

function CompletedToDo({completedList}){
    return(
        <div className='completed-view'>
            <h2>Completed  ({completedList.length})</h2>
            <div>
                {completedList}
            </div>
        </div>
    )
}

export default CompletedToDo
