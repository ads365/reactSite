import React from 'react';
import {Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';

const SignedOutNavbar = () => {
  return (
    <Navigation>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/signup">Sign Up</Link>
      <Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/signin">Sign In</Link>
    </Navigation>
  )
}

export default SignedOutNavbar;
