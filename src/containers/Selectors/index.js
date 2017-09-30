import { connect } from 'react-redux';
import Selectors from '../../components/Selectors';
import { filterSubject, filterGenre, filterGrade, filterSearch } from '../../actions';

const mapDispatchToProps = dispatch => ({
	filterSubject: subject => dispatch(filterSubject(subject)),
	filterGenre: genre => dispatch(filterGenre(genre)),
	filterGrade: grade => dispatch(filterGrade(grade)),
	filterSearch: text => dispatch(filterSearch(text))
});

export default connect(null, mapDispatchToProps)(Selectors);
