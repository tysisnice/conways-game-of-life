
import React from 'react';
import './index.css';
import logo from '../../../public/content/logo.svg';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import { defaultAction } from '../../redux/actions';



const DefaultApp = React.createClass({

  componentDidMount: function() {
    store.dispatch(defaultAction('users', 'User Results'));
  },

  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/poop' > Get Poop </Link> <br/>
        <button onClick={this.alterState}>if Poop then add more</button>
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    propName: store
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    alterState: function() {
      dispatch(defaultAction('add-to-new', 'add-more'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultApp);
