import React from 'react'

export const Album = (props) => {
    return (
        <div>
            <img src={props.picture} alt="album cover"/>
            <h2>{props.name}</h2>
            <h3>{props.artist}</h3>

        </div>

    )
}