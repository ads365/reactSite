import React from 'react';
import BlogSummaryHome from './blogSummaryHome';
import { Link } from 'react-router-dom';

//parse project state to ProjectSummary, if there are projects for each project map data to ProjectSummary
const BlogListHome = ({blogs}) => {
  return (
    <div className="blog-list">
      { blogs && blogs.map(blog => {
        return (
          <Link to={'/blog/' + blog.id} style={{ textDecoration: 'none' }} key={blog.id}>
            <BlogSummaryHome blog={blog} />
          </Link>
        )
      })}
    </div>
  )
}

export default BlogListHome
