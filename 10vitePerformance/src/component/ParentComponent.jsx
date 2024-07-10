import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent(){
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(20000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])

    return (
        <div>
            <Title/>
            <Count text='age' count={age}/>
            <Button handleClick={incrementAge}>Inrement Age</Button>
            <Count text='salary' count={salary}/>
            <Button handleClick={incrementSalary}>Incremnt Salary</Button>
        </div>
    )
}

export default ParentComponent
