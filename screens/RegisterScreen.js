import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as PlatformStripeApi from '../apis/PlatformStripeApi.js';
import * as SupabaseStagingApi from '../apis/SupabaseStagingApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import constructFullName from '../global-functions/constructFullName';
import dropdownOptionsAdapter from '../global-functions/dropdownOptionsAdapter';
import passwordValMessage from '../global-functions/passwordValMessage';
import passwordsMatch from '../global-functions/passwordsMatch';
import validateBaseString from '../global-functions/validateBaseString';
import validateEmail from '../global-functions/validateEmail';
import validateSelect from '../global-functions/validateSelect';
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
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  // reset screen variable to initial value if needed

  // validate signup form if all is valid can continue to create request
  const validateRegisterForm = (
    email,
    password,
    first_name,
    last_name,
    type_account,
    confirm_password
  ) => {
    console.log(
      'email ',
      email,
      'password',
      password,
      'first_name',
      first_name,
      'last_name',
      last_name,
      'type_account',
      type_account,
      'confirm',
      confirm_password
    );

    // email  true password null first_name null last_name null type_account true confirm false
    if (
      !email ||
      password ||
      first_name ||
      last_name ||
      !type_account ||
      !confirm_password
    ) {
      return false;
    }

    return true;
  };

  // validates if role is an assignor, will return true if succeeded
  const isAssignor = role_id => {
    if (role_id === 1) {
      return true;
    }

    return false;
  };

  // validates if role is a referee, will return true if succeeded
  const isReferee = role_id => {
    if (role_id === 3) {
      return true;
    }

    return false;
  };

  // validates if role is a sport organization, will return true if succeeded
  const isOrganization = role_id => {
    if (role_id === 2) {
      return true;
    }

    return false;
  };

  const supabaseStagingUpdateProfileAfterSignupPATCH =
    SupabaseStagingApi.useUpdateProfileAfterSignupPATCH();
  const supabaseStagingCreateCustomerPOST =
    SupabaseStagingApi.useCreateCustomerPOST();
  const platformStripeCreateCustomerPOST =
    PlatformStripeApi.useCreateCustomerPOST();

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
  const [is_submitting, setIs_submitting] = React.useState(false);
  const [last_name_variable, setLast_name_variable] = React.useState('');
  const [lastname_error_var, setLastname_error_var] = React.useState(null);
  const [password_error_var, setPassword_error_var] = React.useState(null);
  const [password_variable, setPassword_variable] = React.useState('');
  const [roles_array_variable, setRoles_array_variable] = React.useState([]);
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
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'never'}
          showsVerticalScrollIndicator={true}
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
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          { color: theme.colors['System/Error500'] }
                        ),
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
                  value={type_account_variable}
                />
                {/* error type account text */}
                <>
                  {typeaccount_error_var ? null : (
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          { color: theme.colors['System/Error500'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'type of account is required'}
                    </Text>
                  )}
                </>
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
                  onChangeText={newPasswordInputValue => {
                    try {
                      setPassword_variable(newPasswordInputValue);
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
                {/* error password text */}
                <>
                  {!password_error_var ? null : (
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          { color: theme.colors['System/Error500'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {password_error_var}
                    </Text>
                  )}
                </>
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
                  value={last_name_variable}
                />
                {/* error lastname text */}
                <>
                  {!lastname_error_var ? null : (
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          { color: theme.colors['System/Error500'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {lastname_error_var}
                    </Text>
                  )}
                </>
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
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          { color: theme.colors['System/Error500'], margin: 2 }
                        ),
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
                <>
                  {parseBoolean(confirm_error_var) ? null : (
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          { color: theme.colors['System/Error500'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'password do not match'}
                    </Text>
                  )}
                </>
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
                  disabled={parseBoolean(is_submitting)}
                  loading={parseBoolean(is_submitting)}
                  onPress={() => {
                    const handler = async () => {
                      try {
                        setIs_submitting(true);
                        const validate_email_result =
                          validateEmail(email_variable);
                        setEmail_error_var(parseBoolean(validate_email_result));
                        const firstname_val_response = validateBaseString(
                          first_name_variable,
                          parseInt(16, 10)
                        );
                        setFirstname_error_var(firstname_val_response);
                        const roles_val_result = validateSelect(
                          type_account_variable
                        );
                        setTypeaccount_error_var(roles_val_result);
                        const lastname_val_result = validateBaseString(
                          last_name_variable,
                          16
                        );
                        setLastname_error_var(lastname_val_result);
                        const password_mess_error_result =
                          passwordValMessage(password_variable);
                        setPassword_error_var(password_mess_error_result);
                        const match_val_result = passwordsMatch(
                          password_variable,
                          confirm_password_variable
                        );
                        setConfirm_error_var(match_val_result);
                        const signup_form_val = validateRegisterForm(
                          email_error_var,
                          password_mess_error_result,
                          firstname_error_var,
                          lastname_error_var,
                          typeaccount_error_var,
                          confirm_error_var
                        );
                        if (signup_form_val) {
                          console.log(signup_form_val, 'si hago el request');
                          const register_result = (
                            await SupabaseStagingApi.registerPOST(Constants, {
                              email_body_variable:
                                email_variable?.toLowerCase(),
                              password_body_variable: password_variable,
                            })
                          )?.json;
                          const extracted_user_id = (() => {
                            if (register_result) {
                              return register_result?.id;
                            }
                          })();
                          console.log(
                            'DESPUES DEL REGISTER REQUEST ====>',
                            extracted_user_id
                          );
                          if (extracted_user_id) {
                            const update_profile_result = (
                              await supabaseStagingUpdateProfileAfterSignupPATCH.mutateAsync(
                                {
                                  firstname_body: first_name_variable,
                                  lastname_body: last_name_variable,
                                  role_body: 1,
                                  user_id: extracted_user_id,
                                }
                              )
                            )?.json;
                            const full_name_result = constructFullName(
                              first_name_variable,
                              last_name_variable
                            );
                            console.log(
                              'RESULTADO DEL UPDATE PROFILE AFTER SIGNUP',
                              update_profile_result
                            );
                            const is_organization_result = isOrganization(
                              parseInt(type_account_variable, 10)
                            );
                            if (is_organization_result) {
                              console.log('ES UNA ORGANIZACION');
                              const customer_stripe_result = (
                                await platformStripeCreateCustomerPOST.mutateAsync(
                                  {
                                    desc_customer_body:
                                      full_name_result +
                                      ' (Sport Organization)',
                                    email_customer_body: email_variable,
                                    name_customer_body: full_name_result,
                                  }
                                )
                              )?.json;
                              console.log(
                                'EL REQUEST CUSTOMER STRIPE',
                                customer_stripe_result
                              );
                              const extracted_customer_id =
                                customer_stripe_result?.customer.id;
                              const profile_id_response = (
                                await SupabaseStagingApi.getProfileIdForSignupGET(
                                  Constants,
                                  { user_id_input: extracted_user_id }
                                )
                              )?.json;
                              const extracted_profile_id =
                                profile_id_response?.[0].id;
                              if (extracted_customer_id) {
                                const supabase_customer_result = (
                                  await supabaseStagingCreateCustomerPOST.mutateAsync(
                                    {
                                      profile_id_body: extracted_profile_id,
                                      stripe_cus_body: extracted_customer_id,
                                      user_id_body: extracted_user_id,
                                    }
                                  )
                                )?.json;
                              } else {
                              }
                            } else {
                              console.log('NO ES UNA ORGANIZACION');
                            }
                          } else {
                            console.log('FALLO EL EXTRACTED USER ID');
                          }
                        } else {
                          console.log('dio error algo');
                        }

                        setIs_submitting(false);
                      } catch (err) {
                        console.error(err);
                      }
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
                        width: 184,
                      }
                    ),
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
        </KeyboardAwareScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RegisterScreen);
