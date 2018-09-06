import React from 'react';
import PropTypes from 'prop-types';

const FormatDate = ({date}) => {
  const newDate = new Date(date);
  return <span>{newDate.toLocaleDateString()}</span>;
}

FormatDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default FormatDate;