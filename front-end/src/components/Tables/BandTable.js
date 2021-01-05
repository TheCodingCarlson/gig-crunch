import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal } from 'semantic-ui-react';
import * as actions from '../../actions';

import { getBandName, getTotalPay, sortObjByKeys } from '../../helpers';
import { BAND_GIGS_TABLE_HEADERS } from '../../constants';

const BandTable = ({
  headers,
  groupedGigs,
  bands,
  openModal,
  closeModal,
  isModalOpen,
}) => {
  const [selectedBandGigs, setSelectedBandGigs] = useState([]);
  const [selectedBandName, setSelectedBandName] = useState('');

  const sortedBands = sortObjByKeys(groupedGigs);

  const handleOpenModal = (bandCode) => {
    const bandName = getBandName(bandCode, bands);
    const bandGigs = groupedGigs[bandCode];

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
        {Object.keys(sortedBands).map((key) => {
          let totalPay = getTotalPay(sortedBands[key]);
          let bandName = getBandName(key, bands);

          return (
            <Table.Row key={key}>
              <Table.Cell>{bandName}</Table.Cell>
              <Table.Cell>{sortedBands[key].length}</Table.Cell>
              <Table.Cell>{totalPay}</Table.Cell>
              <Table.Cell>
                {Math.round(totalPay / sortedBands[key].length)}
              </Table.Cell>
              <Table.Cell>
                <Modal
                  onOpen={() => handleOpenModal(key)}
                  onClose={() => closeModal()}
                  open={isModalOpen}
                  trigger={<Button content="See Gigs" />}
                >
                  <Modal.Header content={selectedBandName} />
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
                            <Table.Cell>{gig.date}</Table.Cell>
                            <Table.Cell>{gig.venue}</Table.Cell>
                            <Table.Cell>{gig.city}</Table.Cell>
                            <Table.Cell>{gig.state}</Table.Cell>
                            <Table.Cell>{gig.pay}</Table.Cell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
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
