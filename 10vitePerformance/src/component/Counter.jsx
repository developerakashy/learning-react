import React, { useMemo, useState } from "react";

function Counter(){
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementCountOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementCountTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    return(
        <div>
            <button onClick={incrementCountOne}>Count-1: {countOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <div>
                <button onClick={incrementCountTwo}>Count-2: {countTwo}</button>
            </div>
        </div>
    )
}

export default Counter
