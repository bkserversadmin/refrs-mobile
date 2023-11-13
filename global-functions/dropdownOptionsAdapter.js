import React from 'react';

// returns an array of options with label and value
const dropdownOptionsAdapter = (data, extracted_key, extracted_value) => {
  if (data?.length > 0) {
    const array = data?.map(item => ({
      label: item[`${extracted_key}`],
      value: item[`${extracted_value}`],
    }));

    return array;
  }

  return [];
};

export default dropdownOptionsAdapter;
