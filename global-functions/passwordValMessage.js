import React from 'react';

// return a message error password is somethings is wrong
const passwordValMessage = password => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/;

  if (!passwordRegex.test(password)) {
    console.log('el password ====>', password.search(/^[a-z]/g));
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    } else if (password.search(/(?=.*[a-z])/) < 0) {
      return 'Password must contain at least one lowercase letter.';
    } else if (password.search(/(?=.*[A-Z])/) < 0) {
      return 'Password must contain at least one uppercase letter.';
    } else if (password.search(/(?=.*\d)/) < 0) {
      return 'Password must contain at least one number.';
    } else if (password.search(/(?=.*[@$!%*#?&])/) < 0) {
      return 'Password must contain at least one special character.';
    } else {
      return 'Password is too long.';
    }
  } else {
    return null;
  }
};

export default passwordValMessage;
