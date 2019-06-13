import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import moment from 'moment';


const ProjectsSummaryHome = ({project}) => {
  return (
    <div className="blog-card">
      <Card shadow={0} style={{width: '1000px', height: '100px', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '60px'}}>{project.title}</CardTitle>
          <CardText style={{color:'#595959', textAlign:'center', fontSize:'18px'}}>
              {project.summary}
          </CardText>
          <CardActions>
              <div style={{color:'#595959', textAlign:'left', paddingLeft:'10px'}}>{moment(project.createdAt.toDate()).calendar()}</div>
          </CardActions>
      </Card>
    </div>
  )
}

export default ProjectsSummaryHome;
