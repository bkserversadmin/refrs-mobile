import React from 'react';

// validates if a value is a valid email
const validateEmail = email => {
  const regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim;

  if (!regex.test(email)) {
    return false;
  }

  return true;
};

export default validateEmail;
