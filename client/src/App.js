import React, { Component } from 'react'
import './App.css'
import SongsContainer from './components/SongsContainer'
import Filter from './components/Filter'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='static-text'>
      	  <h1>Steeping Tea</h1>
        </div>
        <Filter />
	      <SongsContainer />
      </div>
    );
  }
}

export default App
