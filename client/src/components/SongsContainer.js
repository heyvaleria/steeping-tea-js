import React, { useState, useEffect, useMemo } from 'react'
import Song from './Song'

const SongsContainer = () => {
  const teaTypes = [
    {
      label: 'Green Tea',
      range: [0, 180],
    },
    {
      label: 'Black Tea',
      range: [181, 300],
    },
    {
      label: 'Herbal Tea',
      range: [301, 800],
    },
    {
      label: 'All Tea Types',
      range: [0, 800],
    },
  ];

  const [tea, setTeaBy] = useState();
  const [songs, setSongs] = useState([]);

  const filteredSongs = useMemo(() => {
    return songs.filter(song =>
      song.duration <= tea.range[1] && song.duration >= tea.range[0]
    )
  }, [tea]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/songs.json")
    .then(response => response.json())
    .then(data => setSongs(data))
  },[])

  return (
    <div>
      {teaTypes.map((tea) =>
        <button key={tea.label} onClick={() => setTeaBy(tea)}>{tea.label}</button>
      )}
      <h2>Songs:</h2>
      <div>
        {filteredSongs.map((song) =>
          <Song song={song} key={song.id} />
        )}
      </div>
    </div>
  );
}

export default SongsContainer
