import React from 'react';
import BlogSummary from './blogSummary';
import { Link } from 'react-router-dom';

//parse project state to ProjectSummary, if there are projects for each project map data to ProjectSummary
const BlogList = ({blogs}) => {
  return (
    <div className="blog-list">
      { blogs && blogs.map(blog => {
        return (
          <Link to={'/blog/' + blog.id} style={{ textDecoration: 'none' }} key={blog.id}>
            <BlogSummary blog={blog} />
          </Link>
        )
      })}
    </div>
  )
}

export default BlogList
