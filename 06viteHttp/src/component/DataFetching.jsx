import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching(){
    const [post, setPost] = useState({})
    const [id, setId] = useState('')
    const [idOnButtonClick, setIdOnButtonClick] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idOnButtonClick}`)
        .then(response => {
            console.log(response.data)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[idOnButtonClick])

    const inputHandler = (e) => {
        setId(e.target.value)
    }

    const handleClick = () => {
        setIdOnButtonClick(id)
    }

    return(
        <div>
            <input
                type="text"
                value={id}
                onChange={inputHandler}
            />

            <button onClick={handleClick}>Fetch Post</button>
            <p>{post.title}</p>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching
