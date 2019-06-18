import React from 'react';
import {Navigation} from 'react-mdl';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInNavbar = (props) => {
  return (
    <Navigation>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="" onClick={props.signOut}>Log Out</NavLink>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/dashboard">Dashboard</NavLink>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/createProject">Create Project</NavLink>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/createBlog">Create Blog</NavLink>
    </Navigation>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNavbar);
