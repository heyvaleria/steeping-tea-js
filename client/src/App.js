import React, { Component } from 'react'
import './App.css'
import SongsContainer from './components/SongsContainer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
      	  <h1>Steeping Tea</h1>
        </div>
	      <SongsContainer />
      </div>
    );
  }
}

export default App
