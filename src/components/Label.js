import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const LabelIssue = ({labels}) => (
  <div>
    {labels.map(label => 
      <Label key={label.id} style={{backgroundColor: '#' + label.color}}>
        {label.name}
      </Label>
    )}
  </div>
);

LabelIssue.propTypes = {
  labels: PropTypes.array.isRequired
}

export default LabelIssue;