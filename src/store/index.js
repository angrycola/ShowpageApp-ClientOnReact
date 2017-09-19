import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

export const store = createStore(
	combineReducers(reducers),
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
