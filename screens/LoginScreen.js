import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseStagingApi from '../apis/SupabaseStagingApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Link,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [accessToken, setAccessToken] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errorForm, setErrorForm] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(245, 245, 245)',
          justifyContent: 'space-between',
        },
        dimensions.width
      )}
    >
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(255, 255, 255)',
            height: 72,
            justifyContent: 'center',
            marginBottom: 32,
            paddingLeft: 24,
            paddingRight: 24,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={{
            uri: 'https://assets.draftbit.app/apps/awosAT3B/assets/2_4c3n4eTD3W-hDLCNOuS',
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              height: 36,
              width: 36,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0)',
          },
          dimensions.width
        )}
      >
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'flex-start',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 8,
              paddingBottom: 32,
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 32,
              width: 388,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(39, 31, 1)',
                fontFamily: 'Inter_400Regular',
                fontSize: 24,
                marginBottom: 24,
              }),
              dimensions.width
            )}
          >
            {'Log In'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(122, 122, 122)',
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                marginBottom: 32,
              }),
              dimensions.width
            )}
          >
            {'Welcome to Refr Sports'}
          </Text>
          {/* login erro text */}
          <>
            {!errorForm ? null : (
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['System/Error800'],
                    margin: 5,
                    textAlign: 'left',
                  }),
                  dimensions.width
                )}
              >
                {'wrong credentials provied'}
              </Text>
            )}
          </>
          {/* form-control */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 24, width: '100%' },
              dimensions.width
            )}
          >
            {/* Text 3 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: 'rgb(92, 92, 92)',
                  fontFamily: 'Inter_500Medium',
                  fontSize: 10,
                  letterSpacing: 1.5,
                  marginBottom: 8,
                  paddingLeft: 16,
                  textTransform: 'uppercase',
                }),
                dimensions.width
              )}
            >
              {'email'}
            </Text>
            {/* emailLoginInput */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              autoFocus={true}
              changeTextDelay={500}
              keyboardType={'default'}
              onChangeText={newEmailLoginInputValue => {
                console.log('emailLoginInput ON_CHANGE_TEXT Start');
                let error = null;
                try {
                  console.log('Start ON_CHANGE_TEXT:0 SET_VARIABLE');
                  if (newEmailLoginInputValue) {
                    setEmail(newEmailLoginInputValue);
                    console.log('Complete ON_CHANGE_TEXT:0 SET_VARIABLE');
                  } else {
                    console.log(
                      'Skipped ON_CHANGE_TEXT:0 SET_VARIABLE: condition not met'
                    );
                  }
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'emailLoginInput ON_CHANGE_TEXT Complete',
                  error ? { error } : 'no error'
                );
              }}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    backgroundColor: 'rgb(245, 245, 245)',
                    color: 'rgb(122, 122, 122)',
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    paddingBottom: 20,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 20,
                    textTransform: 'none',
                    width: '100%',
                  }
                ),
                dimensions.width
              )}
              value={email}
            />
          </View>
          {/* form-control 2 */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 24, width: '100%' },
              dimensions.width
            )}
          >
            {/* Text 3 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: 'rgb(92, 92, 92)',
                  fontFamily: 'Inter_500Medium',
                  fontSize: 10,
                  letterSpacing: 1.5,
                  marginBottom: 8,
                  paddingLeft: 16,
                  textTransform: 'uppercase',
                }),
                dimensions.width
              )}
            >
              {'password'}
            </Text>
            {/* passwordLoginValue */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newPasswordLoginValueValue => {
                try {
                  setPassword(newPasswordLoginValueValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    backgroundColor: 'rgb(245, 245, 245)',
                    color: 'rgb(122, 122, 122)',
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    paddingBottom: 20,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 20,
                    textTransform: 'none',
                    width: '100%',
                  }
                ),
                dimensions.width
              )}
              value={password}
            />
          </View>
          <Button
            onPress={() => {
              const handler = async () => {
                console.log('Button ON_PRESS Start');
                let error = null;
                try {
                  console.log('Start ON_PRESS:0 FETCH_REQUEST');
                  const loginResponse = (
                    await SupabaseStagingApi.loginPOST(Constants, {
                      emailLoginInput: email,
                      passwordLoginValue: password,
                    })
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
                      await SupabaseStagingApi.getProfileSessionGET(Constants, {
                        user: user_id,
                      })
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

                    const value2mUBrK6x = extractedMeesageError;
                    setErrorForm(value2mUBrK6x);
                    const settedErrorMessage = value2mUBrK6x;
                  }
                  console.log('Complete ON_PRESS:2 IF');
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'Button ON_PRESS Complete',
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
                width: '100%',
              }),
              dimensions.width
            )}
            title={'Log In'}
          />
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 32,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Text 3 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(92, 92, 92)',
                fontFamily: 'Inter_400Regular',
                letterSpacing: 0.25,
                marginRight: 16,
              }),
              dimensions.width
            )}
          >
            {'Don’t have an account?'}
          </Text>
          <Link
            accessible={true}
            allowFontScaling={true}
            onPress={() => {
              try {
                navigation.navigate('RegisterScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                color: 'rgb(197, 156, 7)',
                fontFamily: 'Inter_600SemiBold',
                letterSpacing: 0.25,
              }),
              dimensions.width
            )}
            title={'Create'}
          />
        </View>
      </View>
      {/* Footer */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', paddingBottom: 32, paddingTop: 32 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: 'rgb(92, 92, 92)',
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              letterSpacing: 0.4,
              marginBottom: 16,
            }),
            dimensions.width
          )}
        >
          {'©2023 Refr Sports'}
        </Text>
        <Link
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
              color: 'rgb(197, 156, 7)',
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              letterSpacing: 0.4,
              marginBottom: 16,
            }),
            dimensions.width
          )}
          title={'Privacy Policy'}
        />
        {/* Link 2 */}
        <Link
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
              color: 'rgb(197, 156, 7)',
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              letterSpacing: 0.4,
            }),
            dimensions.width
          )}
          title={'Terms and Conditions'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
