import api from '../api/index.json';
import C from '../constants';

export const indexItems = () => dispatch => {
	var items = [];

	api.items.forEach(item => {
		const grade = item.grade.split(';');
		const { price, genre, description, title, extId, subject, priceBonus } = item;
		items = [...items, { price, genre, grade, description, title, extId, subject, priceBonus }];
	});
	return dispatch({ type: C.INDEX_ITEMS, payload: items });
};

export const filterSubject = subject => dispatch => dispatch({ type: C.BY_SUBJECT, payload: subject });

export const filterGenre = genre => dispatch => dispatch({ type: C.BY_GENRE, payload: genre });

export const filterGrade = grade => dispatch => dispatch({ type: C.BY_GRADE, payload: grade });

export const filterSearch = text => dispatch => dispatch({ type: C.BY_SEARCH, payload: text });
