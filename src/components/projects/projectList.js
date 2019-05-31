import React from 'react';
import ProjectSummary from './projectSummary';
import { Link } from 'react-router-dom';

//parse project state to ProjectSummary, if there are projects for each project map data to ProjectSummary
const ProjectList = ({projects}) => {
  return (
    <div className="project-list">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} style={{ textDecoration: 'none' }} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
