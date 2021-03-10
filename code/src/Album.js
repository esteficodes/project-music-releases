import React from 'react'

export const Album = (props) => {
    return (
        <div> 
            <a href={props.albumurl}>         
            <img src={props.picture} alt="album cover"/></a>  
            <h2>{props.name}</h2>
            <a href={props.externalurls}>
            <h3>{props.artist}</h3></a>           
        </div>

    )
}