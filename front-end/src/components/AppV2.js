import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AppV2 extends React.Component {
  componentDidMount() {
    this.props.fetchGigs();
    this.props.fetchBands();
  }

  renderList = () => {
    return this.props.gigs.map((gig) => {
      return <li key={gig.id}>{gig.venue}</li>;
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Gig Crunch</h1>
        {/* <ul>{this.renderList()}</ul> */}
      </div>
    );
  }
}

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
