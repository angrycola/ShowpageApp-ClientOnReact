import { connect } from 'react-redux';
import ItemsList from '../../components/ItemsList';

const mapStateToProps = ({ collection }) => ({ items: collection.items });
export default connect(mapStateToProps)(ItemsList);
