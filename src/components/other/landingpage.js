import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import TextLoop from "react-text-loop";

class Landing extends Component {
  render() {
    return(
      <div className="landing-grid">
        <Grid>
          <Cell col={12}>
            <div className="banner-text">
              <h1>My name is Anmol.</h1>
              <h1>I like&nbsp;
                <TextLoop>
                  <span>programming</span>
                  <span>economics</span>
                  <span>blockchain</span>
                  <span>writing</span>
                </TextLoop>
                .
              </h1>
              <div className="social-links">
                <a href="https://twitter.com/anmol365" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/ads365" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://medium.com/@anmol365" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-medium" aria-hidden="true"></i>
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
