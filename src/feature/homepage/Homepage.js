import React from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Portfolio
        </Header>
        <Header as="h2" inverted content="Prem Sager's Portfolio" />
        <Button size="huge" inverted as={Link} to="/dashboard">
          Enter
        </Button>
      </Container>
    </Segment>
  );
};

export default Homepage;
