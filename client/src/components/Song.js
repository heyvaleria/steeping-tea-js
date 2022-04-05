import React from 'react'

const Song = ({song}) =>
  <div key={song.id}>
    <hr />
    <p>Artist: {song.artist}</p>
    <p>Title: {song.title}</p>
    <h4>Duration: {song.duration}</h4>
    <p>This will be the audio tag: <a href={song.url} target="_blank" rel="noopener noreferrer">song url</a></p>
  </div>

export default Song
