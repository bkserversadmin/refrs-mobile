import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { parseBoolean } from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FormControlBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [first_name_variable, setFirst_name_variable] = React.useState('');
  const [firstname_error_var, setFirstname_error_var] = React.useState('');

  return (
    <View
      style={StyleSheet.applyWidth(
        { marginBottom: 24, width: '100%' },
        dimensions.width
      )}
    >
      {/* Text 3 */}
      <Text
        accessible={true}
        allowFontScaling={true}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            color: 'rgb(92, 92, 92)',
            fontFamily: 'Inter_500Medium',
            fontSize: 10,
            letterSpacing: 1.5,
            marginBottom: 8,
            paddingLeft: 16,
            textTransform: 'uppercase',
          }),
          dimensions.width
        )}
      >
        {'first name'}
      </Text>
      {/* first_name_input */}
      <TextInput
        allowFontScaling={true}
        autoCapitalize={'none'}
        changeTextDelay={500}
        onChangeText={newFirstNameInputValue => {
          try {
            const valuePP7VUjvX = newFirstNameInputValue;
            setFirst_name_variable(valuePP7VUjvX);
            const first_name_result = valuePP7VUjvX;
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'first name'}
        placeholderTextColor={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Text Input'],
            {
              backgroundColor: 'rgb(245, 245, 245)',
              color: 'rgb(122, 122, 122)',
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
              textTransform: 'none',
              width: '100%',
            }
          ),
          dimensions.width
        )}
        value={first_name_variable}
      />
      {/* error firstname text */}
      <>
        {!parseBoolean(firstname_error_var) ? null : (
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['System/Error500'],
              }),
              dimensions.width
            )}
          >
            {firstname_error_var}
          </Text>
        )}
      </>
    </View>
  );
};

export default withTheme(FormControlBlock);
