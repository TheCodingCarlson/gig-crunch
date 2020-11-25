import React from 'react';
import TableHeader from './TableHeader';

import {
  getTotalOfProp,
  getTotalPay,
  getHigestPayingGig,
  getMostPopularBand,
} from '../../helpers';

const YearTable = ({ headers, gigs }) => {
  const highestPayingGig = getHigestPayingGig(gigs);
  const mostPopularBand = getMostPopularBand(gigs);

  return (
    <table>
      <TableHeader headers={headers} />
      <tbody>
        <tr>
          <td>{gigs.length}</td>
          <td>{getTotalOfProp(gigs, 'bandCode').length}</td>
          <td>{getTotalOfProp(gigs, 'city').length}</td>
          <td>{getTotalOfProp(gigs, 'state').length}</td>
          <td>{getTotalPay(gigs)}</td>
          <td>
            <span>{mostPopularBand.name}</span>
            <span># of Gigs: {mostPopularBand.gigNumber}</span>
          </td>
          <td>
            <span>{highestPayingGig.date}</span>
            <span>{highestPayingGig.venue}</span>
            <span>
              {highestPayingGig.city}, {highestPayingGig.state}
            </span>
            <span>{highestPayingGig.bandName}</span>
            <span>{highestPayingGig.pay}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default YearTable;
