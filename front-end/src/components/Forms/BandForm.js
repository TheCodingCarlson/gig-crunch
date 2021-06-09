import React, { useState, useEffect } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const initialFieldValues = {
  name: '',
};

const BandForm = ({ bands, createBand, updateBand, bandId }) => {
  const [values, setValues] = useState(initialFieldValues);
  const [isBandCreated, setIsBandCreated] = useState(false);
  const [isBandUpdated, setIsBandUpdated] = useState(false);

  useEffect(() => {
    if (bandId) {
      setValues({
        ...bands.find((band) => band._id === bandId),
      });
    }
  }, [bands, bandId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bandId) {
      updateBand(bandId, values, () => {
        setIsBandUpdated(true);
      });
    } else {
      createBand(values, () => {
        setIsBandCreated(true);
      });
    }
  };

  return (
    <div>
      <Form style={{ display: isBandCreated || isBandUpdated ? 'none' : null }}>
        <Header as="h4" content="Add Band" />
        <Form.Group>
          <Form.Input
            name="name"
            label="Band Name"
            placeholder="Band Name"
            value={values.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button onClick={handleSubmit} primary>
          Submit
        </Button>
      </Form>
      <Header
        style={{ display: isBandCreated || isBandUpdated ? null : 'none' }}
        as="h2"
        color="green"
        content={`Band: ${values.name} ${isBandCreated ? 'added' : 'updated'}!`}
      />
    </div>
  );
};

const mapDispatchToProps = {
  createBand: actions.createBand,
  updateBand: actions.updateBand,
};

export default connect(null, mapDispatchToProps)(BandForm);
