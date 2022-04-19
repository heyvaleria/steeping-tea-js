import React from 'react'
import './App.css'
import SongsContainer from './components/SongsContainer'
import AddSongForm from './components/AddSongForm'

const App = () => {
  return (
    <div className='App'>
      <div>
        <h1>Steeping Tea</h1>
      </div>
      <AddSongForm />
      <SongsContainer />
    </div>
  );
}

export default App
