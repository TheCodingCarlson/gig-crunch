import React, { useEffect } from 'react';
import { Grid, Tab, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Gigs from './Tabs/Gigs';
import Bands from './Tabs/Bands';

const panes = [
  {
    menuItem: 'Gigs',
    render: () => <Gigs />,
  },
  {
    menuItem: 'Bands',
    render: () => <Bands />,
  },
];

const getUserInfo = async () => {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

const AppV2 = ({ fetchGigs, fetchBands }) => {
  useEffect(() => {
    fetchGigs();
    fetchBands();
  }, [fetchGigs, fetchBands]);

  console.log(getUserInfo());

  return (
    <Grid container padded>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" content="Gig Crunch" />
        </Grid.Column>
      </Grid.Row>
      <Tab panes={panes} />
    </Grid>
  );
};

const mapActionToProps = {
  fetchGigs: actions.fetchGigs,
  fetchBands: actions.fetchBands,
};

export default connect(null, mapActionToProps)(AppV2);
