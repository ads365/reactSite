import React from 'react';
import {Grid, Cell} from 'react-mdl';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';


const BlogDetails = (props) => {
  const { blog } = props;
  if (blog) {
    return (
      <Grid>
        <Cell col={2}></Cell>
        <Cell col={8}>
          <div className="blog-page">
            <div className="blog-title">
              <h3>{blog.title}</h3>
            </div>
            <div className="blog-summary">
              {blog.summary}
            </div>
            <div className="blog-content" dangerouslySetInnerHTML={{__html: (blog.content || '')}}>
            </div>
            <div className="post-date">
              {moment(blog.createdAt.toDate()).calendar()}.
            </div>
          </div>
        </Cell>
        <Cell col={2}></Cell>
      </Grid>
    )
  }
  else {
    return (
      <h4>Looking for blog Articles...</h4>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  //if we have project return project of id = id, if not return null
  const blog = blogs ? blogs[id] : null
  return {
    blog: blog
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'blogs'}
  ])
)(BlogDetails)
