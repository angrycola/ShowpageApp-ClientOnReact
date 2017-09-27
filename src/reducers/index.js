import C from '../constants';

export const collection = (state={ items: [] }, action) => {
	switch (action.type) {
	case C.INDEX_ITEMS:
		return { ...state, items: action.payload };

	default: return state;
	}
};
