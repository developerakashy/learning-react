import React from 'react'

function List(){
    let names = ['Akash', 'Ayush', 'Sumit']

    let listNames = names.map(name => <h1>{name}</h1>)

    return(
        <div>
            {listNames}
        </div>
    )
}

export default List
