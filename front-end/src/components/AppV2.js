import React, { useEffect, useState } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import GigTable from './Tables/GigTable';
import GigForm from './Forms/GigForm';

import { GIG_TABLE_HEADERS } from '../constants';

const AppV2 = ({ fetchGigs, fetchBands, gigs, bands }) => {
  const [currentGigId, setCurrentGigId] = useState(0);

  useEffect(() => {
    fetchGigs();
    fetchBands();
  }, [fetchGigs, fetchBands]);

  return (
    <Grid container padded>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Gig Crunch</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <GigTable
            headers={GIG_TABLE_HEADERS}
            gigs={gigs}
            bands={bands}
            setCurrentGigId={setCurrentGigId}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <GigForm
            gigs={gigs}
            bands={bands}
            setCurrentGigId={setCurrentGigId}
            currentGigId={currentGigId}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    gigs: state.gigs,
    bands: state.bands,
  };
};

const mapActionToProps = {
  fetchGigs: actions.fetchGigs,
  fetchBands: actions.fetchBands,
};

export default connect(mapStateToProps, mapActionToProps)(AppV2);
