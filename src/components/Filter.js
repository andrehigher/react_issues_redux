import React from 'react';
import PropTypes from 'prop-types';
import { Header, Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'open', text: 'Open', value: 'open' },
  { key: 'closed', text: 'Closed', value: 'closed' },
];

const Picker = ({ value, onChange }) => (
  <div>
    <Header as='h1'>React issues</Header>
    <Dropdown
      selection
      options={options}
      value={value}
      onChange={onChange}
    />
  </div>
);

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker;
