import React, { useState } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const initialFieldValues = {
  name: '',
};

const BandForm = ({ createBand }) => {
  const [values, setValues] = useState(initialFieldValues);
  const [isBandCreated, setIsBandCreated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createBand(values, () => {
      setIsBandCreated(true);
    });
  };

  return (
    <div>
      <Form style={{ display: isBandCreated ? 'none' : null }}>
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
        style={{ display: isBandCreated ? null : 'none' }}
        as="h2"
        color="green"
        content={`Band: ${values.name} added!`}
      />
    </div>
  );
};

const mapDispatchToProps = {
  createBand: actions.createBand,
};

export default connect(null, mapDispatchToProps)(BandForm);
