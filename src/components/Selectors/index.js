import React from 'react';
import '../../styles/selectBar.css';

const Selectors = () => {


	return (
		<div className='selector-wrapper'>
			<div>
				<select>
					<option>Все предметы</option>
					<option>Алгебра</option>
					<option>Химия</option>
				</select>
			</div>
			<div>
				<select>
					<option value="">Все жанры</option>
					<option >Задачник</option>
				</select>
			</div>
			<div>
				<select>
					<option value="">Все классы</option>
					<option >11</option>
				</select>
			</div>
			<div>
				<select>
					<option value="">Рубли</option>
					<option>Бонусы</option>
				</select>
			</div>
			<div>
				<input className="search-text" placeholder="Поиск" id="search" name="search" />
			</div>
		</div>
	);
};

export default Selectors;
