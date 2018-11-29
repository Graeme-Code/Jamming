import React from 'react';
import './Track.css';

export class Track extends React.Component {
constructor(props){
  super(props);
  this.addTrack = this.addTrack.bind(this);
}

addTrack() {
  this.props.onTrack(this.props.track);
  //I'm not sure how this works...
}





render () {
let isRemoval;

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}|{this.props.track.album}</p>
        </div>
        <a className="Track-action">{isRemoval ? '-' : (<a onClick={this.addTrack}>+</a>)}</a>
      </div>
    );
  }
}
