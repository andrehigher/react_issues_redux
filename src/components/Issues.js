import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import Content from './Content';
import Header from './Header';

const Issues = ({issues}) => (
  <Table celled>
    <Header/>
    <Content issues={issues}/>
  </Table>
);

Issues.propTypes = {
  issues: PropTypes.array.isRequired
}

export default Issues;
