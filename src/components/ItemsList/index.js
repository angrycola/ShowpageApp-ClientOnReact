import React from 'react';
import '../../styles/itemList.css'
import ItemCard from '../ItemCard';


const ItemsList = ({ items }) => {
	return (
		<div className="items-container">
			{ items.map(item => <ItemCard key={ item.extId } item={ item } />) }
		</div>
	);
};

export default ItemsList;
