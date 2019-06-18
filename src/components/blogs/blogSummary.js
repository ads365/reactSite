import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import moment from 'moment';


const BlogSummary = ({blog}) => {
  return (
    <div className="dash-card">
      <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
          <CardTitle style={{color: '#303A45', height: '70px'}}>{blog.title}</CardTitle>
          <CardText style={{color:'#455363'}}>
              {blog.summary}
          </CardText>
          <CardActions border>
              <div style={{color:'#303A45'}}>{moment(blog.createdAt.toDate()).calendar()}</div>
          </CardActions>
      </Card>
    </div>
  )
}

export default BlogSummary;
