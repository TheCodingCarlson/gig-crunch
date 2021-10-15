import React, { useState } from 'react';
import { Grid, Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';

import GigTable from '../Tables/GigTable';
import GigForm from '../Forms/GigForm';

import { GIG_TABLE_HEADERS } from '../../constants';

const Gigs = ({ gigs, bands }) => {
  const [currentGigId, setCurrentGigId] = useState(0);

  return (
    <Tab.Pane>
      <Grid>
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
    </Tab.Pane>
  );
};

const mapStateToProps = (state) => {
  return {
    gigs: state.gigs,
    bands: state.bands,
  };
};

export default connect(mapStateToProps)(Gigs);
