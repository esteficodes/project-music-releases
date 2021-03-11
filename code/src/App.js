import React from 'react'
import data from './data.json'
import {Album} from './Album.js'
import {Header} from './Header'

console.log(data)

const albumArray = data.albums.items



export const App = () => {
  return (
  <> 
    <Header />
    <div className="main">
      {albumArray.map((album) =>{
        return (  
          <Album key={album.name} name={album.name} artist={album.artists[0].name} picture={album.images[0].url} externalurls={album.artists[0].external_urls.spotify} albumurl={album.external_urls.spotify}/>
        )
      })}
    </div>
  </>
  )
}


