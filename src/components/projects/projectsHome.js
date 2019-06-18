import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ProjectsListHome from '../projects/projectsListHome';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ProjectsHome extends Component {
  render() {
    console.log(this.props);
    const {projects} = this.props;

    //parse project state to ProjectList
    return(
      <div className="dashboard-container" style={{color: '#303A45'}}>
        <Grid>
          <Cell col={2}></Cell>
          <Cell col={8}>
            <h4>Project List</h4>
            <ProjectsListHome projects={projects}/>
          </Cell>
          <Cell col={2}></Cell>
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
    {collection: 'projects', orderBy: ['createdAt', 'desc']},
  ])
)(ProjectsHome)
