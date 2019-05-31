import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Personal Website</h1>

              <hr/>

              <p>NodeJS | Solidity | Python | Web3 | Truffle | React | Bootstrap | HTML/CSS</p>

              <div className="social-links">
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-medium" aria-hidden="true"></i>
                </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
