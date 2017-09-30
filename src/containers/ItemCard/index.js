import { connect } from 'react-redux';
import ItemCard from '../../components/ItemCard';

const mapStateToProps = ({ currency }) => ({ currency });
export default connect(mapStateToProps)(ItemCard);
