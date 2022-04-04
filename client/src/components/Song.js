import React from 'react'

const Song = ({song}) =>
  <div key={song.id}>
    <p>Artist: {song.artist}</p>
    <p>Title: {song.title}</p>
    <h4>Duration: {song.duration}</h4>
    <p>URL: <a href={song.url} target="_blank" rel="noopener noreferrer">song url</a></p>
    // Actually this will be the audio tag element
  </div>

export default Song
