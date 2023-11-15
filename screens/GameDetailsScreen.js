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

const GameDetailsScreen = props => {
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
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
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
          {/* Game summary */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                padding: 20,
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
              style={StyleSheet.applyWidth(
                { marginBottom: 24 },
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
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        { height: 24, width: 24 }
                      ),
                      dimensions.width
                    )}
                  />
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey900'],
                          fontFamily: 'Inter_400Regular',
                          letterSpacing: 0.25,
                          marginLeft: 8,
                        }
                      ),
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
            {/* Assigned */}
            <View
              style={StyleSheet.applyWidth(
                { marginBottom: 32 },
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
                    marginBottom: 12,
                  }),
                  dimensions.width
                )}
              >
                {'Referees assigned'}
              </Text>
              {/* Row */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 16,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Avatar2}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { height: 32, width: 32 }
                    ),
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { marginRight: 12 },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey900'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                          letterSpacing: 0.25,
                          lineHeight: 16,
                          marginBottom: 4,
                          marginLeft: 8,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Wyatt Gustafson'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey600'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginLeft: 8,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'(612) 123-0424'}
                  </Text>
                </View>
                {/* Label */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      backgroundColor: theme.colors['Secondary/Bluegreen100'],
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Secondary/Bluegreen800'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Main'}
                  </Text>
                </View>
              </View>
              {/* Row 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 16,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.AvatarSm}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { height: 32, width: 32 }
                    ),
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { marginRight: 12 },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey900'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                          letterSpacing: 0.25,
                          lineHeight: 16,
                          marginBottom: 4,
                          marginLeft: 8,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Huck Sorock'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey600'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginLeft: 8,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'(603) 532-0498'}
                  </Text>
                </View>
                {/* Label */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      backgroundColor: theme.colors['Secondary/Bluegreen100'],
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Secondary/Bluegreen800'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Line'}
                  </Text>
                </View>
              </View>
              {/* Row available position */}
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
                {/* Available position  */}
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Secondary/Bluegreen800'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                          letterSpacing: 0.2,
                          lineHeight: 16,
                          marginRight: 8,
                        }
                      ),
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
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: 'rgb(255, 255, 255)',
                            fontFamily: 'Inter_400Regular',
                            fontSize: 12,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Line'}
                    </Text>
                  </View>
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
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'],
                      {
                        backgroundColor: 'rgb(248, 211, 71)',
                        borderRadius: 100,
                        color: 'rgb(39, 31, 1)',
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        letterSpacing: 1.25,
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Pick up'}
                />
              </View>
            </View>
            {/* Row */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
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
                    marginRight: 12,
                  }),
                  dimensions.width
                )}
              >
                {'Compensation:'}
              </Text>
              {/* Main */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Label 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      backgroundColor: theme.colors['Secondary/Bluegreen100'],
                      borderRadius: 8,
                      justifyContent: 'center',
                      marginRight: 8,
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Secondary/Bluegreen800'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Main'}
                  </Text>
                </View>

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
                  {'$87'}
                </Text>
              </View>
              {/* Line */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Label 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      backgroundColor: theme.colors['Secondary/Bluegreen100'],
                      borderRadius: 8,
                      justifyContent: 'center',
                      marginRight: 8,
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Secondary/Bluegreen800'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Line'}
                  </Text>
                </View>

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
                  {'$72'}
                </Text>
              </View>
            </View>
          </View>
        </Shadow>
        {/* Game details */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 24 }, dimensions.width)}
        >
          {/* Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Grey600'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                letterSpacing: 0.15,
                marginBottom: 16,
                paddingLeft: 20,
                paddingRight: 20,
              }),
              dimensions.width
            )}
          >
            {'Game details'}
          </Text>
          {/* Card Container */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: 16,
                paddingBottom: 32,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 32,
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
                  justifyContent: 'flex-start',
                  marginBottom: 32,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginRight: 24 },
                  dimensions.width
                )}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'home team'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey800'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 14,
                      letterSpacing: 0.2,
                      lineHeight: 16,
                    }),
                    dimensions.width
                  )}
                >
                  {'Southwest High School'}
                </Text>
              </View>
              {/* View 2 */}
              <View>
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'away team'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Inter_400Regular',
                      fontSize: 14,
                      letterSpacing: 0.2,
                    }),
                    dimensions.width
                  )}
                >
                  {'Washburn High School'}
                </Text>
              </View>
            </View>
            {/* Row 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 32,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginRight: 24, width: 160 },
                  dimensions.width
                )}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'date and time'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Grey600']}
                    name={'Feather/calendar'}
                    size={16}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey800'],
                          fontFamily: 'Inter_400Regular',
                          letterSpacing: 0.2,
                          marginLeft: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Jan. 5 - 8PM'}
                  </Text>
                </View>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth({ width: 160 }, dimensions.width)}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'duration'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Grey600']}
                    name={'MaterialCommunityIcons/clock-time-four-outline'}
                    size={16}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey800'],
                          fontFamily: 'Inter_400Regular',
                          letterSpacing: 0.2,
                          marginLeft: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'150 Minutes'}
                  </Text>
                </View>
              </View>
            </View>
            {/* Row 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 32,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginRight: 24, width: 160 },
                  dimensions.width
                )}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'city'}
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
                  {'Minneapolis'}
                </Text>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth({ width: 160 }, dimensions.width)}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'state'}
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
                  {'Minnesota'}
                </Text>
              </View>
            </View>
            {/* Row 4 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 32,
                },
                dimensions.width
              )}
            >
              <View>
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'address'}
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
                  {'3414 W 47th St. West Gym'}
                </Text>
              </View>
            </View>
            {/* Row 5 */}
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
              <View
                style={StyleSheet.applyWidth(
                  { width: '100%' },
                  dimensions.width
                )}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'home team'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Inter_400Regular',
                      letterSpacing: 0.2,
                    }),
                    dimensions.width
                  )}
                >
                  {'Please arrive 30 minutes before the scheduled game time. '}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Referees and assignor details */}
        <View
          style={StyleSheet.applyWidth(
            { marginBottom: 24, marginTop: 24 },
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
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                letterSpacing: 0.15,
                marginBottom: 16,
                paddingLeft: 20,
                paddingRight: 20,
              }),
              dimensions.width
            )}
          >
            {'Referees and assignor details'}
          </Text>
          {/* Card Container */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: 16,
                paddingBottom: 32,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 32,
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
                  justifyContent: 'flex-start',
                  marginBottom: 32,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginRight: 24, width: 160 },
                  dimensions.width
                )}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'referees'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey800'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 14,
                      letterSpacing: 0.2,
                      lineHeight: 16,
                    }),
                    dimensions.width
                  )}
                >
                  {'3'}
                </Text>
              </View>
              {/* View 2 */}
              <View>
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
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
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        { height: 32, width: 32 }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          fontFamily: 'Inter_400Regular',
                          fontSize: 14,
                          letterSpacing: 0.2,
                          marginLeft: 12,
                        }
                      ),
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
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginRight: 24, width: 160 },
                  dimensions.width
                )}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'contact email'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey800'],
                          fontFamily: 'Inter_400Regular',
                          letterSpacing: 0.2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'organizer@mail.com'}
                  </Text>
                </View>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth({ width: 160 }, dimensions.width)}
              >
                {/* Subtitle */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Grey600'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }),
                    dimensions.width
                  )}
                >
                  {'contact number'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Grey800'],
                          fontFamily: 'Inter_400Regular',
                          letterSpacing: 0.2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'(255) 555-1089'}
                  </Text>
                </View>
              </View>
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
                name={'MaterialCommunityIcons/whistle'}
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
                { alignItems: 'center', alignSelf: 'center', padding: 4 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Grey600']}
                name={'MaterialIcons/attach-money'}
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

export default withTheme(GameDetailsScreen);
