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
export const getTotalOfProp = (array, property) => _.uniq(_.map(array, property));

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

export const getHigestPayingGig = (gigs) => {
  return gigs.reduce((prevGig, currentGig) => {
    let currentGigPay = currentGig.pay ? currentGig.pay : 0;
    return (prevGig.pay >= currentGigPay) ? prevGig : currentGig;
  }, {});
}

export const getMostPopularBand = (gigs = []) => {
  const bandGigs = {};
  let maxGigs = 0;
  let popularBand = {
    name: '',
    gigNumber: 0
  };

  gigs.forEach((gig) => {
    bandGigs[gig.bandName] = bandGigs[gig.bandName] ? bandGigs[gig.bandName] += 1 : 1;
  });

  Object.keys(bandGigs).forEach((band) => {
    if (bandGigs[band] > maxGigs) {
      maxGigs = bandGigs[band];
      popularBand.name = band;
      popularBand.gigNumber = maxGigs;
    }
  });

  return popularBand;
}
