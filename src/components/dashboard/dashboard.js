import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Notifications from './notifications';
import ProjectList from '../projects/projectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const {projects} = this.props;

    //parse project state to ProjectList
    return(
      <div className="dashboard-container">
        <Grid>
          <Cell col={4}>
            <h4>Project List</h4>
            <ProjectList projects={projects}/>
          </Cell>
          <Cell col={4}>
            <h4>Blog Posts</h4>
          </Cell>
          <Cell col={4}>
            <Notifications />
          </Cell>
        </Grid>
      </div>
    )
  }
}

//state is grabbed from store defiend in index.js which is fed by store folder and reducers
const mapStateToProps = (state) => {
  console.log(state);
  return{
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Dashboard)
