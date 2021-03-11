import React from 'react'

export const Album = (props) => {
    return (
        <div className="card"> 
          <div className="picture">
            <a href={props.albumurl}>         
            <img className="image" src={props.picture} alt="album cover"/></a>
            <div className="icons"></div>
            <img className="dot-icon" src="/code/public/icons/dots.svg" alt="dot icon"/>
            </div>  
            <h2>{props.name}</h2>
            <a className="link" href={props.externalurls}>
            <h3>{props.artist}</h3></a>           
        </div>

    )
}