import React from 'react'
import './styles.css'

function ShowTODo({onGoingTask}){
    return(
        <div className='onGoing'>
            {onGoingTask}
        </div>
    )
}

export default ShowTODo
