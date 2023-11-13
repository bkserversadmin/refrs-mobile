import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const GameCardBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(253, 241, 196)',
          borderColor: 'rgb(248, 211, 71)',
          borderRadius: 8,
          borderWidth: 1,
          padding: 15,
        },
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
            marginBottom: 12,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              letterSpacing: 0.2,
            }),
            dimensions.width
          )}
        >
          {'Linden Vs Pershing'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Number */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(245, 245, 245)',
                borderRadius: 8,
                marginRight: 16,
                padding: 8,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'#231'}
            </Text>
          </View>
          <Icon name={'Entypo/dots-three-vertical'} size={24} />
        </View>
      </View>
      {/* Row */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Value */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgb(235, 255, 255)',
              borderRadius: 8,
              marginRight: 16,
              padding: 8,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(0, 61, 61)',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 12,
              }),
              dimensions.width
            )}
          >
            {'#231'}
          </Text>
        </View>
        {/* Date */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Icon
            name={'MaterialCommunityIcons/calendar-blank'}
            size={24}
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(39, 31, 1, 0)', marginRight: 8 },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(39, 31, 1)',
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                letterSpacing: 0.4,
              }),
              dimensions.width
            )}
          >
            {'May 8th - 8:00 PM '}
          </Text>
        </View>
        {/* Location */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Icon
            name={'Ionicons/location-sharp'}
            size={24}
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(39, 31, 1, 0)', marginRight: 8 },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(39, 31, 1)',
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                letterSpacing: 0.4,
              }),
              dimensions.width
            )}
          >
            {'PP'}
          </Text>
        </View>
        {/* Price */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(39, 31, 1)',
                fontFamily: 'Inter_700Bold',
                fontSize: 12,
                letterSpacing: 0.4,
                paddingLeft: 16,
              }),
              dimensions.width
            )}
          >
            {'$35'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(GameCardBlock);
