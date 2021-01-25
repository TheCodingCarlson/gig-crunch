import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal } from 'semantic-ui-react';
import * as actions from '../../actions';

import { getBandName, getTotalPay, sortObjByKeys } from '../../helpers';
import { BAND_GIGS_TABLE_HEADERS } from '../../constants';

const BandTable = ({ headers, groupedGigs, bands, openModal, closeModal }) => {
  const [selectedBandGigs, setSelectedBandGigs] = useState([]);
  const [selectedBandName, setSelectedBandName] = useState('');

  const sortedBands = sortObjByKeys(groupedGigs);

  const handleOpenModal = (bandId) => {
    const bandName = getBandName(parseInt(bandId), bands);
    const bandGigs = groupedGigs[bandId];

    setSelectedBandName(bandName);
    setSelectedBandGigs(bandGigs);

    openModal();
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {headers.map((header, index) => {
            return <Table.HeaderCell key={index}>{header}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.keys(sortedBands).map((id) => {
          let totalPay = getTotalPay(sortedBands[id]);
          let bandName = getBandName(parseInt(id), bands);

          return (
            <Table.Row key={id}>
              <Table.Cell>{bandName}</Table.Cell>
              <Table.Cell>{sortedBands[id].length}</Table.Cell>
              <Table.Cell>{totalPay}</Table.Cell>
              <Table.Cell>
                {Math.round(totalPay / sortedBands[id].length)}
              </Table.Cell>
              <Table.Cell>
                <Modal
                  closeIcon
                  onOpen={() => handleOpenModal(id)}
                  onClose={() => closeModal()}
                  trigger={<Button content="See Gigs" />}
                >
                  <Modal.Header content={selectedBandName} />
                  <Modal.Content>
                    <Table>
                      <Table.Header>
                        <Table.Row>
                          {BAND_GIGS_TABLE_HEADERS.map((header, index) => {
                            return (
                              <Table.HeaderCell key={index}>
                                {header}
                              </Table.HeaderCell>
                            );
                          })}
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {selectedBandGigs.map((gig) => {
                          return (
                            <Table.Row key={gig.id}>
                              <Table.Cell>{`${gig.month}-${gig.day}-${gig.year}`}</Table.Cell>
                              <Table.Cell>{gig.venue}</Table.Cell>
                              <Table.Cell>{gig.city}</Table.Cell>
                              <Table.Cell>{gig.state}</Table.Cell>
                              <Table.Cell>{gig.pay}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                      </Table.Body>
                    </Table>
                  </Modal.Content>
                </Modal>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
  };
};

const mapActionToProps = {
  openModal: actions.openModal,
  closeModal: actions.closeModal,
};

export default connect(mapStateToProps, mapActionToProps)(BandTable);
