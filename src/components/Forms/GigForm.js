import React, { useState, useEffect } from 'react';
import { Form, Button, Header, Grid, Modal, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { STATES, MONTHS, DAYS, YEARS } from '../../constants';
import BandForm from './BandForm';

const initialFieldValues = {
  month: '',
  day: '',
  year: '',
  venue: '',
  city: '',
  state: '',
  bandId: '',
  pay: '',
};

const createBandOptions = (bands) => {
  const options = [];

  bands.forEach((band) => {
    let option = {
      key: band._id,
      text: band.name,
      value: band._id,
    };

    options.push(option);
  });

  return options;
};

const GigForm = ({
  gigs,
  bands,
  createGig,
  updateGig,
  currentGigId,
  setCurrentGigId,
  openModal,
  closeModal,
}) => {
  const bandOptions = createBandOptions(bands);
  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (currentGigId !== 0) {
      setValues({
        ...gigs.find((gig) => gig._id === currentGigId),
      });
    }
  }, [currentGigId, gigs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    openModal();
  };

  const handleSelectChange = (e, data) => {
    const { name, value } = data;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues({ ...initialFieldValues });
    setCurrentGigId(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentGigId === 0) {
      createGig(values, () => {
        console.log('Created Gig!');
      });
    } else {
      updateGig(currentGigId, values, () => {
        console.log(`Updated Gig ${currentGigId}!`);
      });
    }

    resetForm();
  };

  const handleClear = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header as="h4" content="Add Gig" />
      <Form.Group>
        <Form.Select
          name="month"
          label="Month"
          options={MONTHS}
          placeholder="Month"
          value={values.month}
          required
          onChange={handleSelectChange}
        />
        <Form.Select
          name="day"
          label="Day"
          options={DAYS}
          placeholder="Day"
          value={values.day}
          required
          onChange={handleSelectChange}
        />
        <Form.Select
          name="year"
          label="Year"
          options={YEARS}
          placeholder="Year"
          value={values.year}
          required
          onChange={handleSelectChange}
        />
        <Form.Input
          name="venue"
          label="Venue"
          placeholder="Venue"
          value={values.venue}
          required
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          name="city"
          label="City"
          placeholder="City"
          value={values.city}
          required
          onChange={handleInputChange}
        />
        <Form.Select
          name="state"
          label="State"
          options={STATES}
          placeholder="State"
          value={values.state}
          required
          onChange={handleSelectChange}
        />
        <Form.Input
          name="pay"
          type="number"
          label="Pay"
          placeholder="Pay"
          value={values.pay}
          required
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Select
          name="bandId"
          options={bandOptions}
          label="Band"
          placeholder="Band"
          value={values.bandId}
          required
          onChange={handleSelectChange}
        />
        <Modal
          closeIcon
          onOpen={(e) => handleOpenModal(e)}
          onClose={() => closeModal()}
          trigger={
            <Form.Button
              className="field--button-container"
              color="teal"
              content="Add Band"
            />
          }
        >
          <Modal.Content>
            <BandForm />
          </Modal.Content>
        </Modal>
      </Form.Group>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Button.Group>
              <Button type="submit" primary content={currentGigId === 0 ? 'Add' : 'Update'} />
              <Button
                type="clear"
                secondary
                onClick={handleClear}
                content="Reset"
              />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

const mapDispatchToProps = {
  createGig: actions.createGig,
  updateGig: actions.updateGig,
  createBand: actions.createBand,
  openModal: actions.openModal,
  closeModal: actions.closeModal,
};

export default connect(null, mapDispatchToProps)(GigForm);
