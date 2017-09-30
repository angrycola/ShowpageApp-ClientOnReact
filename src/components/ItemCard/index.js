import React from 'react';
import '../../styles/itemCard.css'

const ItemCard = ({ item, currency }) => {
	const { price, genre, subject, priceBonus, grade } = item;
	return (
		<div className="item-wrapper">
			<div className='item-container'>
				<div>
					<img src="/covers/cover.png" alt='no img (' />
				</div>
				<div>
					<p>{ subject }</p>
					{
						grade.length === 1
							?	<p>{ grade[0] } класс</p>
							: <p>{ grade[0] } - { grade[grade.length -1]} классы</p>
					}
					<p>{ genre }</p>
					{ item.price === 0
						?	<button>Подробнее</button>
						: <button>
							{ !currency || currency.buttonText === 'рубли'
								? `Купить за ${ price } рублей`
								: `Купить за ${ priceBonus } бонусов`
							}
						</button>
					}
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
