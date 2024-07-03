import React from "react";

function Hero(props){
    const {heroName} = props

    if(heroName === 'Joker'){
        throw new Error('Joker is not a hero');
    }

    return(
        <h1>
            {heroName}
        </h1>
    )
}

export default Hero
