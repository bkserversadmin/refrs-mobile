import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const SecondaryButtonBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <Button
      onPress={() => {
        console.log('Secondary button ON_PRESS Start');
        let error = null;
        try {
          console.log('Start ON_PRESS:0 SET_VARIABLE');
          setGlobalVariableValue({
            key: 'visible',
            value: false,
          });
          console.log('Complete ON_PRESS:0 SET_VARIABLE');
        } catch (err) {
          console.error(err);
          error = err.message ?? err;
        }
        console.log(
          'Secondary button ON_PRESS Complete',
          error ? { error } : 'no error'
        );
      }}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
          backgroundColor: 'rgb(255, 255, 255)',
          borderRadius: 100,
          color: theme.colors['Grey700'],
          fontFamily: 'Inter_500Medium',
          fontSize: 16,
          letterSpacing: 1.25,
        }),
        dimensions.width
      )}
      title={'Cancel'}
    />
  );
};

export default withTheme(SecondaryButtonBlock);
