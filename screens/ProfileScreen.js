import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as SupabaseStagingApi from "../apis/SupabaseStagingApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext.js";
import Images from "../config/Images.js";
import Breakpoints from "../utils/Breakpoints.js";
import * as StyleSheet from "../utils/StyleSheet.js";
import {
	Button,
	Icon,
	NumberInput,
	ScreenContainer,
	TextInput,
	Touchable,
	withTheme,
} from "@draftbit/ui";
import {
	Image,
	ScrollView,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthLayout from "../components/layout/AuthLayout.js";

const ProfileScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;
	const setGlobalVariableValue = GlobalVariables.useSetValue();

	const [numberInputValue, setNumberInputValue] = React.useState("");
	const [textAreaValue, setTextAreaValue] = React.useState("");
	const [textInputValue, setTextInputValue] = React.useState("");

	return (
		<AuthLayout name="Profile" navigation={navigation}>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={"never"}
				showsVerticalScrollIndicator={true}
			>
				{/* Summary container */}
				<View
					style={StyleSheet.applyWidth(
						{ alignContent: "center", alignItems: "center", padding: 20 },
						dimensions.width
					)}
				>
					{/* Row */}
					<View
						style={StyleSheet.applyWidth(
							{ alignItems: "center", flexDirection: "row" },
							dimensions.width
						)}
					>
						<Image
							resizeMode={"cover"}
							source={Images.AvatarSm}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.ImageStyles(theme)["Image"], {
									height: 64,
									width: 64,
								}),
								dimensions.width
							)}
						/>
						<Text
							accessible={true}
							allowFontScaling={true}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
									color: theme.colors["Primary/Yellow900"],
									fontFamily: "Inter_400Regular",
									fontSize: 24,
									marginLeft: 24,
								}),
								dimensions.width
							)}
						>
							{"John Doe"}
						</Text>
					</View>
					{/* Row */}
					<View
						style={StyleSheet.applyWidth(
							{ alignItems: "center", flexDirection: "row", marginTop: 16 },
							dimensions.width
						)}
					>
						{/* Total games */}
						<View
							style={StyleSheet.applyWidth(
								{ alignItems: "center", marginRight: 24 },
								dimensions.width
							)}
						>
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey600"],
										fontFamily: "Inter_400Regular",
										fontSize: 12,
										marginBottom: 12,
									}),
									dimensions.width
								)}
							>
								{"Total games"}
							</Text>
							{/* Text 2 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Primary/Yellow900"],
										fontFamily: "Inter_400Regular",
										fontSize: 20,
										letterSpacing: 0.15,
									}),
									dimensions.width
								)}
							>
								{"14"}
							</Text>
						</View>
						{/* Average per game */}
						<View
							style={StyleSheet.applyWidth(
								{ alignItems: "center" },
								dimensions.width
							)}
						>
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey600"],
										fontFamily: "Inter_400Regular",
										fontSize: 12,
										marginBottom: 12,
									}),
									dimensions.width
								)}
							>
								{"Average pay per game"}
							</Text>
							{/* Text 2 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Primary/Yellow900"],
										fontFamily: "Inter_400Regular",
										fontSize: 20,
										letterSpacing: 0.15,
									}),
									dimensions.width
								)}
							>
								{"$25"}
							</Text>
						</View>
					</View>
				</View>
				{/* Content */}
				<View
					style={StyleSheet.applyWidth(
						{ backgroundColor: "rgb(255, 255, 255)", padding: 20 },
						dimensions.width
					)}
				>
					{/* Row */}
					<View
						style={StyleSheet.applyWidth(
							{
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "flex-start",
								marginBottom: 24,
								paddingBottom: 8,
								paddingTop: 8,
							},
							dimensions.width
						)}
					>
						<Button
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
									backgroundColor: theme.colors["Primary/Yellow400"],
									color: theme.colors["Primary/Yellow900"],
									fontFamily: "System",
									fontWeight: "400",
									letterSpacing: 0.25,
									marginRight: 16,
								}),
								dimensions.width
							)}
							title={"Personal information"}
						/>
						{/* Button 2 */}
						<Button
							onPress={() => {
								try {
									navigation.navigate("ProfilePayoutInformationScreen");
								} catch (err) {
									console.error(err);
								}
							}}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
									backgroundColor: "rgba(0, 0, 0, 0)",
									color: theme.colors["Grey600"],
									fontFamily: "System",
									fontWeight: "400",
									letterSpacing: 0.25,
								}),
								dimensions.width
							)}
							title={"Payout information"}
						/>
					</View>
					{/* Detailed information container */}
					<View>
						<Text
							accessible={true}
							allowFontScaling={true}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
									color: theme.colors["Primary/Yellow900"],
									fontFamily: "Inter_400Regular",
									fontSize: 16,
									letterSpacing: 0.15,
									marginBottom: 20,
								}),
								dimensions.width
							)}
						>
							{"Detailed information"}
						</Text>
						{/* form_control */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"full name"}
							</Text>
							{/* full_name_input */}
							<TextInput
								allowFontScaling={true}
								autoCapitalize={"none"}
								changeTextDelay={500}
								placeholder={"first name"}
								placeholderTextColor={theme.colors["Light"]}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Input"],
										{
											backgroundColor: "rgb(245, 245, 245)",
											color: "rgb(122, 122, 122)",
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
											textTransform: "none",
											width: "100%",
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["System/Error500"],
									}),
									dimensions.width
								)}
							>
								{null}
							</Text>
						</View>
						{/* form_control 2 */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"sports"}
							</Text>
							{/* sports_input */}
							<TextInput
								allowFontScaling={true}
								autoCapitalize={"none"}
								changeTextDelay={500}
								placeholder={"first name"}
								placeholderTextColor={theme.colors["Light"]}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Input"],
										{
											backgroundColor: "rgb(245, 245, 245)",
											color: "rgb(122, 122, 122)",
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
											textTransform: "none",
											width: "100%",
										}
									),
									dimensions.width
								)}
							/>
						</View>
						{/* form_control 3 */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"state"}
							</Text>
							{/* state_input */}
							<TextInput
								allowFontScaling={true}
								autoCapitalize={"none"}
								changeTextDelay={500}
								placeholder={"first name"}
								placeholderTextColor={theme.colors["Light"]}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Input"],
										{
											backgroundColor: "rgb(245, 245, 245)",
											color: "rgb(122, 122, 122)",
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
											textTransform: "none",
											width: "100%",
										}
									),
									dimensions.width
								)}
							/>
						</View>
						{/* form_control 4 */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"city"}
							</Text>
							{/* city_input */}
							<TextInput
								allowFontScaling={true}
								autoCapitalize={"none"}
								changeTextDelay={500}
								placeholder={"first name"}
								placeholderTextColor={theme.colors["Light"]}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Input"],
										{
											backgroundColor: "rgb(245, 245, 245)",
											color: "rgb(122, 122, 122)",
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
											textTransform: "none",
											width: "100%",
										}
									),
									dimensions.width
								)}
							/>
						</View>
						{/* form_control 5 */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"contact number"}
							</Text>
							{/* contact_number_input */}
							<NumberInput
								allowFontScaling={true}
								changeTextDelay={500}
								onChangeText={(newContactNumberInputValue) => {
									const numberInputValue = newContactNumberInputValue;
									try {
										setNumberInputValue(newContactNumberInputValue);
									} catch (err) {
										console.error(err);
									}
								}}
								placeholder={"Enter a number..."}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.NumberInputStyles(theme)["Number Input"],
										{
											backgroundColor: theme.colors["Grey200"],
											color: theme.colors["Grey600"],
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
										}
									),
									dimensions.width
								)}
								value={numberInputValue}
							/>
						</View>
						{/* form_control 6 */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"email"}
							</Text>
							{/* email_input */}
							<TextInput
								allowFontScaling={true}
								autoCapitalize={"none"}
								changeTextDelay={500}
								placeholder={"first name"}
								placeholderTextColor={theme.colors["Light"]}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Input"],
										{
											backgroundColor: "rgb(245, 245, 245)",
											color: "rgb(122, 122, 122)",
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
											textTransform: "none",
											width: "100%",
										}
									),
									dimensions.width
								)}
							/>
						</View>
					</View>
					{/* Certification container */}
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
								StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
									color: theme.colors["Primary/Yellow900"],
									fontFamily: "Inter_400Regular",
									fontSize: 16,
									letterSpacing: 0.15,
									marginBottom: 20,
								}),
								dimensions.width
							)}
						>
							{"Certifications"}
						</Text>
						{/* form_control */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"certification"}
							</Text>
							{/* certification_input */}
							<TextInput
								allowFontScaling={true}
								autoCapitalize={"none"}
								changeTextDelay={500}
								placeholder={"first name"}
								placeholderTextColor={theme.colors["Light"]}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Input"],
										{
											backgroundColor: "rgb(245, 245, 245)",
											color: "rgb(122, 122, 122)",
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
											textTransform: "none",
											width: "100%",
										}
									),
									dimensions.width
								)}
							/>
						</View>
						{/* form_control 2 */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"certification level"}
							</Text>
							{/* certification_level_input */}
							<TextInput
								allowFontScaling={true}
								autoCapitalize={"none"}
								changeTextDelay={500}
								placeholder={"first name"}
								placeholderTextColor={theme.colors["Light"]}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Input"],
										{
											backgroundColor: "rgb(245, 245, 245)",
											color: "rgb(122, 122, 122)",
											fontFamily: "Inter_400Regular",
											fontSize: 16,
											paddingBottom: 20,
											paddingLeft: 16,
											paddingRight: 16,
											paddingTop: 20,
											textTransform: "none",
											width: "100%",
										}
									),
									dimensions.width
								)}
							/>
						</View>

						<Touchable>
							{/* icon and text button */}
							<View
								style={StyleSheet.applyWidth(
									{
										alignItems: "center",
										backgroundColor: theme.colors["Primary/Yellow200"],
										borderRadius: 100,
										flexDirection: "row",
										justifyContent: "center",
										paddingBottom: 14,
										paddingLeft: 24,
										paddingRight: 24,
										paddingTop: 14,
									},
									dimensions.width
								)}
							>
								<Icon
									color={theme.colors["Primary/Yellow900"]}
									name={"MaterialIcons/add-circle"}
									size={16}
								/>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: theme.colors["Primary/Yellow900"],
											fontFamily: "Inter_500Medium",
											fontSize: 16,
											letterSpacing: 1.25,
											marginLeft: 16,
										}),
										dimensions.width
									)}
								>
									{"Add new certification"}
								</Text>
							</View>
						</Touchable>
					</View>
					{/* Experience */}
					<View>
						<Text
							accessible={true}
							allowFontScaling={true}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
									color: theme.colors["Primary/Yellow900"],
									fontFamily: "Inter_400Regular",
									fontSize: 16,
									letterSpacing: 0.15,
									marginBottom: 20,
								}),
								dimensions.width
							)}
						>
							{"Experience"}
						</Text>
						{/* form_control */}
						<View
							style={StyleSheet.applyWidth(
								{ marginBottom: 24, width: "100%" },
								dimensions.width
							)}
						>
							{/* Text 3 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(92, 92, 92)",
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 8,
										paddingLeft: 16,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"certification"}
							</Text>
							{/* experience_textarea */}
							<TextInput
								allowFontScaling={true}
								changeTextDelay={500}
								multiline={true}
								numberOfLines={4}
								onChangeText={(newExperienceTextareaValue) => {
									const textInputValue = newExperienceTextareaValue;
									try {
										setTextAreaValue(newExperienceTextareaValue);
									} catch (err) {
										console.error(err);
									}
								}}
								placeholder={
									"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
								}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.TextInputStyles(theme)["Text Area"],
										{
											borderColor: theme.colors["Grey400"],
											color: theme.colors["Grey600"],
											fontFamily: "Inter_400Regular",
											fontSize: 12,
											lineHeight: 16,
											padding: 10,
										}
									),
									dimensions.width
								)}
								textAlignVertical={"top"}
								value={textAreaValue}
							/>
						</View>
						{/* Primary button */}
						<Button
							onPress={() => {
								const handler = async () => {
									console.log("Primary button ON_PRESS Start");
									let error = null;
									try {
										console.log("Start ON_PRESS:0 FETCH_REQUEST");
										const loginResponse = (
											await SupabaseStagingApi.loginPOST(Constants, {})
										)?.json;
										console.log("Complete ON_PRESS:0 FETCH_REQUEST", {
											loginResponse,
										});
										console.log("Start ON_PRESS:1 EXTRACT_KEY");
										const accessToken = loginResponse?.access_token;
										console.log("Complete ON_PRESS:1 EXTRACT_KEY", {
											accessToken,
										});
										console.log("Start ON_PRESS:2 IF");
										if (accessToken) {
											setGlobalVariableValue({
												key: "supabaseAccessToken",
												value: accessToken + accessToken,
											});
											const user_id = loginResponse?.user.id;
											setGlobalVariableValue({
												key: "user",
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
												key: "user_session",
												value: profileObject,
											});
											const role_id_extracted = profileObject?.roles.id;
											setGlobalVariableValue({
												key: "role_id",
												value: role_id_extracted,
											});
											const profile_id_extracted = profileObject?.id;
											setGlobalVariableValue({
												key: "profile_id",
												value: profile_id_extracted,
											});
											navigation.navigate("DashboardScreen");
										} else {
											const extractedMeesageError =
												loginResponse?.error_description;
										}
										console.log("Complete ON_PRESS:2 IF");
									} catch (err) {
										console.error(err);
										error = err.message ?? err;
									}
									console.log(
										"Primary button ON_PRESS Complete",
										error ? { error } : "no error"
									);
								};
								handler();
							}}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
									backgroundColor: "rgb(248, 211, 71)",
									borderRadius: 100,
									color: "rgb(39, 31, 1)",
									fontFamily: "Inter_500Medium",
									fontSize: 16,
									letterSpacing: 1.25,
									width: "100%",
								}),
								dimensions.width
							)}
							title={"Save changes"}
						/>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</AuthLayout>
	);
};

export default withTheme(ProfileScreen);
