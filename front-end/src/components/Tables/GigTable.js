import React from 'react';
import TableHeader from './TableHeader';

const GigTable = ({ gigs, headers }) => {
  return (
    <table>
      <TableHeader headers={headers} />
      <tbody>
        { gigs.map((gig, index) => {
          return (
            <tr key={index}>
              <td>{gig.date}</td>
              <td>{gig.bandName}</td>
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
