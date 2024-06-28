import React from 'react'

function PersonList(){
    let PersonData = [
        {
            id:1,
            name: 'Akash',
            age: 22,
            skill: 'React'
        },
        {
            id:2,
            name: 'Ayush',
            age: 24,
            skill: 'Angular'
        },
        {
            id:3,
            name: 'Ankur',
            age: 26,
            skill: 'Vue'
        },
        {
            id:4,
            name: 'Anil',
            age: 27,
            skill: 'Next'
        }
    ]

    let PersonInfoList = PersonData.map(person =>
        <h1 key={person.id}>I am {person.name}. I am {person.age} years old. I know {person.skill}</h1>
    )

    return(
        <div>
            {PersonInfoList}
        </div>
    )
}

export default PersonList
