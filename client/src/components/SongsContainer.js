import React, { Component, useState } from 'react'
import Song from './Song'
import Filter from './Filter'


class SongsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const env_url = 'http://localhost:8000';
    return fetch(env_url + '/api/v1/songs.json')
    .then(response => response.json())
    .then(response => {
      this.setState({songs: response})
    })
    .catch(error => console.log(error))
  }

    render() {
      return (
        <div>
          <Filter songs={this.state.songs} />

          
          Songs container:
          <div class="songs">
            {this.state.songs && this.state.songs.map((song) => {
              return (<Song song={song} key={song.id} />)
            })}
          </div>
	      </div>
    );
  }
}

export default SongsContainer
