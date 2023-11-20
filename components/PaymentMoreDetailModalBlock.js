import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const PaymentMoreDetailModalBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 255, 255)', borderRadius: 8 },
        dimensions.width
      )}
    >
      {/* Payment more details modal */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: 8,
            padding: 20,
          },
          dimensions.width
        )}
      >
        {/* info container */}
        <View
          style={StyleSheet.applyWidth({ marginBottom: 24 }, dimensions.width)}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey600'],
                fontFamily: 'Inter_500Medium',
                fontSize: 10,
                letterSpacing: 1.5,
                marginBottom: 12,
                textTransform: 'uppercase',
              }),
              dimensions.width
            )}
          >
            {'payout date'}
          </Text>
          {/* Row */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Primary/Yellow900']}
              name={'Entypo/calendar'}
              size={14}
            />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey900'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  letterSpacing: 0.25,
                  marginLeft: 8,
                }),
                dimensions.width
              )}
            >
              {'LA Lakers vs Chicago Bulls'}
            </Text>
          </View>
        </View>
        {/* Row */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 32,
            },
            dimensions.width
          )}
        >
          {/* Organized by */}
          <View>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey600'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 10,
                  letterSpacing: 1.5,
                  marginBottom: 12,
                  textTransform: 'uppercase',
                }),
                dimensions.width
              )}
            >
              {'assignor'}
            </Text>
            {/* Row */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Avatar3}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                    height: 24,
                    width: 24,
                  }),
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Grey900'],
                    fontFamily: 'Inter_400Regular',
                    letterSpacing: 0.25,
                    marginLeft: 8,
                  }),
                  dimensions.width
                )}
              >
                {'Robert Fox'}
              </Text>
            </View>
          </View>
        </View>
        {/* Row 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 32,
            },
            dimensions.width
          )}
        >
          {/* Organized by */}
          <View>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey600'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 10,
                  letterSpacing: 1.5,
                  marginBottom: 12,
                  textTransform: 'uppercase',
                }),
                dimensions.width
              )}
            >
              {'sport organization'}
            </Text>
            {/* Row */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.SportOrgLogo}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                    height: 24,
                    width: 24,
                  }),
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Grey900'],
                    fontFamily: 'Inter_400Regular',
                    letterSpacing: 0.25,
                    marginLeft: 8,
                  }),
                  dimensions.width
                )}
              >
                {'National Basketball Association'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(PaymentMoreDetailModalBlock);
