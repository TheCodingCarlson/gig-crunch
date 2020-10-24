import React from 'react';
import axios from 'axios';

import Dropdown from './Dropdown';
import GigTable from './Tables/GigTable';

import { API_ENDPOINT, GIG_TABLE_HEADERS } from '../constants';
import { findUniqueYears, filterGigs } from '../helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGigs: [],
      filteredGigs: [],
      bands: [],
      years: [],
      selectedYear: ''
    };
  }

  componentDidMount() {
    axios.get(`${API_ENDPOINT}/gigs/`)
      .then(res => {
        this.setState({
          allGigs: res.data,
          years: findUniqueYears(res.data)
        });

        this.setState({ selectedYear: this.state.years[0] });
        this.setState({ filteredGigs: filterGigs(this.state.allGigs, this.state.selectedYear) });
      })
      .catch(err => console.log(err));

    axios.get(`${API_ENDPOINT}/bands/`)
      .then(res => this.setState({ bands: res.data }))
      .catch(err => console.log(err));
  }

  handleYearChange(year) {
    console.log(year);
    this.setState({
      selectedYear: year,
      filteredGigs: filterGigs(this.state.allGigs, year) 
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Gig Crunch</h1>

        <Dropdown
          options={this.state.years}
          label={'Select Year'}
          onChange={(e) => this.handleYearChange(e)} />

        <GigTable
          headers={GIG_TABLE_HEADERS}
          gigs={this.state.filteredGigs} bands={this.state.bands} />
      </div>
    )
  }
}

export default App;
