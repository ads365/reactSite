import React from 'react';
import {Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';

const SignedInNavbar = () => {
  return (
    <Navigation>
      <Link to="/">Log Out</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/create">Create Project</Link>
    </Navigation>
  )
}

export default SignedInNavbar;
