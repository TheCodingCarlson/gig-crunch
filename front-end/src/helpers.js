import _ from 'lodash';

export const sortObjByKeys = (obj) => {
  const ordered = {};

  Object.keys(obj).sort().forEach((key) => {
    ordered[key] = obj[key];
  });

  return ordered;
}

export const getGigYear = (gig) => gig.date.substr(gig.date.length - 4, 4);
export const getBandName = (bandCode, bands) => bands.find(band => band.code === bandCode).name || '';
export const getTotalPay = (gigs) => gigs.reduce((total, gig) => total += gig.pay, 0);
export const filterGigs = (gigs, selectedYear) => gigs.filter(gig => getGigYear(gig) === selectedYear);
export const groupGigsByBand = (gigs) => _.groupBy(gigs, 'bandCode');

export const findUniqueYears = (gigs) => {
  var years = [];

  gigs.forEach(gig => {
    let year = getGigYear(gig);

    if (years.indexOf(year) === -1) {
      years.push(year);
    }
  });

  return years.sort((a, b) => b - a);
}

