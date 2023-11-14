import React from 'react';

// validate if the password is valid. Password must contain 8 or more characters with uppercase, number and special character. Password cannot be longer than 24 characters. Password must contain at least
const validatePassword = password => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/;

  if (!regex.test(password)) {
    return false;
  }

  return true;
};

export default validatePassword;
