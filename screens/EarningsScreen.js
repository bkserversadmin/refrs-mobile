import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseStagingApi from '../apis/SupabaseStagingApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Shadow,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const EarningsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Grey200'] },
        dimensions.width
      )}
    >
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
          {'Earnings'}
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

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <Shadow
          paintInside={true}
          showShadowCornerBottomEnd={true}
          showShadowCornerBottomStart={true}
          showShadowCornerTopEnd={true}
          showShadowCornerTopStart={true}
          showShadowSideBottom={true}
          showShadowSideEnd={true}
          showShadowSideStart={true}
          showShadowSideTop={true}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* Earnings Summary */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                padding: 24,
                width: '100%',
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
                  color: theme.colors['Grey500'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  letterSpacing: 1.5,
                  marginBottom: 32,
                  textTransform: 'uppercase',
                }),
                dimensions.width
              )}
            >
              {'Earnings balance\n'}
            </Text>
            {/* info div */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', marginBottom: 32 },
                dimensions.width
              )}
            >
              {/* Date */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Grey600'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    letterSpacing: 0.2,
                    marginBottom: 8,
                  }),
                  dimensions.width
                )}
              >
                {'May 21 - 27'}
              </Text>
              {/* Earning */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Primary/Yellow800'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 56,
                    letterSpacing: 0.25,
                    marginBottom: 8,
                  }),
                  dimensions.width
                )}
              >
                {'$805.00'}
              </Text>
              {/* Quantity of games */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Grey600'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    letterSpacing: 0.2,
                  }),
                  dimensions.width
                )}
              >
                {'201 Games Scheduled'}
              </Text>
            </View>
            {/* Primary button */}
            <Button
              onPress={() => {
                const handler = async () => {
                  console.log('Primary button ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 FETCH_REQUEST');
                    const loginResponse = (
                      await SupabaseStagingApi.loginPOST(Constants, {})
                    )?.json;
                    console.log('Complete ON_PRESS:0 FETCH_REQUEST', {
                      loginResponse,
                    });
                    console.log('Start ON_PRESS:1 EXTRACT_KEY');
                    const accessToken = loginResponse?.access_token;
                    console.log('Complete ON_PRESS:1 EXTRACT_KEY', {
                      accessToken,
                    });
                    console.log('Start ON_PRESS:2 IF');
                    if (accessToken) {
                      setGlobalVariableValue({
                        key: 'supabaseAccessToken',
                        value: accessToken + accessToken,
                      });
                      const user_id = loginResponse?.user.id;
                      setGlobalVariableValue({
                        key: 'user',
                        value: user_id,
                      });
                      const getSessionProfile = (
                        await SupabaseStagingApi.getProfileSessionGET(
                          Constants,
                          { user: user_id }
                        )
                      )?.json;
                      const profileObject = getSessionProfile?.[0];
                      const profileObjectVariable = setGlobalVariableValue({
                        key: 'user_session',
                        value: profileObject,
                      });
                      const role_id_extracted = profileObject?.roles.id;
                      setGlobalVariableValue({
                        key: 'role_id',
                        value: role_id_extracted,
                      });
                      const profile_id_extracted = profileObject?.id;
                      setGlobalVariableValue({
                        key: 'profile_id',
                        value: profile_id_extracted,
                      });
                      navigation.navigate('DashboardScreen');
                    } else {
                      const extractedMeesageError =
                        loginResponse?.error_description;
                    }
                    console.log('Complete ON_PRESS:2 IF');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    'Primary button ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                  backgroundColor: 'rgb(248, 211, 71)',
                  borderRadius: 100,
                  color: 'rgb(39, 31, 1)',
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  letterSpacing: 1.25,
                  marginBottom: 8,
                  paddingLeft: 24,
                  paddingRight: 24,
                }),
                dimensions.width
              )}
              title={'Cash out $805.00'}
            />
            {/* Next payout */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Grey600'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  letterSpacing: 0.4,
                }),
                dimensions.width
              )}
            >
              {'Next payout Thur, May 18'}
            </Text>
          </View>
        </Shadow>
        {/* Week earnings details */}
        <View>
          {/* Ttile */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey600'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                letterSpacing: 1.5,
                marginBottom: 16,
                marginTop: 32,
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: 'uppercase',
              }),
              dimensions.width
            )}
          >
            {'Weeks earnings details'}
          </Text>
          {/* Earning item */}
          <View>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('EarningsDetailsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Row */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomWidth: 2,
                    borderColor: theme.colors['Grey300'],
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 20,
                    marginRight: 20,
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
                      color: theme.colors['Grey800'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 16,
                      letterSpacing: 0.2,
                    }),
                    dimensions.width
                  )}
                >
                  {'May 14 - 20'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey800'],
                      fontFamily: 'Inter_400Regular',
                      letterSpacing: 0.2,
                    }),
                    dimensions.width
                  )}
                >
                  {'153 Games'}
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Primary/Yellow800'],
                          fontFamily: 'Inter_700Bold',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'$765'}
                  </Text>
                  <Icon
                    color={theme.colors['Grey900']}
                    name={'MaterialIcons/keyboard-arrow-right'}
                    size={20}
                    style={StyleSheet.applyWidth(
                      { height: 20, width: 20 },
                      dimensions.width
                    )}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          {/* Earning item 2 */}
          <View>
            {/* Row */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Grey300'],
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  marginRight: 20,
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
                    color: theme.colors['Grey800'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    letterSpacing: 0.2,
                  }),
                  dimensions.width
                )}
              >
                {'May 14 - 20'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Grey800'],
                    fontFamily: 'Inter_400Regular',
                    letterSpacing: 0.2,
                  }),
                  dimensions.width
                )}
              >
                {'153 Games'}
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
                    }),
                    dimensions.width
                  )}
                >
                  {'$765'}
                </Text>
                <Icon
                  color={theme.colors['Grey900']}
                  name={'MaterialIcons/keyboard-arrow-right'}
                  size={20}
                  style={StyleSheet.applyWidth(
                    { height: 20, width: 20 },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </View>
          {/* Earning item 3 */}
          <View>
            {/* Row */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  marginRight: 20,
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
                    color: theme.colors['Grey800'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    letterSpacing: 0.2,
                  }),
                  dimensions.width
                )}
              >
                {'May 14 - 20'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Grey800'],
                    fontFamily: 'Inter_400Regular',
                    letterSpacing: 0.2,
                  }),
                  dimensions.width
                )}
              >
                {'153 Games'}
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
                    }),
                    dimensions.width
                  )}
                >
                  {'$765'}
                </Text>
                <Icon
                  color={theme.colors['Grey900']}
                  name={'MaterialIcons/keyboard-arrow-right'}
                  size={20}
                  style={StyleSheet.applyWidth(
                    { height: 20, width: 20 },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </View>
        </View>
        {/* Earning balance */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
        >
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
                  color: theme.colors['Grey600'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                }),
                dimensions.width
              )}
            >
              {'May Balance'}
            </Text>
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
                    height: 150,
                    width: '100%',
                  }),
                  dimensions.width
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Navigation Bar */}
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
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('MyGamesScreen');
              } catch (err) {
                console.error(err);
              }
            }}
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
                style={StyleSheet.applyWidth(
                  { marginBottom: 4 },
                  dimensions.width
                )}
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
          </Touchable>
          {/* Touchable 3 */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('EarningsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Nav button 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: theme.colors['Primary/Yellow400'],
                  padding: 4,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Primary/Yellow900']}
                name={'MaterialIcons/monetization-on'}
                size={24}
                style={StyleSheet.applyWidth(
                  { marginBottom: 4 },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Primary/Yellow900'],
                    fontFamily: 'Inter_500Medium',
                    letterSpacing: 1.25,
                  }),
                  dimensions.width
                )}
              >
                {'Earnings'}
              </Text>
            </View>
          </Touchable>
          {/* Touchable Profile */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ProfilePersonalInformationScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
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
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(EarningsScreen);
