import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';

const history = createHistory();

export default () => (
	<Router history={ history }>
		<Switch>
			<Route path='/' component={ App } />
		</Switch>
	</Router>
);
