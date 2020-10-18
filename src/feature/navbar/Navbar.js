import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <img
            src="/assets/prem.png"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
          Prem's Portfolio
        </Menu.Item>
        <Menu.Item name="Admin View" as={NavLink} to="/admin" />
        <Menu.Item>
          <Button positive content="View Projects" as={NavLink} to="/user" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
