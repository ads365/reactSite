import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class NotFound extends Component {
  render() {
    return(
      <div className="landing-grid">
        <Grid>
          <Cell col={12}>
            <div className="banner-text">
              <h1>Page Not Found</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default NotFound;
