import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment } from 'semantic-ui-react';
import agent from '../../api/agent';
import LoadingComponent from '../../common/LoadingComponent';

const ProjectDetails = ({ match }) => {
  const [projectInfo, setProjectInfo] = useState({
    description: '',
    liveUrl: '',
    gitUrl: '',
    techUsed: '',
    projectName: '',
  });
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
    const abort = new AbortController();

    fetchProjectInfo(match.params.id, { signal: abort.signal });
    return () => abort.abort();
  }, [match.params.id]);

  if (loading)
    return <LoadingComponent content="Loading Project info" inverted />;

  return (
    <Container>
      <Header>{projectInfo.projectName}</Header>
      <Segment>{projectInfo.description}</Segment>
      <Segment>{projectInfo.techUsed}</Segment>

      <Segment raised>
        <Button.Group>
          <Button content="Live View" primary size="big" />
          <Button content="Github " positive size="big" />
        </Button.Group>
      </Segment>
    </Container>
  );
};

export default ProjectDetails;
