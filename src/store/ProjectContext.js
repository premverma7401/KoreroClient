import React, { useState, createContext } from 'react';
import { useEffect } from 'react';
import agent from '../api/agent';
import LoadingComponent from '../common/LoadingComponent';
export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadProjects = async () => {
    try {
      setLoading(true);
      const projects = await agent.Projects.list();
      setProjects(projects);
      setLoading(false);
      console.log('from Context', projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const abort = new AbortController();
    loadProjects({ signal: abort.signal });
    return () => abort.abort();
  }, []);

  if (loading)
    return <LoadingComponent content="Loading your projects" inverted />;
  return (
    <ProjectContext.Provider
      value={[projects, setProjects, loadProjects, loading, setLoading]}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
