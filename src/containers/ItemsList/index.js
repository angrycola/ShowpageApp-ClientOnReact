import { connect } from 'react-redux';
import ItemsList from '../../components/ItemsList';

const mapStateToProps = ({ collection, filters }) => {
	const items = collection.items.filter(item =>
		(filters.subject === 'Все предметы' || item.subject === filters.subject) &&
		(filters.genre === 'Все жанры' || item.genre === filters.genre) &&
		(filters.grade === 'Все классы' || item.grade.includes(filters.grade)) &&
		(filters.search === '' || item.subject.toLowerCase().includes(filters.search.toLowerCase()))
	);

	return ({ items });
};
export default connect(mapStateToProps)(ItemsList);
