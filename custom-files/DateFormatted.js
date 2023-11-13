// This import is required if you are defining react components in this module.
import React from 'react';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.
import { Text } from 'react-native';
import { dayjs } from 'dayjs';

// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <CustomCode.MyExampleComponent />
export const MyExampleComponent = ({ date }) => {
  return <Text>{dayjs(date)?.format('MMM Do - hh:mm A')}</Text>;
};
