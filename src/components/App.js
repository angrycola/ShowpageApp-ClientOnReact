import React from 'react';
import Header from './Header';
import Selectors from './Selectors';
import ItemsList from './ItemsList';

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
