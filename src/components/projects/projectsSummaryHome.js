import React from 'react';
import moment from 'moment';


const ProjectsSummaryHome = ({project}) => {
  return (
    <div className='home-card-container'>
      <div className="home-card">
        <div>
          <div>
            <h5>{project.title}</h5>
          </div>
          <div>
            <p>{project.summary}</p>
          </div>
          <hr style={{borderTop:'dotted 1px'}} />
          <div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSummaryHome;
