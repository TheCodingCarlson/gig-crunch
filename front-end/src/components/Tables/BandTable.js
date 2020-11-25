import React, { useRef, useState } from 'react';
import TableHeader from './TableHeader';
import Modal from '../Modal/Modal';

import { getBandName, getTotalPay, sortObjByKeys } from '../../helpers';
import { BAND_GIGS_TABLE_HEADERS } from '../../constants';

const BandTable = ({ headers, groupedGigs, bands }) => {
  const [selectedBandGigs, setSelectedBandGigs] = useState([]);
  const [selectedBandName, setSelectedBandName] = useState('');
  const modalRef = useRef();
  const sortedBands = sortObjByKeys(groupedGigs);

  const onModalButtonClick = (e) => {
    const bandCode = e.target.dataset.bandcode;

    setSelectedBandGigs(groupedGigs[bandCode]);
    setSelectedBandName(bands[bandCode]);
    modalRef.current.openModal();
  };

  return (
    <div>
      <table>
        <TableHeader headers={headers} />
        <tbody>
          {Object.keys(sortedBands).map((key) => {
            let totalPay = getTotalPay(sortedBands[key]);
            let bandName = getBandName(key, bands);
            return (
              <tr key={key}>
                <td>{bandName}</td>
                <td>{sortedBands[key].length}</td>
                <td>{totalPay}</td>
                <td>{Math.round(totalPay / sortedBands[key].length)}</td>
                <td>
                  <button
                    className="modal-button"
                    data-bandcode={key}
                    onClick={(e) => onModalButtonClick(e)}
                  >
                    See Gigs
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal heading={selectedBandName} ref={modalRef}>
        <table>
          <TableHeader headers={BAND_GIGS_TABLE_HEADERS} />
          <tbody>
            {selectedBandGigs.map((gig, index) => {
              return (
                <tr key={index}>
                  <td>{gig.date}</td>
                  <td>{gig.venue}</td>
                  <td>{gig.city}</td>
                  <td>{gig.state}</td>
                  <td>{gig.pay}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default BandTable;
