

import React 								from 'react';
import { Router,
				 Route,
				 browserHistory,
				 //IndexRoute,
				 //Link
				} 						from 'react-router';

// Import Components
import Home 								from './components/Home';
import PlayButton 					from './components/PlayButton';
//import DefaultApp 					from './components/DefaultApp';
import {BoardContainer} 		from './components/Board';


export default (
  <Router history={browserHistory}>
  	<Route component={Home}>
	    <Route path='/' component={PlayButton}/>
	    <Route path='play' name='butt' component={BoardContainer}/>
	  </Route>
  </Router>
);
