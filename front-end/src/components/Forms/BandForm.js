import React, { useState } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const initialFieldValues = {
  name: '',
};

const BandForm = ({ createBand }) => {
  const [values, setValues] = useState(initialFieldValues);

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
      console.log('Band created!');
    });
    setValues({ ...initialFieldValues });
  };

  return (
    <Form>
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
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const mapDispatchToProps = {
  createBand: actions.createBand,
};

export default connect(null, mapDispatchToProps)(BandForm);
