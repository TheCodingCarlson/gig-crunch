import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { STATES } from '../../constants';

const initialFieldValues = {
  date: '',
  venue: '',
  city: '',
  state: '',
  bandCode: '',
  pay: '',
};

const createBandOptions = (bands) => {
  const options = [];

  bands.forEach((band) => {
    let option = {
      key: band.id,
      text: band.name,
      value: band.code,
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
}) => {
  const bandOptions = createBandOptions(bands);
  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (currentGigId !== 0) {
      setValues({
        ...gigs.find((gig) => gig.id === currentGigId),
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
        console.log(`Updated Gig #${currentGigId}!`);
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
      <p>Current Gig Id: {currentGigId}</p>
      <Form.Group>
        <Form.Input
          name="date"
          label="Date"
          placeholder="Date"
          value={values.date}
          onChange={handleInputChange}
        />
        <Form.Input
          name="venue"
          label="Venue"
          placeholder="Venue"
          value={values.venue}
          onChange={handleInputChange}
        />
        <Form.Input
          name="city"
          label="City"
          placeholder="City"
          value={values.city}
          onChange={handleInputChange}
        />
        <Form.Select
          name="state"
          label="State"
          options={STATES}
          placeholder="State"
          value={values.state}
          onChange={handleSelectChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Select
          name="bandCode"
          label="Band"
          options={bandOptions}
          placeholder="Band"
          value={values.bandCode}
          onChange={handleSelectChange}
        />
        <Form.Input
          name="pay"
          type="number"
          label="Pay"
          placeholder="Pay"
          value={values.pay}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit" primary content="Submit" />
      <Button type="clear" secondary onClick={handleClear} content="Reset" />
    </Form>
  );
};

const mapDispatchToProps = {
  createGig: actions.createGig,
  updateGig: actions.updateGig,
};

export default connect(null, mapDispatchToProps)(GigForm);
