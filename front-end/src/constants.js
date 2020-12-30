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
  CREATE_BAND: 'CREATE_BAND',
  UPDATE_BAND: 'UPDATE_BAND',
  DELETE_BAND: 'DELETE_BAND',
  FETCH_ALL_BANDS: 'FETCH_ALL_BANDS',
};

export const TABS = ['Gig Breakdown', 'Band Breakdown'];

export const STATES = [
  {
    text: 'ALABAMA',
    key: 'AL',
    value: 'AL',
  },
  {
    text: 'ALASKA',
    key: 'AK',
    value: 'AK',
  },
  {
    text: 'ARIZONA',
    key: 'AZ',
    value: 'AZ',
  },
  {
    text: 'ARKANSAS',
    key: 'AR',
    value: 'AR',
  },
  {
    text: 'CALIFORNIA',
    key: 'CA',
    value: 'CA',
  },
  {
    text: 'COLORADO',
    key: 'CO',
    value: 'CO',
  },
  {
    text: 'CONNECTICUT',
    key: 'CT',
    value: 'CT',
  },
  {
    text: 'DELAWARE',
    key: 'DE',
    value: 'DE',
  },
  {
    text: 'DISTRICT OF COLUMBIA',
    key: 'DC',
    value: 'DC',
  },
  {
    text: 'FLORIDA',
    key: 'FL',
    value: 'FL',
  },
  {
    text: 'GEORGIA',
    key: 'GA',
    value: 'GA',
  },
  {
    text: 'HAWAII',
    key: 'HI',
    value: 'HI',
  },
  {
    text: 'IDAHO',
    key: 'ID',
    value: 'ID',
  },
  {
    text: 'ILLINOIS',
    key: 'IL',
    value: 'IL',
  },
  {
    text: 'INDIANA',
    key: 'IN',
    value: '',
  },
  {
    text: 'IOWA',
    key: 'IA',
    value: 'IA',
  },
  {
    text: 'KANSAS',
    key: 'KS',
    value: 'KS',
  },
  {
    text: 'KENTUCKY',
    key: 'KY',
    value: 'KY',
  },
  {
    text: 'LOUISIANA',
    key: 'LA',
    value: 'LA',
  },
  {
    text: 'MAINE',
    key: 'ME',
    value: 'ME',
  },
  {
    text: 'MARYLAND',
    key: 'MD',
    value: 'MD',
  },
  {
    text: 'MASSACHUSETTS',
    key: 'MA',
    value: 'MA',
  },
  {
    text: 'MICHIGAN',
    key: 'MI',
    value: 'MI',
  },
  {
    text: 'MINNESOTA',
    key: 'MN',
    value: 'MN',
  },
  {
    text: 'MISSISSIPPI',
    key: 'MS',
    value: 'MS',
  },
  {
    text: 'MISSOURI',
    key: 'MO',
    value: 'MO',
  },
  {
    text: 'MONTANA',
    key: 'MT',
    value: 'MT',
  },
  {
    text: 'NEBRASKA',
    key: 'NE',
    value: 'NE',
  },
  {
    text: 'NEVADA',
    key: 'NV',
    value: 'NV',
  },
  {
    text: 'NEW HAMPSHIRE',
    key: 'NH',
    value: 'NH',
  },
  {
    text: 'NEW JERSEY',
    key: 'NJ',
    value: 'NJ',
  },
  {
    text: 'NEW MEXICO',
    key: 'NM',
    value: 'NM',
  },
  {
    text: 'NEW YORK',
    key: 'NY',
    value: 'NY',
  },
  {
    text: 'NORTH CAROLINA',
    key: 'NC',
    value: 'NC',
  },
  {
    text: 'NORTH DAKOTA',
    key: 'ND',
    value: 'ND',
  },
  {
    text: 'OHIO',
    key: 'OH',
    value: 'OH',
  },
  {
    text: 'OKLAHOMA',
    key: 'OK',
    value: 'OK',
  },
  {
    text: 'OREGON',
    key: 'OR',
    value: 'OR',
  },
  {
    text: 'PENNSYLVANIA',
    key: 'PA',
    value: 'PA',
  },
  {
    text: 'RHODE ISLAND',
    key: 'RI',
    value: 'RI',
  },

  {
    text: 'SOUTH CAROLINA',
    key: 'SC',
    value: 'SC',
  },
  {
    text: 'SOUTH DAKOTA',
    key: 'SD',
    value: 'SD',
  },
  {
    text: 'TENNESSEE',
    key: 'TN',
    value: 'TN',
  },
  {
    text: 'TEXAS',
    key: 'TX',
    value: 'TX',
  },
  {
    text: 'UTAH',
    key: 'UT',
    value: 'UT',
  },
  {
    text: 'VERMONT',
    key: 'VT',
    value: 'VT',
  },
  {
    text: 'VIRGINIA',
    key: 'VA',
    value: 'VA',
  },
  {
    text: 'VIRGIN ISLANDS',
    key: 'VI',
    value: 'VI',
  },
  {
    text: 'WASHINGTON',
    key: 'WA',
    value: 'WA',
  },
  {
    text: 'WEST VIRGINIA',
    key: 'WV',
    value: 'WV',
  },
  {
    text: 'WISCONSIN',
    key: 'WI',
    value: 'WI',
  },
  {
    text: 'WYOMING',
    key: 'WY',
    value: 'WY',
  },
];
