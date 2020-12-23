export const API_ENDPOINT = 'https://localhost:44327/api';

export const GIG_TABLE_HEADERS = [
  'Date',
  'Band',
  'Venue',
  'City',
  'State',
  'Pay',
];

export const BAND_TABLE_HEADERS = [
  'Band',
  '# of Gigs',
  'Total Pay',
  'Average Pay Per Gig',
];

export const BAND_GIGS_TABLE_HEADERS = [
  'Date',
  'Venue',
  'City',
  'State',
  'Pay',
];

export const YEAR_TABLE_HEADERS = [
  'Total Gigs',
  'Total Bands',
  'Total Cities',
  'Total States',
  'Total Pay',
  'Most Popular Band',
  'Highest Paying Gig',
];

export const DATA_TABLE_HEADERS = [
  'Total # of Gigs',
  'Total # of Paid Gigs',
  'Total # of Unpaid Gigs',
  'Total # of Bands',
  'Total # of Cities',
  'Total # of States',
  'Total Pay',
  'Average Pauy (paid gigs only)',
];

export const ACTION_TYPES = {
  CREATE_GIG: 'CREATE_GIG',
  UPDATE_GIG: 'UPDATE_GIG',
  DELETE_GIG: 'DELETE_GIG',
  FETCH_ALL_GIGS: 'FETCH_ALL_GIGS',
  CREATE_BAND: 'CREATE_GIG',
  UPDATE_BAND: 'UPDATE_GIG',
  DELETE_BAND: 'DELETE_GIG',
  FETCH_ALL_BANDS: 'FETCH_ALL_BANDS',
};

export const TAB_DATA = [
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
];
