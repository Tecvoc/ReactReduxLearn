import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserDetail extends Component {
  render() {
  if (!this.props.user) {
    return (
      <h2> Select a User </h2>
    )
  }
    return (
      <div>
        <h2> {this.props.user.name} </h2>
        <h3> {this.props.user.age} </h3>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.activeUser
  }
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({selectUser: selectUser}, dispatch)
// }

export default connect(mapStateToProps)(UserDetail);
