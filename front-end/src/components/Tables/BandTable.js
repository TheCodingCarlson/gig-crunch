import React from 'react';
import TableHeader from './TableHeader';

import { getBandName, getTotalPay, sortObjByKeys } from '../../helpers';

class BandTable extends React.Component {
  render() {
    const { headers, groupedGigs, bands } = { ...this.props };
    const sortedBands = sortObjByKeys(groupedGigs);
    return (
      <table>
        <TableHeader headers={headers} />
        <tbody>
          { Object.keys(sortedBands).map((key, index) => {
            let bandName = getBandName(key, bands) || '';
            let totalPay = getTotalPay(sortedBands[key]);
            return (
              <tr key={key}>
                <td>{bandName}</td>
                <td>{sortedBands[key].length}</td>
                <td>{totalPay}</td>
                <td>{Math.round(totalPay / sortedBands[key].length)}</td>
                <td><button id={`m-button--${index}`} className="modal-button">See Gigs</button></td>

              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default BandTable;
