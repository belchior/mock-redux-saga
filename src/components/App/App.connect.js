import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRepos } from '../../redux/actions';
import { repositories } from '../../redux/selectors';
import App from './App';


const mapStateToProps = state => ({
  repos: repositories(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRepos,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
