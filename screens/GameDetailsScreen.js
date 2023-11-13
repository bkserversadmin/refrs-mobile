import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const GameDetailsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Grey200'] },
        dimensions.width
      )}
    >
      {/* global_header_backbutton */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'rgb(61, 61, 61)',
            flexDirection: 'row',
            height: 64,
            justifyContent: 'space-between',
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 12,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <Icon
          color={theme.colors['Grey100']}
          name={'AntDesign/left'}
          size={24}
        />
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: 'rgb(255, 255, 255)',
              fontFamily: 'Inter_500Medium',
              fontSize: 20,
              letterSpacing: 0.15,
            }),
            dimensions.width
          )}
        >
          {'Games Details'}
        </Text>
        {/* notification container */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 100,
              height: 40,
              justifyContent: 'center',
              width: 40,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary/Yellow800']}
            name={'Ionicons/notifications'}
            size={24}
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(0, 0, 0, 0)' },
              dimensions.width
            )}
          />
          {/* Notification Quantity */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: theme.colors['System/Error500'],
                borderColor: theme.colors['Primary/Yellow100'],
                borderRadius: 100,
                borderWidth: 2,
                height: 14,
                justifyContent: 'center',
                position: 'absolute',
                right: 8,
                top: 6,
                width: 14,
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
                  fontFamily: 'Inter_700Bold',
                  fontSize: 9,
                }),
                dimensions.width
              )}
            >
              {'2'}
            </Text>
          </View>
        </View>
      </View>
      {/* Game summary */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: 'rgb(255, 255, 255)', padding: 20 },
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
              marginBottom: 24,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey900'],
                fontFamily: 'Inter_400Regular',
                fontSize: 24,
              }),
              dimensions.width
            )}
          >
            {'MPLS League Game'}
          </Text>
          {/* Level Var */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Secondary/Bluegreen100'],
                borderRadius: 100,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Secondary/Bluegreen900'],
                  fontFamily: 'Inter_700Bold',
                  fontSize: 12,
                  letterSpacing: 0.4,
                }),
                dimensions.width
              )}
            >
              {'Level Var.'}
            </Text>
          </View>
        </View>
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
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginBottom: 12,
              }),
              dimensions.width
            )}
          >
            {'Teams'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey900'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                letterSpacing: 0.15,
              }),
              dimensions.width
            )}
          >
            {'LA Lakers vs Chicago Bulls'}
          </Text>
        </View>
        {/* Row */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
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
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  marginBottom: 12,
                }),
                dimensions.width
              )}
            >
              {'Organized by '}
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
                {'Southwest High School'}
              </Text>
            </View>
          </View>
          {/* Sport info */}
          <View>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey600'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  marginBottom: 12,
                }),
                dimensions.width
              )}
            >
              {'Sport'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey900'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  letterSpacing: 0.15,
                }),
                dimensions.width
              )}
            >
              {'Basketball'}
            </Text>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(GameDetailsScreen);
