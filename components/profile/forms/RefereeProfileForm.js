import { withTheme, Button } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";
import * as GlobalStyles from "../../../GlobalStyles.js";
import * as StyleSheet from "../../../utils/StyleSheet.js";
import InputField from "../../ui/InputField.js";
import InputPhone from "../../ui/InputPhone";
import SelectField from "../../ui/SelectField.js";
import TextArea from "../../ui/TextArea.js";

export const RefereProfileForm = (props) => {
	const { theme } = props;
	const dimensions = useWindowDimensions();

	return (
		<>
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
					Detailed information
				</Text>

				<InputField placeholder="First Name" label="first name" theme={theme} />
				<InputField placeholder="Last Name" label="Last name" theme={theme} />
				<SelectField
					options={[]}
					placeholder={"Select an option"}
					label="Sports"
					theme={theme}
				/>
				<SelectField
					options={[]}
					placeholder={"Select an option"}
					label="State"
					theme={theme}
				/>
				<SelectField
					options={[]}
					placeholder={"Select an option"}
					label="City"
					theme={theme}
				/>

				<InputPhone
					label="Contact Number"
					placeholder="xxx-xxxx"
					onChange={(val) => console.log("el val phone ===>", val)}
					theme={theme}
				/>
				<InputField placeholder="email" label="email" theme={theme} />

				<TextArea
					theme={theme}
					label="experience"
					onChange={(val) => console.log("el val", val)}
				/>

				<Button
					onPress={() => {
						const handler = async () => {
							console.log("Primary button ON_PRESS Start");
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
			{/* Certification container */}
			{/* <View
					style={StyleSheet.applyWidth({ marginBottom: 32 }, dimensions.width)}
					className="my-5 pt-10 "
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
						Certifications
					</Text>
					
					<View
						style={StyleSheet.applyWidth(
							{ marginBottom: 24, width: "100%" },
							dimensions.width
						)}
					>
					
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
							certification
						</Text>
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
					
					<View
						style={StyleSheet.applyWidth(
							{ marginBottom: 24, width: "100%" },
							dimensions.width
						)}
					>
						
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
							certification level
						</Text>
					
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
								Add new certification
							</Text>
						</View>
					</Touchable>
				</View> */}
		</>
	);
};

export default withTheme(RefereProfileForm);
