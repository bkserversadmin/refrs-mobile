import React from 'react';

// validate all field of register form, if there is an error it will throw a new error
const validateRegisterForm = email => {
  if (!email) {
    throw new Error('Not all fields are valid');
  }
};

export default validateRegisterForm;
