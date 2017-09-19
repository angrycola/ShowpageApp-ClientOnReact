import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { store } from './store';
import Routes from './routes';

ReactDOM.render(
	<Provider store={ store }>
		<Routes />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
