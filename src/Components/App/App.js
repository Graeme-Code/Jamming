import React, { Component } from 'react';
import './App.css';
import { PlayList } from '../PlayList/PlayList.js';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js'

class App extends Component {
  constructor(props) {
  super(props);
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);


  this.state = {
        searchResults:[
          {
            id: '001',
            name: 'Track 001',
            artist: 'Alan',
            album: 'The Very, Very Best of AB'
          },
          {
            id: '002',
            name: 'Track 002',
            artist: 'Alan',
            album: 'The Very, Very Best of AB'
          },
          {
            id: '003',
            name: 'Track 003',
            artist: 'Alan',
            album: 'The Very, Very Best of AB'
          }
        ],
        playlistTracks:[
          {
            id: '001',
            name: 'Track 001',
            artist: 'Alan',
            album: 'The Very, Very Best of AB'
          },
          {
            id: '005',
            name: 'Track 005',
            artist: 'Alan',
            album: 'The Very, Very Best of AB'
          }
        ],
        playlistName:'Whatta Plalist'
      }

}




addTrack(track) {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
}else {
  this.state.playlistTracks.push(track)
  this.setState({playlist: this.state.playlistTracks,
                 })
      }
}

removeTrack(track) {
  let tracks = this.state.playlistTracks;
    tracks = tracks.filter(current => current.id !== track.id);
    this.setState({ playlistTracks: tracks });
}


  render() {


    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>


      <div className="App">
    {/*    <!-- Add a SearchBar component --> */}
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults}
                       onAdd={this.addTrack}
                       isRemoval={false}
                       />

      <PlayList playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                isRemoval={true}
                />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
