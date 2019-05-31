import React from 'react';
import { Layout, Header, Drawer} from 'react-mdl';
import { Link } from 'react-router-dom';
import SignedInNavbar from './signedInNavbar';
import SignedOutNavbar from './signedOutNavbar';
import { connect } from 'react-redux';

const Navbar = () => {
  return (
    <Layout>
      <Header className="header-colour" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Anmol Singh</Link>} scroll>
          <SignedInNavbar />
          <SignedOutNavbar />
      </Header>
      <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">Anmol Singh</Link>} >
          <SignedInNavbar />
          <SignedOutNavbar />
      </Drawer>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
  }
}

export default connect(mapStateToProps)(Navbar);
