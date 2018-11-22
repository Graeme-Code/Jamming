import React from 'react';
import './PlayList.css';
//import TrackList component
import { TrackList } from '../TrackList/TrackList.js';

export class PlayList extends React.Component {
render () {

  return (
    <div className="Playlist">
      <input defaultValue={'New PlayList'}/>
    {/*}  <!-- Add a TrackList component --> */}
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
    );
  }
};
