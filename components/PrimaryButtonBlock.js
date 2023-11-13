import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseStagingApi from '../apis/SupabaseStagingApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const PrimaryButtonBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
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
            console.log('Complete ON_PRESS:0 FETCH_REQUEST', { loginResponse });
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
  );
};

export default withTheme(PrimaryButtonBlock);
