import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const State = ({state}) => (
  <Label className={state}>{state}</Label>
);

State.propTypes = {
  state: PropTypes.string.isRequired
}

export default State;
