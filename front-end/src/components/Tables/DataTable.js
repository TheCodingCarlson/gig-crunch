import React from 'react';
import TableHeader from './TableHeader';
import { DATA_TABLE_HEADERS } from '../../constants';

const DataTable = ({ gigs, bands }) => {
  const paidGigs = gigs.filter((gig) => gig.pay).length;
  const unpaidGigs = gigs.filter((gig) => !gig.pay).length;
  const totalCities = [...new Set(gigs.map((gig) => gig.city))];
  const totalStates = [...new Set(gigs.map((gig) => gig.state))];
  const totalPay = gigs.reduce((total, gig) => {
    let pay = gig.pay ? gig.pay : 0;
    return total + pay;
  }, 0);

  const averagePayPerGig = Math.round(totalPay / paidGigs).toString();

  return (
    <table>
      <TableHeader headers={DATA_TABLE_HEADERS} />
      <tbody>
        <tr>
          <td>{gigs.length}</td>
          <td>{paidGigs}</td>
          <td>{unpaidGigs}</td>
          <td>{bands.length}</td>
          <td>{totalCities.length}</td>
          <td>{totalStates.length}</td>
          <td>{totalPay}</td>
          <td>{averagePayPerGig}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
