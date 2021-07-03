import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Teacher, Student } from './';
import { ToastContainer} from 'react-toastify';
class Home extends Component {
  render(props) {
    const { type } = this.props;

    return <div><ToastContainer />{type === 'teacher' ? <Teacher /> : <Student />}</div>;
  }
}
function mapStateToProps(state) {
  return {
    type: state.auth.user.type,
  };
}
export default connect(mapStateToProps)(Home);
