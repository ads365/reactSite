import React from 'react';
import ProjectsSummaryHome from './projectsSummaryHome';
import { Link } from 'react-router-dom';

//parse project state to ProjectSummary, if there are projects for each project map data to ProjectSummary
const ProjectsListHome = ({projects}) => {
  return (
    <div className="project-list">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} style={{ textDecoration: 'none' }} key={project.id}>
            <ProjectsSummaryHome project={project} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectsListHome
