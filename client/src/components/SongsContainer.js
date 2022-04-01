import React, { Component } from 'react'
import Song from './Song'

class SongsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    const env_url = 'http://localhost:8000';
    return fetch(env_url + '/api/v1/songs.json')
    .then(response => response.json())
    .then(response => {
      this.setState({projects: response})
    })
    .catch(error => console.log(error))
  }

    render() {
      return (
        <div>
          Songs container:
          {this.state.songs && this.state.songs.map((song) => {
              return (<Song song={song.title} key={song.id} />)
        })}
	      </div>
    );
  }
}

export default SongsContainer
