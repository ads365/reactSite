import React from 'react';
import {Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';

const SignedOutNavbar = () => {
  return (
    <Navigation>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/signup">Sign Up</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/signin">Sign In</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/blogs">Blog</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/projects">Projects</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold', fontSize:'17px'}} to="/contact">Contact</Link>
    </Navigation>
  )
}

export default SignedOutNavbar;
