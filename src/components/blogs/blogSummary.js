import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import moment from 'moment';


const BlogSummary = ({blog}) => {
  return (
    <div className="blog-card">
      <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '70px'}}>{blog.title}</CardTitle>
          <CardText>
              {blog.summary}
          </CardText>
          <CardActions border>
              <div>{moment(blog.createdAt.toDate()).calendar()}</div>
          </CardActions>
      </Card>
    </div>
  )
}

export default BlogSummary;
