import React from 'react';
import TableHeader from './TableHeader';
import { getGigBand } from '../../helpers';

const GigTable = ({ gigs, bands, headers }) => {
  return (
    <table>
      <TableHeader headers={headers} />
      <tbody>
        { gigs.map((gig, index) => {
          let band = getGigBand(gig, bands) || '';
          return (
            <tr key={index}>
              <td>{gig.date}</td>
              <td>{band.name}</td>
              <td>{gig.venue}</td>
              <td>{gig.city}</td>
              <td>{gig.state}</td>
              <td>{gig.pay}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default GigTable;
