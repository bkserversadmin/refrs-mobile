import React from 'react';

const validateBaseString = (value, max_length) => {
  const isNotEmpty = value.length;

  console.log('el value ===>', value, 'max_length ==>', max_length);

  if (isNotEmpty === 0) {
    return 'This field is required';
  }

  if (max_length && max_length <= isNotEmpty) {
    return 'must be at max 16 characters';
  }

  const regex = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;

  if (!regex.test(value)) {
    return "can't contain special characters";
  }

  return null;
};

export default validateBaseString;
