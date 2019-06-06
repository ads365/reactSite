import React from 'react';
import { Layout, Header, Drawer} from 'react-mdl';
import { Link } from 'react-router-dom';
import SignedInNavbar from './signedInNavbar';
import SignedOutNavbar from './signedOutNavbar';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);

  // if logged in links = signed in navbar, else signed out navbar
  const links = auth.uid? <SignedInNavbar /> : <SignedOutNavbar />

  return (
    <Layout>
      <Header className="header-colour" title={<Link style={{textDecoration:'none', color:'#FBFBFB', fontWeight:'bold'}} to="/">Anmol Singh</Link>} scroll>
          { links }
      </Header>
      <Drawer style={{background:'#333', color:'#333'}} title={<Link style={{color:'#FBFBFB'}} to="/">Anmol Singh</Link>}>
          { links }
      </Drawer>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);
