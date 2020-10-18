import React, { useContext } from 'react';
import { ProjectContext } from '../../../store/ProjectContext';
import ProjectCard from '../ProjectCard';
const UserDashboard = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  return (
    <div className="ui cards main-cards ">
      <ProjectCard projects={projects} />
    </div>
  );
};

export default UserDashboard;
