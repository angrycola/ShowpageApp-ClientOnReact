import React from 'react';
import '../../styles/selectBar.css';

const subjects = [
	'Все предметы',
	'Алгебра',
	'Английский язык',
	'Биология',
	'География',
	'Геометрия',
	'Демо-версия',
	'Естествознание',
	'Информатика',
	'История',
	'Математика',
	'Обществознание',
	'Окружающий мир',
	'Русский язык',
	'Физика',
	'Химия'
];

const genres = [
	'Все жанры',
	'Задачник',
	'Медиа-коллекция',
	'Рабочая тетрадь',
	'Тренажер ВПР-2017',
	'Тренажер ЕГЭ-2016',
	'Тренажер ЕГЭ-2017'
];

const grades = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];

const Selectors = ({ filterSubject, filterGenre, filterGrade, filterSearch, changeCurrency }) => {

	const handleSubjectOptions = event => {
		filterSubject(event.target.value);
	};

	const handleGenreOptions = event => {
		filterGenre(event.target.value);
	};

	const handleGradeOptions = event => {
		filterGrade(event.target.value);
	};

	const handleSearchText = event => {
		filterSearch(event.target.value);
	};

	const handleCurrencyOptions = () => {
		changeCurrency();
	};

	return (
		<div className='selector-wrapper'>
			<div>
				<select onChange={ handleSubjectOptions }>
					{ subjects.map((subject, key) => <option key={ key }>{ subject }</option> ) }
				</select>
			</div>
			<div>
				<select onChange={ handleGenreOptions }>
					{ genres.map((genre, key) => <option key={ key }>{ genre }</option> ) }
				</select>
			</div>
			<div>
				<select onChange={ handleGradeOptions }>
					<option>Все классы</option>
					{ grades.map((grade, key) => <option key={ key }>{ grade }</option> ) }
				</select>
			</div>
			<div>
				<select onChange={ handleCurrencyOptions }>
					<option>Рубли</option>
					<option>Бонусы</option>
				</select>
			</div>
			<div>
				<input
					onChange={ handleSearchText }
					className="search-text"
					placeholder="Поиск"
				/>
			</div>
		</div>
	);
};

export default Selectors;
