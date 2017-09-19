import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';

const history = createHistory();

export default () => (
	<BrowserRouter history={ history }>
		<Switch>
			<Route path='/' component={ App } />
		</Switch>
	</BrowserRouter>
);
