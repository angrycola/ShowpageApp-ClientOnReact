import React from 'react';
import '../../styles/itemCard.css'

const ItemCard = () => {
	return (
		<div className='item-container'>
			<div className="">
				<img src="/covers/115.png" />
			</div>
			<div className="">
				<p className="">Демо-версия</p>
				<p className="">5-11 классы</p>
				<p className="">Медиа-коллекция</p>
				<button className="">Перейти к обучению</button>
			</div>
		</div>
	);
};

export default ItemCard;
