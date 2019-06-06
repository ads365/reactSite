import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Notifications from './notifications';
import ProjectList from '../projects/projectList';
import BlogList from '../blogs/blogList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const {projects, blogs, auth, notifications} = this.props;

    //if not logged in redirect to home - state obtained from props
    if(!auth.uid) return <Redirect to='/' />

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
            <BlogList blogs={blogs}/>
          </Cell>
          <Cell col={4}>
            <Notifications notifications={notifications}/>
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
    projects: state.firestore.ordered.projects,
    blogs: state.firestore.ordered.blogs,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects', orderBy: ['createdAt', 'desc']},
    {collection: 'blogs', orderBy: ['createdAt', 'desc']},
    {collection: 'notifications', limit: 15, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
