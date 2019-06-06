import React from 'react';
import {Grid, Cell} from 'react-mdl';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';


const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <Grid>
        <Cell col={2}></Cell>
        <Cell col={8}>
          <div className="project-page">
            <div className="project-title">
              <h3>{project.title}</h3>
            </div>
            <div className="project-summary-title">
              <h5>Summary</h5>
            </div>
            <div className="project-summary">
              {project.summary}
            </div>
            <div className="project-content-title">
              <h5>Project Details</h5>
            </div>
            <div className="project-content" dangerouslySetInnerHTML={{__html: (project.content || '')}}>
            </div>
            <div className="post-date">
              {moment(project.createdAt.toDate()).calendar()}.
            </div>
          </div>
        </Cell>
        <Cell col={2}></Cell>
      </Grid>
    )
  }
  else {
    return (
      <h4>Looking for projects...</h4>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  //if we have project return project of id = id, if not return null
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)
