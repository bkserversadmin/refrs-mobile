import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const AvailablePositionItemBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Secondary/Bluegreen100'],
          borderRadius: 8,
          flexDirection: 'row',
          paddingBottom: 8,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 8,
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Secondary/Bluegreen100'],
            borderColor: theme.colors['Secondary/Bluegreen800'],
            borderRadius: 100,
            borderStyle: 'dashed',
            borderWidth: 1,
            height: 32,
            marginRight: 8,
            width: 32,
          },
          dimensions.width
        )}
      />
      <Text
        accessible={true}
        allowFontScaling={true}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            color: theme.colors['Secondary/Bluegreen800'],
            fontFamily: 'Inter_400Regular',
            fontSize: 16,
            letterSpacing: 0.2,
            lineHeight: 16,
            marginRight: 8,
          }),
          dimensions.width
        )}
      >
        {'Available Position'}
      </Text>
      {/* Label 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: theme.colors['Secondary/Bluegreen800'],
            borderRadius: 8,
            justifyContent: 'center',
            paddingBottom: 2,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 2,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: 'rgb(255, 255, 255)',
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
            }),
            dimensions.width
          )}
        >
          {'Line'}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(AvailablePositionItemBlock);
