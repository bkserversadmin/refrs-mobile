import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const NavigationBarBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 255, 255)' },
        dimensions.width
      )}
    >
      {/* Row */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 8,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 8,
          },
          dimensions.width
        )}
      >
        {/* Nav button */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', alignSelf: 'center', padding: 4 },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Grey600']}
            name={'MaterialCommunityIcons/whistle-outline'}
            size={24}
            style={StyleSheet.applyWidth({ marginBottom: 4 }, dimensions.width)}
          />
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey700'],
                fontFamily: 'Inter_500Medium',
                letterSpacing: 1.25,
              }),
              dimensions.width
            )}
          >
            {'My Games'}
          </Text>
        </View>
        {/* Nav button 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', alignSelf: 'center', padding: 4 },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Grey600']}
            name={'Feather/calendar'}
            size={24}
            style={StyleSheet.applyWidth({ marginBottom: 4 }, dimensions.width)}
          />
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey700'],
                fontFamily: 'Inter_500Medium',
                letterSpacing: 1.25,
              }),
              dimensions.width
            )}
          >
            {'Availability'}
          </Text>
        </View>
        {/* Nav button 3 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', alignSelf: 'center', padding: 4 },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Grey600']}
            name={'MaterialIcons/attach-money'}
            size={24}
            style={StyleSheet.applyWidth({ marginBottom: 4 }, dimensions.width)}
          />
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey700'],
                fontFamily: 'Inter_500Medium',
                letterSpacing: 1.25,
              }),
              dimensions.width
            )}
          >
            {'Earnings'}
          </Text>
        </View>
        {/* Avatar */}
        <View
          style={StyleSheet.applyWidth(
            { height: 40, width: 40 },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.Avartar}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 40,
                width: 40,
              }),
              dimensions.width
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(NavigationBarBlock);
