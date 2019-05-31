import React from 'react';
import {Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';

const SignedOutNavbar = () => {
  return (
    <Navigation>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/dashboard">Dashboard</Link>
    </Navigation>
  )
}

export default SignedOutNavbar;
