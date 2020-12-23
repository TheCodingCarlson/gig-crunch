import React from 'react';
import axios from 'axios';

import { store } from '../actions/store';
import { Provider } from 'react-redux';

import Dropdown from './Dropdown';
import Tab from './Tabs/Tab';
import TabPanel from './Tabs/TabPanel';
import GigTable from './Tables/GigTable';
import BandTable from './Tables/BandTable';
import YearTable from './Tables/YearTable';
import DataTable from './Tables/DataTable';

import GigForm from './Forms/GigForm';

import {
  API_ENDPOINT,
  GIG_TABLE_HEADERS,
  BAND_TABLE_HEADERS,
  YEAR_TABLE_HEADERS,
} from '../constants';

import {
  findUniqueYears,
  filterGigs,
  groupGigsByBand,
  getBandName,
} from '../helpers';

class App extends React.Component {
  state = {
    allGigs: [],
    filteredGigs: [],
    bands: [],
    years: [],
    selectedYear: '',
    tabs: [
      {
        id: 'gig-breakdown',
        text: 'Gig Breakdown',
        isSelected: true,
      },
      {
        id: 'band-breakdown',
        text: 'Band Breakdown',
        isSelected: false,
      },
      {
        id: 'year-breakdown',
        text: 'Year Breakdown',
        isSelected: false,
      },
      {
        id: 'data-breakdown',
        text: 'Data Breakdown',
        isSelected: false,
      },
    ],
  };

  async componentDidMount() {
    const [gigsResponse, bandsResponse] = await Promise.all([
      axios.get(`${API_ENDPOINT}/gigs/`),
      axios.get(`${API_ENDPOINT}/bands/`),
    ]);

    const gigsCopy = [...gigsResponse.data];

    gigsCopy.forEach((gig) => {
      gig.bandName = getBandName(gig.bandCode, bandsResponse.data);
    });

    this.setState({
      allGigs: gigsCopy,
      years: findUniqueYears(gigsResponse.data),
      bands: bandsResponse.data,
    });

    this.setState({ selectedYear: this.state.years[0] });
    this.setState({
      filteredGigs: filterGigs(this.state.allGigs, this.state.selectedYear),
    });
  }

  handleYearChange(year) {
    this.setState({
      selectedYear: year,
      filteredGigs: filterGigs(this.state.allGigs, year),
    });
  }

  handleTabClick(selectdTabId) {
    const tabsCopy = [...this.state.tabs];

    tabsCopy.map((tab) =>
      tab.id === selectdTabId
        ? (tab.isSelected = true)
        : (tab.isSelected = false)
    );

    this.setState({
      tabs: [...tabsCopy],
    });
  }

  handleTableRender(tabId) {
    switch (tabId) {
      case this.state.tabs[0].id:
        return (
          <GigTable
            headers={GIG_TABLE_HEADERS}
            gigs={this.state.filteredGigs}
          />
        );
      case this.state.tabs[1].id:
        return (
          <BandTable
            headers={BAND_TABLE_HEADERS}
            groupedGigs={groupGigsByBand(this.state.filteredGigs)}
            bands={this.state.bands}
          />
        );
      case this.state.tabs[2].id:
        return (
          <YearTable
            headers={YEAR_TABLE_HEADERS}
            gigs={this.state.filteredGigs}
          />
        );
      case this.state.tabs[3].id:
        return <DataTable gigs={this.state.allGigs} bands={this.state.bands} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <h1>Gig Crunch</h1>

          <Dropdown
            options={this.state.years}
            label={'Select Year'}
            onChange={(e) => this.handleYearChange(e)}
          />

          <div className="tabs">
            <div role="tablist" aria-label="data-sets">
              {this.state.tabs.map((tab) => {
                let { id, text, isSelected } = { ...tab };
                return (
                  <Tab
                    key={id}
                    text={text}
                    id={id}
                    isSelected={isSelected}
                    handleClick={(e) => this.handleTabClick(e)}
                  />
                );
              })}
            </div>
            {this.state.tabs.map((tab) => {
              let { id, isSelected } = { ...tab };
              return (
                <TabPanel key={id} id={id} isActive={isSelected}>
                  {this.handleTableRender(id)}
                </TabPanel>
              );
            })}
          </div>

          <GigForm />
        </div>
      </Provider>
    );
  }
}

export default App;
