import React from 'react'
import data from './data.json'
import {Album} from './Album.js'

console.log(data)

const albumArray = data.albums.items



export const App = () => {
  return (
    <div>
      {albumArray.map((albumArray) =>{
        return ( 
          <albumArray key={albumArray.name} name={albumArray.name} artist={albumArray.artists[0].name} picture={albumArray.images[0].url}/>
        )
      })}
    </div>
  )
}
