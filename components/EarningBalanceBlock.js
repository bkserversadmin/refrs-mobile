import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Link, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const EarningBalanceBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}>
      {/* Row */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: 'rgb(61, 61, 61)',
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'Earning Balance'}
        </Text>
        <Link
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
              color: 'rgb(92, 92, 92)',
              fontFamily: 'Inter_500Medium',
              fontSize: 12,
              letterSpacing: 1.25,
            }),
            dimensions.width
          )}
          title={'View history'}
        />
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          {
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 0,
          },
          dimensions.width
        )}
      >
        {/* ChartCard */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 8,
              padding: 12,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.EarningChart}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 100,
                width: '100%',
              }),
              dimensions.width
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(EarningBalanceBlock);
