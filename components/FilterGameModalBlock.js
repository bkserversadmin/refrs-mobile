import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseStagingApi from '../apis/SupabaseStagingApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, IconButton, TextInput, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FilterGameModalBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(255, 255, 255)',
          borderRadius: 24,
          padding: 24,
        },
        dimensions.width
      )}
    >
      {/* Row */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 32,
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
              fontSize: 16,
              letterSpacing: 0.25,
            }),
            dimensions.width
          )}
        >
          {'Filter games'}
        </Text>
        <IconButton
          color={theme.colors['Grey600']}
          icon={'AntDesign/close'}
          size={20}
        />
      </View>

      <View>
        {/* form_control */}
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
            {'first name'}
          </Text>
          {/* first_name_input */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            placeholder={'first name'}
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
          />
          {/* error firstname text */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['System/Error500'],
              }),
              dimensions.width
            )}
          >
            {null}
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
              console.log('Complete ON_PRESS:1 EXTRACT_KEY', { accessToken });
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
                const extractedMeesageError = loginResponse?.error_description;
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
            width: '100%',
          }),
          dimensions.width
        )}
        title={'Confirm'}
      />
    </View>
  );
};

export default withTheme(FilterGameModalBlock);
