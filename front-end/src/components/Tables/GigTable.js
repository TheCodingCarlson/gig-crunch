import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getBandName } from '../../helpers';

const GigTable = ({ bands, gigs, headers, deleteGig, setCurrentGigId }) => {
  const handleDelete = (gig) => {
    deleteGig(gig.id, () => {
      console.log('Deleted Gig!');
    });
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
        {gigs.map((gig) => {
          let bandName = getBandName(gig.bandCode, bands);

          return (
            <Table.Row key={gig.id}>
              <Table.Cell>{gig.date}</Table.Cell>
              <Table.Cell>{bandName}</Table.Cell>
              <Table.Cell>{gig.venue}</Table.Cell>
              <Table.Cell>{gig.city}</Table.Cell>
              <Table.Cell>{gig.state}</Table.Cell>
              <Table.Cell>{gig.pay}</Table.Cell>
              <Table.Cell>
                <Button
                  color="olive"
                  onClick={() => {
                    setCurrentGigId(gig.id);
                  }}
                  icon="edit"
                  content="Update gig"
                />
                <Button
                  color="red"
                  onClick={() => handleDelete(gig)}
                  icon="trash"
                  content="Delete gig"
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
  deleteGig: actions.deleteGig,
};

export default connect(null, mapDispatchToProps)(GigTable);
