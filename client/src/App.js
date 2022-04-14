import React, { Component } from 'react'
import './App.css'
import SongsContainer from './components/SongsContainer'
import AddSongForm from './components/AddSongForm'

class App extends Component {
  render() {
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
}

export default App
