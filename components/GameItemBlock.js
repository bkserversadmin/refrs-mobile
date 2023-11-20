import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const GameItemBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View>
      {/* Row */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: theme.colors['Grey300'],
            borderRadius: 8,
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 8,
            paddingBottom: 24,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 24,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Grey800'],
              fontFamily: 'Inter_700Bold',
              fontSize: 16,
              letterSpacing: 0.2,
            }),
            dimensions.width
          )}
        >
          {'MPLS Tournament Game'}
        </Text>
        {/* Price and arrow */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Text 3 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Primary/Yellow800'],
                fontFamily: 'Inter_700Bold',
                fontSize: 16,
                letterSpacing: 0.2,
                marginRight: 24,
              }),
              dimensions.width
            )}
          >
            {'$76'}
          </Text>
          <Icon
            color={theme.colors['Grey900']}
            name={'Entypo/dots-three-vertical'}
            size={20}
            style={StyleSheet.applyWidth(
              { height: 20, width: 20 },
              dimensions.width
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(GameItemBlock);
