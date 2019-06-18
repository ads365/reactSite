import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import moment from 'moment';


const BlogSummaryHome = ({blog}) => {
  return (
    <div className="blog-card">
      <Card shadow={0} style={{width: '1000px', height: '100px', margin: 'auto'}}>
          <CardTitle style={{color: '#303A45', height: '60px'}}>{blog.title}</CardTitle>
          <CardText style={{color:'#455363', textAlign:'center', fontSize:'18px'}}>
              {blog.summary}
          </CardText>
          <CardActions border>
              <div style={{color:'#455363', textAlign:'left', paddingLeft:'10px'}}>{moment(blog.createdAt.toDate()).calendar()}</div>
          </CardActions>
      </Card>
    </div>
  )
}

export default BlogSummaryHome;
