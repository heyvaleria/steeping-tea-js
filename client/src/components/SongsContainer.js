import React, { Component, useState, useEffect, useMemo } from 'react'
import Song from './Song'
import Filter from './Filter'

const SongsContainer = () => {
  // const [filterBy, setFilterBy] = useState();
  const [songs, setSongs] = useState();
  //
  // const filteredSongs = useMemo(() => {
  //     return songs.filter(({ type }) => {
  //         return type === filterBy;
  //       })
  //
  //     }, [filterBy]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/songs.json")
    .then(response => response.json())
    .then(data => setSongs(data))
  },[])

  return (
    <div>
      <h2>Songs:</h2>
      <div>
        {songs && songs.map((song) =>
          <Song song={song} key={song.id} />
        )}
      </div>
    </div>
  );
}

export default SongsContainer
