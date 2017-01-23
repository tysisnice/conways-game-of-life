

import React, { Component } from 'react';
// import store from '../../redux/store.js';
// import { defaultAction } from '../../redux/actions';
import './index.css';

export default class Home extends Component {

  render() {
    return (
      <div className="home" id="home">
        <h1>Conway's Game of Life</h1>
        <div className="container">
        	{this.props.children}
        </div>
      </div>
    );
  }
}

