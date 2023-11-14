import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

const NotificationsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* global_header */}
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
          {'Notifications'}
        </Text>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('DashboardScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* notification container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: theme.colors['Primary/Yellow400'],
                borderRadius: 100,
                height: 40,
                justifyContent: 'center',
                width: 40,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Primary/Yellow900']}
              name={'Ionicons/notifications'}
              size={24}
              style={StyleSheet.applyWidth(
                { backgroundColor: 'rgba(0, 0, 0, 0)' },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
      </View>

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Title container */}
        <View
          style={StyleSheet.applyWidth(
            {
              paddingBottom: 16,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 16,
            },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey600'],
                fontFamily: 'Inter_500Medium',
                letterSpacing: 0.25,
                lineHeight: 14,
              }),
              dimensions.width
            )}
          >
            {'New notifications (2)'}
          </Text>
        </View>
        {/* Notification item success */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Secondary/Bluegreen50'],
              flexDirection: 'row',
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* icon container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Secondary/Bluegreen100'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                marginRight: 6,
                width: 32,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Secondary/Bluegreen800']}
              name={'MaterialCommunityIcons/whistle'}
              size={20}
            />
          </View>
          {/* info container */}
          <View style={StyleSheet.applyWidth({ width: 280 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey800'],
                  fontFamily: 'Inter_400Regular',
                  letterSpacing: 0.25,
                  lineHeight: 14,
                  marginBottom: 8,
                }),
                dimensions.width
              )}
            >
              {"You've been assigned a new game."}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'32 min ago'}
            </Text>
          </View>
        </View>
        {/* Notification item error */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors['System/Error100'],
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* icon container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['System/Error200'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                marginRight: 6,
                width: 32,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['System/Error800']}
              name={'MaterialCommunityIcons/whistle'}
              size={20}
            />
          </View>
          {/* info container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'flex-start',
                alignSelf: 'flex-start',
                flexWrap: 'nowrap',
                width: 280,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  alignSelf: 'flex-start',
                  color: theme.colors['Grey800'],
                  flex: 0,
                  fontFamily: 'Inter_400Regular',
                  letterSpacing: 0.25,
                  lineHeight: 14,
                  marginBottom: 8,
                }),
                dimensions.width
              )}
            >
              {'Sorry, the game Knicks vs Heat has been canceled or deleted.'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'40 min ago'}
            </Text>
          </View>
          {/* Icon */}
          <View>
            <Icon
              color={theme.colors['System/Error700']}
              name={'Ionicons/alert-circle'}
              size={20}
            />
          </View>
        </View>
        {/* Notification item success 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* icon container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Secondary/Bluegreen100'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                marginRight: 6,
                width: 32,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Secondary/Bluegreen800']}
              name={'MaterialCommunityIcons/whistle'}
              size={20}
            />
          </View>
          {/* info container */}
          <View style={StyleSheet.applyWidth({ width: 280 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey800'],
                  fontFamily: 'Inter_400Regular',
                  letterSpacing: 0.25,
                  lineHeight: 14,
                  marginBottom: 8,
                }),
                dimensions.width
              )}
            >
              {'A new open game is available. Join now!'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'32 min ago'}
            </Text>
          </View>
        </View>
        {/* Notification item success 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* icon container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Secondary/Bluegreen100'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                marginRight: 6,
                width: 32,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Secondary/Bluegreen800']}
              name={'MaterialCommunityIcons/whistle'}
              size={20}
            />
          </View>
          {/* info container */}
          <View style={StyleSheet.applyWidth({ width: 280 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey800'],
                  fontFamily: 'Inter_400Regular',
                  letterSpacing: 0.25,
                  lineHeight: 14,
                  marginBottom: 8,
                }),
                dimensions.width
              )}
            >
              {'Your game starts in 24 hours. Prepare yourself!'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'32 min ago'}
            </Text>
          </View>
        </View>
        {/* Notification item success 4 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* icon container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Secondary/Bluegreen100'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                marginRight: 6,
                width: 32,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Secondary/Bluegreen800']}
              name={'FontAwesome/users'}
              size={20}
            />
          </View>
          {/* info container */}
          <View style={StyleSheet.applyWidth({ width: 280 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey800'],
                  fontFamily: 'Inter_400Regular',
                  letterSpacing: 0.25,
                  lineHeight: 14,
                  marginBottom: 8,
                }),
                dimensions.width
              )}
            >
              {'The assignor wants you to join their referee pool.'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'32 min ago'}
            </Text>
          </View>
        </View>
        {/* Notification item success 5 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* icon container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Secondary/Bluegreen100'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                marginRight: 6,
                width: 32,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Secondary/Bluegreen800']}
              name={'MaterialIcons/attach-money'}
              size={20}
            />
          </View>
          {/* info container */}
          <View style={StyleSheet.applyWidth({ width: 280 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey800'],
                  fontFamily: 'Inter_400Regular',
                  letterSpacing: 0.25,
                  lineHeight: 14,
                  marginBottom: 8,
                }),
                dimensions.width
              )}
            >
              {'Payment initiated for [XYZ] amount.'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'32 min ago'}
            </Text>
          </View>
        </View>
        {/* Notification item error 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(255, 255, 255)',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* icon container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['System/Error200'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                marginRight: 6,
                width: 32,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['System/Error800']}
              name={'MaterialCommunityIcons/whistle'}
              size={20}
            />
          </View>
          {/* info container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'flex-start',
                alignSelf: 'flex-start',
                flexWrap: 'nowrap',
                width: 280,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  alignSelf: 'flex-start',
                  color: theme.colors['Grey800'],
                  flex: 0,
                  fontFamily: 'Inter_400Regular',
                  letterSpacing: 0.25,
                  lineHeight: 14,
                  marginBottom: 8,
                }),
                dimensions.width
              )}
            >
              {
                'Your request to join the [Assignor name] referee pool has been declined.'
              }
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 10,
                }),
                dimensions.width
              )}
            >
              {'40 min ago'}
            </Text>
          </View>
          {/* Icon */}
          <View>
            <Icon
              color={theme.colors['System/Error700']}
              name={'Ionicons/alert-circle'}
              size={20}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
