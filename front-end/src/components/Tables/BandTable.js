import React from 'react';
import TableHeader from './TableHeader';
import Modal from '../Modal/Modal';

import { getBandName, getTotalPay, sortObjByKeys } from '../../helpers';
import { BAND_GIGS_TABLE_HEADERS } from '../../constants';

class BandTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBandGigs: [],
      selectedBandName: ''
    }

    this.modalElement = React.createRef();
  }

  handleClick(e) {
    let { groupedGigs, bands } = { ...this.props };
    let bandCode = e.target.dataset.bandcode;

    this.setState({
      selectedBandGigs: groupedGigs[bandCode],
      selectedBandName: bands[bandCode]
    });

    this.modalElement.current.openModal();
  }

  render() {
    const { headers, groupedGigs, bands } = { ...this.props };
    const sortedBands = sortObjByKeys(groupedGigs);
    return (
      <div>
        <table>
          <TableHeader headers={headers} />
          <tbody>
            { Object.keys(sortedBands).map((key) => {
              let totalPay = getTotalPay(sortedBands[key]);
              let bandName = getBandName(key, bands);
              return (
                <tr key={key}>
                  <td>{bandName}</td>
                  <td>{sortedBands[key].length}</td>
                  <td>{totalPay}</td>
                  <td>{Math.round(totalPay / sortedBands[key].length)}</td>
                  <td><button className="modal-button" data-bandcode={key} onClick={(e) => this.handleClick(e)}>See Gigs</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Modal heading={this.state.selectedBandName} ref={this.modalElement}>
          <table>
            <TableHeader headers={BAND_GIGS_TABLE_HEADERS} />
            <tbody>
                { this.state.selectedBandGigs.map((gig, index) => {
                  return (
                    <tr key={index}>
                      <td>{gig.date}</td>
                      <td>{gig.venue}</td>
                      <td>{gig.city}</td>
                      <td>{gig.state}</td>
                      <td>{gig.pay}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

export default BandTable;
