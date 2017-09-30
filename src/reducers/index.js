import C from '../constants';

export const collection = (state={ items: [] }, action) => {
	switch (action.type) {
	case C.INDEX_ITEMS:
		return { ...state, items: action.payload };
	default: return state;
	}
};

const initFilters = {
	subject: 'Все предметы',
	genre: 'Все жанры',
	grade: 'Все классы',
	search: ''
};

export const filters = (state=initFilters, action) => {
	switch (action.type) {
	case C.BY_SUBJECT:
		return { ...state, subject: action.payload };
	case C.BY_GENRE:
		return { ...state, genre: action.payload };
	case C.BY_GRADE:
		return { ...state, grade: action.payload };
	case C.BY_SEARCH:
		return { ...state, search: action.payload };
	default: return state;
	}
};
