import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import BlogListHome from '../blogs/blogListHome';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class BlogsHome extends Component {
  render() {
    console.log(this.props);
    const {blogs} = this.props;

    //parse project state to ProjectList
    return(
      <div className="blog-container" style={{color: '#303A45'}}>
        <Grid>
          <Cell col={2}></Cell>
          <Cell col={8}>
            <h4>Blog Posts</h4>
            <BlogListHome blogs={blogs}/>
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
    blogs: state.firestore.ordered.blogs,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'blogs', orderBy: ['createdAt', 'desc']},
  ])
)(BlogsHome)
