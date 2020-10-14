import React from 'react';

const ProjectCard = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div className="ui card" key={project.id}>
          <div className="content">
            <img
              src="/images/avatar/large/steve.jpg"
              className="ui mini right floated image"
              alt="project"
            />
            <div className="header">{project.projectName}</div>
            <div className="meta">Friends of Elliot</div>
            <div className="description">
              Steve wants to add you to the group <strong>best friends</strong>
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <button className="ui green basic button">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
