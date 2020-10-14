import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import agent from '../../api/agent';
import ProjectCard from './ProjectCard';

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
    <div className="ui cards ">
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Dashboard;
