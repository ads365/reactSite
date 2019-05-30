import React from 'react';
import {Grid, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <Grid>
        <div className="project-card">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{project.title}</CardTitle>
              <CardText>
                  {project.content}
              </CardText>
              <CardActions border>
                <div>timestamp</div>
              </CardActions>
          </Card>
        </div>
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
