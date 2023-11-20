import React from 'react';

// validates if password and confirm password match.
const passwordsMatch = (password, confirmation) => {
  console.log('el password ===>', password, 'el confiurm ====>', confirmation);

  if (password !== confirmation) {
    return false;
  }

  return true;
};

export default passwordsMatch;
