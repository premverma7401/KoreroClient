import React, { useEffect } from 'react';
import { useState } from 'react';
import agent from '../../api/agent';
import LoadingComponent from '../../common/LoadingComponent';

const ProjectDetails = ({ match }) => {
  const [projectInfo, setProjectInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProjectInfo = async () => {
    setLoading(true);
    try {
      const projectInfo = await agent.ProjectInfo.details(match.params.id);
      setProjectInfo(projectInfo);
      console.log(projectInfo);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjectInfo(match.params.id);
  }, [match.params.id]);

  if (loading)
    return <LoadingComponent content="Loading Project info" inverted />;

  return <div>{projectInfo.projectName}</div>;
};

export default ProjectDetails;
