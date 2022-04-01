import React from 'react'

const Song = ({song}) =>
  <div key={song.id}>
    <p>{song.artist}</p>
    <p>{song.title}</p>
    <h4>{song.duration}</h4>
    <p><a href={song.url} target="_blank" rel="noopener noreferrer">song url</a></p>
  </div>

export default Song
