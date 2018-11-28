import React, { Component } from 'react';
import './App.css';
import { PlayList } from '../PlayList/PlayList.js';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js'

class App extends Component {
  constructor(props) {
  super(props);

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
      ]
    }



}

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
    {/*    <!-- Add a SearchBar component --> */}
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults}/>

  {/*        <!-- Add a Playlist component -->       */}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
