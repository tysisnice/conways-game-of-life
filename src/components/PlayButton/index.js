
import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.css';

export default class PlayButton extends Component {

  render() {
    return (
      <Link to='play'  style={{ textDecoration: 'none' }}>
	      <div className="playButton">
	        Play the Game of Life!
	      </div>
	    </Link>
    );
  }
}
