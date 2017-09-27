import React from 'react';
import '../../styles/itemCard.css'

const ItemCard = ({ item }) => {
	const { price, genre, description, title, extId, subject, priceBonus } = item;
	return (
		<div className='item-container'>
			<div className="">
				<img src="/covers/115.png" />
			</div>
			<div className="">
				<p className="">{ item.subject }</p>
				<p className="">{ item.grade }</p>
				<p className="">{ item.genre }</p>
				<button className="">Перейти к обучению</button>
			</div>
		</div>
	);
};

export default ItemCard;
