import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const TabButtonsBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginBottom: 24,
          paddingBottom: 8,
          paddingTop: 8,
        },
        dimensions.width
      )}
    >
      <Button
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            backgroundColor: theme.colors['Primary/Yellow400'],
            color: theme.colors['Primary/Yellow900'],
            fontFamily: 'System',
            fontWeight: '400',
            letterSpacing: 0.25,
            marginRight: 16,
          }),
          dimensions.width
        )}
        title={'Personal information'}
      />
      {/* Button 2 */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('ProfilePayoutInformationScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: theme.colors['Grey600'],
            fontFamily: 'System',
            fontWeight: '400',
            letterSpacing: 0.25,
          }),
          dimensions.width
        )}
        title={'Payout information'}
      />
    </View>
  );
};

export default withTheme(TabButtonsBlock);
