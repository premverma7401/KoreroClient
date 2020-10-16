import React, { useEffect, useState } from 'react';
import agent from '../../../api/agent';
import LoadingComponent from '../../../common/LoadingComponent';
import ProjectCard from '../ProjectCard';
const UserDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchProjects = async () => {
    setloading(true);
    try {
      const projects = await agent.Projects.list();
      setProjects(projects);
      console.log(projects);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading)
    return <LoadingComponent content="Loading your projects" inverted />;
  return (
    <div className="ui cards main-cards ">
      <ProjectCard projects={projects} />
    </div>
  );
};

export default UserDashboard;
