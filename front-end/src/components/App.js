import React from 'react';
import axios from 'axios';

import Dropdown from './Dropdown';
import Tab from './Tabs/Tab';
import GigTable from './Tables/GigTable';
import BandTable from './Tables/BandTable';

import { API_ENDPOINT, GIG_TABLE_HEADERS, BAND_TABLE_HEADERS } from '../constants';
import { findUniqueYears, filterGigs, groupGigsByBand } from '../helpers';
import TabPanel from './Tabs/TabPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGigs: [],
      filteredGigs: [],
      bands: [],
      years: [],
      selectedYear: '',
      tabs: [
        {
          id: 'gig-breakdown',
          text: 'Gig Breakdown',
          isSelected: true
        },
        {
          id: 'band-breakdown',
          text: 'Band Breakdown',
          isSelected: false
        },
        {
          id: 'year-breakdown',
          text: 'Year Breakdown',
          isSelected: false
        },
        {
          id: 'data-breakdown',
          text: 'Data Breakdown',
          isSelected: false
        }
      ]
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
    this.setState({
      selectedYear: year,
      filteredGigs: filterGigs(this.state.allGigs, year) 
    });
  }

  handleTabClick(selectdTabId) {
    const tabsCopy = [ ...this.state.tabs ];

    tabsCopy.map(tab => tab.id === selectdTabId ? tab.isSelected = true : tab.isSelected = false);

    this.setState({
      tabs:  [ ...tabsCopy ]
    });
  }

  handleTableRender(tabId) {
    switch (tabId) {
      case this.state.tabs[0].id:
        return (
          <GigTable
            headers={GIG_TABLE_HEADERS}
            gigs={this.state.filteredGigs}
            bands={this.state.bands} />
          );
      case this.state.tabs[1].id:
        return (
          <BandTable
            headers={BAND_TABLE_HEADERS}
            groupedGigs={groupGigsByBand(this.state.filteredGigs)}
            bands={this.state.bands} />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Gig Crunch</h1>

        <Dropdown
          options={this.state.years}
          label={'Select Year'}
          onChange={(e) => this.handleYearChange(e)} />

        <div className="tabs">
          <div role="tablist" aria-label="data-sets">
            { this.state.tabs.map(tab => {
              let { id, text, isSelected } = { ...tab };
              return (
                <Tab
                  key={id}
                  text={text}
                  id={id}
                  isSelected={isSelected}
                  onClick={(e) => this.handleTabClick(e)} />
              )
            })}
          </div>
          { this.state.tabs.map((tab) => {
            let { id, isSelected } = { ...tab };
            return (
              <TabPanel key={id} id={id} isActive={isSelected}>
                {this.handleTableRender(id)}
              </TabPanel>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
