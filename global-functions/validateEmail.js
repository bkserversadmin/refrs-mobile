import React from 'react';

const validateEmail = email => {
  const regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim;

  if (!regex.test(email)) {
    return false;
  }

  return true;
};

export default validateEmail;
