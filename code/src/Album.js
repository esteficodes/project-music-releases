import React from 'react'

export const Album = (props) => {
    return (
        <div className="card"> 
          <div className="picture">
            <a href={props.albumurl}>         
            <img className="image" src={props.picture} alt="album cover"/></a>
            <div className="icons">
            <img className="heart-icon" src="icons/heart.png" alt="" />
            <img className="play-icon"  src="icons/play.png" alt="" />
            <img className="dots-icon"  src="icons/dots.png" alt="" />
            </div>
        </div>
            <h2>{props.name}</h2>
            <a className="link" href={props.externalurls}>
            <h3>{props.artist}</h3></a>           
        </div>

    )
}