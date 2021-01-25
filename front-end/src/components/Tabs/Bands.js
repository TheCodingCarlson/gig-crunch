import React from 'react';
import { Grid, Tab, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import BandTable from '../Tables/BandTable';

import { BAND_TABLE_HEADERS } from '../../constants';
import { groupGigsByBand } from '../../helpers';

const Bands = ({ gigs, bands }) => {
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <BandTable
              headers={BAND_TABLE_HEADERS}
              groupedGigs={groupGigsByBand(gigs)}
              bands={bands}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button content="Edit Bands" />
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

export default connect(mapStateToProps)(Bands);
