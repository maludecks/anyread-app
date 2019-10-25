import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import parseUrl from '../actions/urlParserActions';
import UrlParserComponent from '../components/UrlParserComponent';

const mapDispatchToProps = dispatch => bindActionCreators({
  parseUrl: url => parseUrl(url),
}, dispatch);

export default connect(
  mapDispatchToProps,
)(UrlParserComponent);
