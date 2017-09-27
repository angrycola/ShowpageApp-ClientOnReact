import React from 'react';
import Header from './Header';
import Selectors from '../containers/Selectors';
import ItemsList from '../containers/ItemsList';

const App = () => {
	return (
		<div>
			<Header />
			<Selectors />			
			<ItemsList />
		</div>
	);
};

export default App;
