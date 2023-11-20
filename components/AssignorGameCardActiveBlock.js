import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const AssignorGameCardActiveBlock = props => {
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
          marginBottom: 8,
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
          {'MPLS Tournament Game'}
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
          <Icon name={'Entypo/dots-three-vertical'} size={20} />
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
                letterSpacing: 1.5,
              }),
              dimensions.width
            )}
          >
            {'12U'}
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
            size={14}
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
            size={14}
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
        {/* Number */}
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
                color: theme.colors['System/Error700'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                letterSpacing: 0.4,
                marginRight: 4,
                paddingLeft: 16,
              }),
              dimensions.width
            )}
          >
            {'2/3'}
          </Text>
          <Icon
            color={theme.colors['System/Error700']}
            name={'AntDesign/exclamationcircle'}
            size={14}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(AssignorGameCardActiveBlock);
