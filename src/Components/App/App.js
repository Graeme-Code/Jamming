import React, { Component } from 'react';
import './App.css';
import { PlayList } from '../PlayList/PlayList.js';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js'
import Spotify from '../../util/Spotify.js'

class App extends Component {
  constructor(props) {
  super(props);
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);


  this.state = {
    searchResults: [],
    playlistName: 'New Playlist',
    playlistTracks: []
  }

}




addTrack(track) {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
}else {
  this.state.playlistTracks.push(track)
  this.setState({playlist: this.state.playlistTracks})
      }
}

removeTrack(track) {
  let tracks = this.state.playlistTracks;
    tracks = tracks.filter(current => current.id !== track.id);
    this.setState({ playlistTracks: tracks });
}

updatePlaylistName(name) {
  let playlistName = this.state.playlistName;
  this.setState({playlistName: name})
}


savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
     });
  }

search(term) {
  Spotify.search(term).then(searchResults => {
     this.setState({ searchResults: searchResults })
   });
}




  render() {


    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>


      <div className="App">
        <SearchBar  onSearch={this.search} />

        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults}
                       onAdd={this.addTrack}
                       isRemoval={false}
                       />

      <PlayList playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                isRemoval={true}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
                />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
