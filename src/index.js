
import React 							from 'react';
import ReactDOM 					from 'react-dom';
import 												 './index.css';
import { Provider } 			from 'react-redux';
import store 							from './redux/store';
import router 						from './router';
import { Map, List } 			from 'immutable';
// require('es6-promise').polyfill();


store.dispatch({type: 'SETUP'});
store.dispatch({type: 'RANDOMIZE'});


ReactDOM.render(
  <Provider store={store}>
  	{router}
  </Provider>,
  document.getElementById('root')
);


var startTimer = setInterval(() => {
		store.dispatch({type: 'RUN_GAME'});
	}, 0.1);
