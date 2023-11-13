import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseStagingApi from '../apis/SupabaseStagingApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import dropdownOptionsAdapter from '../global-functions/dropdownOptionsAdapter';
import validateBaseString from '../global-functions/validateBaseString';
import validateEmail from '../global-functions/validateEmail';
import { parseBoolean } from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Link,
  Picker,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const RegisterScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const roles_result = (await SupabaseStagingApi.rolesGET(Constants))
          ?.json;
        const result_function_drowpdow = dropdownOptionsAdapter(
          roles_result,
          'name',
          'id'
        );
        setRoles_array_variable(result_function_drowpdow);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [birthdate_variable, setBirthdate_variable] = React.useState('');
  const [confirm_error_var, setConfirm_error_var] = React.useState(true);
  const [confirm_password_variable, setConfirm_password_variable] =
    React.useState('');
  const [email_error_var, setEmail_error_var] = React.useState(true);
  const [email_variable, setEmail_variable] = React.useState('');
  const [first_name_variable, setFirst_name_variable] = React.useState('');
  const [firstname_error_var, setFirstname_error_var] = React.useState(null);
  const [last_name_variable, setLast_name_variable] = React.useState('');
  const [lastname_error_var, setLastname_error_var] = React.useState(null);
  const [password_error_var, setPassword_error_var] = React.useState(
    'password is required'
  );
  const [password_variable, setPassword_variable] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const [roles_array_variable, setRoles_array_variable] = React.useState([]);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [type_account_variable, setType_account_variable] = React.useState('');
  const [typeaccount_error_var, setTypeaccount_error_var] =
    React.useState(true);

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
            alignItems: 'flex-start',
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
              alignSelf: 'auto',
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
            {'Register'}
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
            {'Create your account'}
          </Text>
          {/* form-control name */}
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
              onChangeText={newFirstNameInputValue => {
                try {
                  const valueQGhzxewX = newFirstNameInputValue;
                  setFirst_name_variable(valueQGhzxewX);
                  const first_name_result = valueQGhzxewX;
                } catch (err) {
                  console.error(err);
                }
              }}
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
              value={first_name_variable}
            />
            {/* error firstname text */}
            <>
              {!parseBoolean(firstname_error_var) ? null : (
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
                  {firstname_error_var}
                </Text>
              )}
            </>
          </View>
          {/* form-control type of account */}
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
              {'type of account'}
            </Text>
            {/* type_account_input */}
            <Picker
              autoDismissKeyboard={true}
              dropDownBackgroundColor={theme.colors.background}
              dropDownBorderColor={theme.colors.divider}
              dropDownBorderRadius={8}
              dropDownBorderWidth={1}
              dropDownTextColor={theme.colors.strong}
              iconSize={24}
              leftIconMode={'inset'}
              mode={'native'}
              onValueChange={newTypeAccountInputValue => {
                const pickerValue = newTypeAccountInputValue;
                try {
                  const valueFsy8Jrnm = newTypeAccountInputValue;
                  setType_account_variable(valueFsy8Jrnm);
                  const type_account_result = valueFsy8Jrnm;
                } catch (err) {
                  console.error(err);
                }
              }}
              options={roles_array_variable}
              placeholder={'Select an option'}
              rightIconName={'Entypo/chevron-down'}
              selectedIconColor={theme.colors['Medium']}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgb(245, 245, 245)',
                  borderColor: 'rgba(0, 0, 0, 0)',
                  color: 'rgb(122, 122, 122)',
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                },
                dimensions.width
              )}
              type={'solid'}
              value={pickerValue}
            />
            {/* error type account text */}
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
              {'type of account is required'}
            </Text>
          </View>
          {/* form-control password */}
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
            {/* password_input */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
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
            />
            {/* error password text */}
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
              {password_error_var}
            </Text>
          </View>
          {/* form-control last name */}
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
              {'last name'}
            </Text>
            {/* last_name_input */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newLastNameInputValue => {
                const textInputValue = newLastNameInputValue;
                try {
                  const valuep1QZThci = newLastNameInputValue;
                  setLast_name_variable(valuep1QZThci);
                  const last_name_result = valuep1QZThci;
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
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
              value={textInputValue}
            />
            {/* error lastname text */}
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
              {'last name is required'}
            </Text>
          </View>
          {/* form-control email */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 24, width: '100%' },
              dimensions.width
            )}
          >
            {/* Text email */}
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
            {/* email_input */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newEmailInputValue => {
                try {
                  const value9xQwqCXa = newEmailInputValue;
                  setEmail_variable(value9xQwqCXa);
                  const email_result = value9xQwqCXa;
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors['Medium']}
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
              value={email_variable}
            />
            {/* error email text */}
            <>
              {email_error_var ? null : (
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['System/Error500'],
                      margin: 2,
                    }),
                    dimensions.width
                  )}
                >
                  {'Ups.. this is not a valid email'}
                </Text>
              )}
            </>
          </View>
          {/* form-control password 2 */}
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
              {'repeat password'}
            </Text>
            {/* confirm_password_input */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newConfirmPasswordInputValue => {
                try {
                  const value1n87Lph8 = newConfirmPasswordInputValue;
                  setConfirm_password_variable(value1n87Lph8);
                  const confirm_result = value1n87Lph8;
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
            />
            {/* confirm password error text */}
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
              {'password do not match'}
            </Text>
          </View>
          {/* Button container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                alignSelf: 'flex-end',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* register_button */}
            <Button
              onPress={() => {
                try {
                  const validate_email_result = validateEmail(email_variable);
                  setEmail_error_var(parseBoolean(validate_email_result));
                  const firstname_val_response = validateBaseString(
                    first_name_variable,
                    parseInt(16, 10)
                  );
                  setFirstname_error_var(firstname_val_response);
                  console.log(firstname_error_var);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                  backgroundColor: 'rgb(248, 211, 71)',
                  borderRadius: 100,
                  color: 'rgb(39, 31, 1)',
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  letterSpacing: 1.25,
                  width: 184,
                }),
                dimensions.width
              )}
              title={'Create account'}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', marginTop: 32, width: '100%' },
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
              {'Already have an account? '}
            </Text>
            <Link
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                  color: 'rgb(197, 156, 7)',
                  fontFamily: 'Inter_600SemiBold',
                  letterSpacing: 0.25,
                }),
                dimensions.width
              )}
              title={'Log In'}
            />
          </View>
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

export default withTheme(RegisterScreen);
