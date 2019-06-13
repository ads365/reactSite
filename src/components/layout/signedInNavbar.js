import React from 'react';
import {Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInNavbar = (props) => {
  return (
    <Navigation>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="" onClick={props.signOut}>Log Out</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/dashboard">Dashboard</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/createProject">Create Project</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/createBlog">Create Blog</Link>
    </Navigation>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNavbar);
