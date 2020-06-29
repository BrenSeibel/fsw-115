  
import React from 'react';
import './superHero.css';

function SuperHeroes(props) {
    const handleClick = (e) => {
    return (
        alert(props.item.catchPhrase)
    )
}

return (
    <div onClick = {handleClick}>
        <h1>{props.item.name}</h1>
        <img src = {props.item.imageName} alt = "images" />
    </div>    
)
}

export default SuperHeroes