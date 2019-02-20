import { connect } from 'react-redux';
import ErrorMessageComponent from '../components/ErrorMessageComponent';

const mapStateToProps = (state) => {
  return {
    message: state.reader.message
  }
};

export default connect(
  mapStateToProps,
  null
)(ErrorMessageComponent);
