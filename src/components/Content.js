import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'semantic-ui-react';
import FormatDate from './Date';
import Label from './Label';
import State from './State';

const Content = ({issues}) => (
  <Table.Body>
    {issues.map((issue) =>
      <Table.Row key={issue.id}>
        <Table.Cell>{issue.number}</Table.Cell>
        <Table.Cell>{issue.title}</Table.Cell>
        <Table.Cell><FormatDate date={issue.created_at}/></Table.Cell>
        <Table.Cell><FormatDate date={issue.updated_at}/></Table.Cell>
        <Table.Cell><Label labels={issue.labels}/></Table.Cell>
        <Table.Cell><State state={issue.state}/></Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
);

Content.propTypes = {
  issues: PropTypes.array.isRequired
}

export default Content;