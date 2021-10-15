import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal } from 'semantic-ui-react';
import * as actions from '../../actions';
import BandForm from '../Forms/BandForm';

const AllBandTable = ({ bands, deleteBand, openModal, closeModal }) => {
  const handleDelete = (band) => {
    deleteBand(band._id, () => {
      console.log('Deleted Band!');
    });
  };

  return (
    <Table celled>
      <Table.Body>
        {bands.map((band) => {
          return (
            <Table.Row key={band._id}>
              <Table.Cell>{band.name}</Table.Cell>
              <Table.Cell>
                <Modal
                  closeIcon
                  onOpen={() => openModal()}
                  onClose={() => closeModal()}
                  trigger={
                    <Button
                      className="field--button-container"
                      color="olive"
                      content="Update Band"
                      icon="edit"
                    />
                  }
                >
                  <Modal.Content>
                    <BandForm bands={bands} bandId={band._id} />
                  </Modal.Content>
                </Modal>
                <Button
                  color="red"
                  onClick={() => handleDelete(band)}
                  icon="trash"
                  content="Delete band"
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

const mapDispatchToProps = {
  deleteBand: actions.deleteBand,
  openModal: actions.openModal,
  closeModal: actions.closeModal,
};

export default connect(null, mapDispatchToProps)(AllBandTable);
