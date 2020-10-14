import React, { useEffect, useState } from 'react';
import agent from '../../api/agent';
import ProjectCard from './ProjectCard';
import './projectCard.css';
const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const projects = await agent.Projects.list();
      setProjects(projects);
      console.log(projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="ui cards main-cards ">
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Dashboard;
