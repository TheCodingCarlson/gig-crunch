import React from 'react';
import TableHeader from './TableHeader';
import { getBandName} from '../../helpers';

const GigTable = ({ gigs, bands, headers }) => {
  return (
    <table>
      <TableHeader headers={headers} />
      <tbody>
        { gigs.map((gig, index) => {
          let bandName = getBandName(gig.bandCode, bands);
          return (
            <tr key={index}>
              <td>{gig.date}</td>
              <td>{bandName}</td>
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
