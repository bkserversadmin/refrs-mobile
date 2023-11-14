import React from 'react';

// validates an option select not empty
const validateSelect = value => {
  console.log('el value del select ===>', value);
  if (!value) {
    return false;
  }

  return true;
};

export default validateSelect;
