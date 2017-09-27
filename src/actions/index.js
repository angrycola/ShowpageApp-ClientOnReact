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
