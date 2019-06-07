import React from 'react';
import {Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';

const SignedOutNavbar = () => {
  return (
    <Navigation>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/signup">Sign Up</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/signin">Sign In</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/blogs">Blog</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/projects">Projects</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/contact">Contact</Link>
    </Navigation>
  )
}

export default SignedOutNavbar;
