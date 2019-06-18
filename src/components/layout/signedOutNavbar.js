import React from 'react';
import {Navigation} from 'react-mdl';
import { NavLink } from 'react-router-dom';

const SignedOutNavbar = () => {
  return (
    <Navigation>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/signup">Sign Up</NavLink>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/signin">Sign In</NavLink>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/blogs">Blog</NavLink>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/projects">Projects</NavLink>
      <NavLink className='nav-link' activeStyle={{fontSize:'19px'}} style={{fontSize:'17px', fontWeight:'bold'}} to="/contact">Contact</NavLink>
    </Navigation>
  )
}

export default SignedOutNavbar;
