import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const GigForm = ({ gigs, bands, fetchGigs, fetchBands }) => {
  useEffect(() => {
    fetchGigs();
    fetchBands();
  }, [fetchGigs, fetchBands]);

  return <div>Gig Form</div>;
};

const mapStateToProps = (state) => ({
  gigs: state.gigs,
  bands: state.bands,
});

const mapActionToProps = {
  fetchGigs: actions.fetchGigs,
  fetchBands: actions.fetchBands,
};

export default connect(mapStateToProps, mapActionToProps)(GigForm);
