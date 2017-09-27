import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { indexItems } from './actions';

import { store } from './store';
import Routes from './routes';
import './styles/normalize.css';

store.dispatch(indexItems());

ReactDOM.render(
	<Provider store={ store }>
		<Routes />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
