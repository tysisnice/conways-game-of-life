
import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.css';
import store from '../../redux/store';



function startGame() {
		store.dispatch({type: 'FIRST'});
	}


export default class PlayButton extends Component {

  render() {
    return (
    	<div  onClick={startGame}>
	      <Link to='play'  style={{ textDecoration: 'none' }}>
		      <div className="playButton">
		        Play the Game of Life!
		      </div>
		    </Link>
		  </div>
    );
  }
}
