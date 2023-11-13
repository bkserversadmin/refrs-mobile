import React from 'react';

// returns a formatted date
const getFormattedDate = date => {
  const day = require('moment');

  if (date) {
    return day(date).format('MMM Do - hh:mm A');
  }

  return '';
};

export default getFormattedDate;
