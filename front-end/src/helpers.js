export const getGigYear = (gig) => gig.date.substr(gig.date.length - 4, 4)
export const getGigBand = (gig, bands) => bands.find(band => band.code === gig.bandCode);
export const filterGigs = (gigs, selectedYear) => gigs.filter(gig => getGigYear(gig) === selectedYear);

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
