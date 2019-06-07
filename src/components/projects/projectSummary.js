import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import moment from 'moment';


const ProjectsSummaryHome = ({project}) => {
  return (
    <div className="project-card">
      <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '70px'}}>{project.title}</CardTitle>
          <CardText>
              {project.summary}
          </CardText>
          <CardActions border>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </CardActions>
      </Card>
    </div>
  )
}

export default ProjectsSummaryHome;
