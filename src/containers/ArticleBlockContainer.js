import { connect } from 'react-redux';
import ArticleBlockComponent from '../components/ArticleBlockComponent';

const mapStateToProps = state => ({
  success: state.reader.success,
});

export default connect(
  mapStateToProps,
  null,
)(ArticleBlockComponent);
