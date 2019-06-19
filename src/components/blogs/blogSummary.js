import React from 'react';
import moment from 'moment';


const BlogSummary = ({blog}) => {
  return (
    <div className='dash-card-container'>
      <div className="dash-card">
        <div>
          <div>
            <h5>{blog.title}</h5>
          </div>
          <div>
            <p>{blog.summary}</p>
          </div>
          <hr style={{borderTop:'dotted 1px'}} />
          <div>
            <div>{moment(blog.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSummary;
