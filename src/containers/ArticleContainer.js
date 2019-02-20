import { connect } from 'react-redux';
import ArticleComponent from '../components/ArticleComponent';

const mapStateToProps = state => {
  return {
    article: state.reader.article
  }
}

export default connect(
  mapStateToProps
)(ArticleComponent);
