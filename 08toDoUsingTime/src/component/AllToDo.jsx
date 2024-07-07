import React from 'react'
// import './styles.css'

function AllToDo({onGoingTask, delayedTask}){
    return(

        <div className='on-going'>
            <div>
                <h2>To Do</h2>
                {onGoingTask}
            </div>

            <div>
                <h2>Delayed</h2>
                {delayedTask}
            </div>
        </div>
    )
}

export default AllToDo
