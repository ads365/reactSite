import React from 'react';
import {Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInNavbar = (props) => {
  return (
    <Navigation>
      <Link to="" onClick={props.signOut}>Log Out</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/create">Create Project</Link>
    </Navigation>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNavbar);
