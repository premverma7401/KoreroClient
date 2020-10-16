import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import CreateProject from './CreateProject';

const AdminDashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Segment>
              <CreateProject />
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment>
              <CreateProject />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
