import React from 'react'

const Song = ({song}) =>
  <div key={song.id}>
    <hr />
    <p>Artist: {song.artist}</p>
    <p>Title: {song.title}</p>
    <audio src={song.url} controls />
  </div>

export default Song
