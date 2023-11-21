import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as SupabaseStagingApi from "../apis/SupabaseStagingApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext";
import Images from "../config/Images";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import {
	Button,
	Icon,
	IconButton,
	MultiSelectPicker,
	ScreenContainer,
	Shadow,
	Slider,
	TextInput,
	Touchable,
	withTheme,
} from "@draftbit/ui";
import { useIsFocused } from "@react-navigation/native";
import {
	Image,
	ScrollView,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import AuthLayout from "../components/layout/AuthLayout.js";

const MyGamesScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;
	const setGlobalVariableValue = GlobalVariables.useSetValue();

	const isFocused = useIsFocused();
	React.useEffect(() => {
		const handler = async () => {
			console.log("Screen ON_SCREEN_FOCUS Start");
			let error = null;
			try {
				if (!isFocused) {
					return;
				}
				console.log("Start ON_SCREEN_FOCUS:0 EXTRACT_KEY");
				const profile_id_extract = Constants["user_session"]?.id;
				console.log("Complete ON_SCREEN_FOCUS:0 EXTRACT_KEY", {
					profile_id_extract,
				});
				console.log("Start ON_SCREEN_FOCUS:1 FETCH_REQUEST");
				const games = (
					await SupabaseStagingApi.getGamesAssignorGET(Constants, {
						profile_id: profile_id_extract,
					})
				)?.json;
				console.log("Complete ON_SCREEN_FOCUS:1 FETCH_REQUEST", { games });
				console.log("Start ON_SCREEN_FOCUS:2 CONSOLE_LOG");
				console.log(games, profile_id_extract);
				console.log("Complete ON_SCREEN_FOCUS:2 CONSOLE_LOG");
			} catch (err) {
				console.error(err);
				error = err.message ?? err;
			}
			console.log(
				"Screen ON_SCREEN_FOCUS Complete",
				error ? { error } : "no error"
			);
		};
		handler();
	}, [isFocused]);
	const [dsiplayModal, setDsiplayModal] = React.useState(false);
	const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
		[]
	);
	const [pickerValue, setPickerValue] = React.useState(undefined);
	const [slider2Value, setSlider2Value] = React.useState(0);
	const [sliderValue, setSliderValue] = React.useState(0);
	const [textInputValue, setTextInputValue] = React.useState("");

	return (
		<AuthLayout name="Dashboard" navigation={navigation}>
			{/* Welcome */}
			<View
				style={StyleSheet.applyWidth(
					{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: "rgba(245, 245, 245, 0)",
						flexDirection: "row",
						height: 64,
						justifyContent: "space-between",
						paddingBottom: 12,
						paddingLeft: 16,
						paddingRight: 16,
						paddingTop: 12,
						width: "100%",
					},
					dimensions.width
				)}
			>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
							color: "rgb(61, 61, 61)",
							fontFamily: "Inter_500Medium",
							fontSize: 20,
							letterSpacing: 0.15,
						}),
						dimensions.width
					)}
				>
					{"Welcome John"}
				</Text>
				<Button
					icon={"Feather/sliders"}
					onPress={() => {
						try {
							setGlobalVariableValue({
								key: "visible",
								value: true,
							});
						} catch (err) {
							console.error(err);
						}
					}}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
							backgroundColor: "rgb(235, 235, 235)",
							borderColor: "rgb(201, 33, 33)",
							borderRadius: 100,
							color: "rgb(61, 61, 61)",
							fontFamily: "Inter_500Medium",
							fontSize: 16,
							letterSpacing: 1.25,
						}),
						dimensions.width
					)}
					title={"Filters"}
				/>
			</View>
			{/* Search */}
			<View
				style={StyleSheet.applyWidth(
					{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: "rgba(81, 71, 71, 0)",
						flexDirection: "row",
						height: 64,
						justifyContent: "space-between",
						paddingBottom: 12,
						paddingLeft: 16,
						paddingRight: 16,
						paddingTop: 12,
						width: "100%",
					},
					dimensions.width
				)}
			>
				<TextInput
					allowFontScaling={true}
					autoCapitalize={"none"}
					changeTextDelay={500}
					onChangeText={(newTextInputValue) => {
						const textInputValue = newTextInputValue;
						try {
							setTextInputValue(newTextInputValue);
						} catch (err) {
							console.error(err);
						}
					}}
					placeholder={"Enter a value..."}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(
							GlobalStyles.TextInputStyles(theme)["Text Input"],
							{
								backgroundColor: "rgb(255, 255, 255)",
								fontFamily: "Inter_400Regular",
								letterSpacing: 0.25,
								paddingBottom: 15,
								paddingLeft: 12,
								paddingRight: 16,
								paddingTop: 15,
								width: "100%",
							}
						),
						dimensions.width
					)}
					value={textInputValue}
				/>
			</View>
			{/* Upcoming Games Content */}
			<View>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
							color: "rgb(61, 61, 61)",
							fontFamily: "Inter_400Regular",
							fontSize: 16,
							letterSpacing: 0.15,
							padding: 16,
						}),
						dimensions.width
					)}
				>
					{"Upcoming Game Schedule"}
				</Text>
				{/* Container */}
				<View
					style={StyleSheet.applyWidth(
						{
							backgroundColor: "rgb(255, 255, 255)",
							borderRadius: 8,
							padding: 16,
							width: "100%",
						},
						dimensions.width
					)}
				>
					<Touchable
						onPress={() => {
							try {
								navigation.navigate("GameDetailsScreen");
							} catch (err) {
								console.error(err);
							}
						}}
					>
						{/* GameCard */}
						<View
							style={StyleSheet.applyWidth(
								{
									backgroundColor: "rgb(253, 241, 196)",
									borderColor: "rgb(248, 211, 71)",
									borderRadius: 8,
									borderWidth: 1,
									marginBottom: 8,
									padding: 15,
								},
								dimensions.width
							)}
						>
							{/* Row */}
							<View
								style={StyleSheet.applyWidth(
									{
										alignItems: "center",
										flexDirection: "row",
										justifyContent: "space-between",
										marginBottom: 12,
									},
									dimensions.width
								)}
							>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											fontFamily: "Inter_500Medium",
											fontSize: 16,
											letterSpacing: 0.2,
										}),
										dimensions.width
									)}
								>
									{"Linden Vs Pershing"}
								</Text>

								<View
									style={StyleSheet.applyWidth(
										{ alignItems: "center", flexDirection: "row" },
										dimensions.width
									)}
								>
									{/* Number */}
									<View
										style={StyleSheet.applyWidth(
											{
												backgroundColor: "rgb(245, 245, 245)",
												borderRadius: 8,
												marginRight: 16,
												padding: 8,
											},
											dimensions.width
										)}
									>
										<Text
											accessible={true}
											allowFontScaling={true}
											style={StyleSheet.applyWidth(
												StyleSheet.compose(
													GlobalStyles.TextStyles(theme)["Text"],
													{ fontFamily: "Inter_600SemiBold", fontSize: 10 }
												),
												dimensions.width
											)}
										>
											{"#231"}
										</Text>
									</View>
									<Icon name={"Entypo/dots-three-vertical"} size={24} />
								</View>
							</View>
							{/* Row */}
							<View
								style={StyleSheet.applyWidth(
									{
										alignItems: "center",
										flexDirection: "row",
										justifyContent: "space-between",
									},
									dimensions.width
								)}
							>
								{/* Value */}
								<View
									style={StyleSheet.applyWidth(
										{
											backgroundColor: "rgb(235, 255, 255)",
											borderRadius: 8,
											marginRight: 16,
											padding: 8,
										},
										dimensions.width
									)}
								>
									<Text
										accessible={true}
										allowFontScaling={true}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.TextStyles(theme)["Text"],
												{
													color: "rgb(0, 61, 61)",
													fontFamily: "Inter_600SemiBold",
													fontSize: 12,
												}
											),
											dimensions.width
										)}
									>
										{"#231"}
									</Text>
								</View>
								{/* Date */}
								<View
									style={StyleSheet.applyWidth(
										{ alignItems: "center", flexDirection: "row" },
										dimensions.width
									)}
								>
									<Icon
										name={"MaterialCommunityIcons/calendar-blank"}
										size={24}
										style={StyleSheet.applyWidth(
											{
												backgroundColor: "rgba(39, 31, 1, 0)",
												marginRight: 8,
											},
											dimensions.width
										)}
									/>
									<Text
										accessible={true}
										allowFontScaling={true}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.TextStyles(theme)["Text"],
												{
													color: "rgb(39, 31, 1)",
													fontFamily: "Inter_400Regular",
													fontSize: 12,
													letterSpacing: 0.4,
												}
											),
											dimensions.width
										)}
									>
										{"May 8th - 8:00 PM "}
									</Text>
								</View>
								{/* Location */}
								<View
									style={StyleSheet.applyWidth(
										{ alignItems: "center", flexDirection: "row" },
										dimensions.width
									)}
								>
									<Icon
										name={"Ionicons/location-sharp"}
										size={24}
										style={StyleSheet.applyWidth(
											{
												backgroundColor: "rgba(39, 31, 1, 0)",
												marginRight: 8,
											},
											dimensions.width
										)}
									/>
									<Text
										accessible={true}
										allowFontScaling={true}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.TextStyles(theme)["Text"],
												{
													color: "rgb(39, 31, 1)",
													fontFamily: "Inter_400Regular",
													fontSize: 12,
													letterSpacing: 0.4,
												}
											),
											dimensions.width
										)}
									>
										{"PP"}
									</Text>
								</View>
								{/* Price */}
								<View
									style={StyleSheet.applyWidth(
										{ alignItems: "center", flexDirection: "row" },
										dimensions.width
									)}
								>
									<Text
										accessible={true}
										allowFontScaling={true}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.TextStyles(theme)["Text"],
												{
													color: "rgb(39, 31, 1)",
													fontFamily: "Inter_700Bold",
													fontSize: 12,
													letterSpacing: 0.4,
													paddingLeft: 16,
												}
											),
											dimensions.width
										)}
									>
										{"$35"}
									</Text>
								</View>
							</View>
						</View>
					</Touchable>
					{/* GameCardWhite */}
					<View
						style={StyleSheet.applyWidth(
							{
								backgroundColor: "rgb(255, 255, 255)",
								borderColor: "rgb(235, 235, 235)",
								borderRadius: 8,
								borderWidth: 1,
								marginBottom: 8,
								padding: 15,
							},
							dimensions.width
						)}
					>
						{/* Row */}
						<View
							style={StyleSheet.applyWidth(
								{
									alignItems: "center",
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: 12,
								},
								dimensions.width
							)}
						>
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										fontFamily: "Inter_500Medium",
										fontSize: 16,
										letterSpacing: 0.2,
									}),
									dimensions.width
								)}
							>
								{"Linden Vs Pershing"}
							</Text>

							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								{/* Number */}
								<View
									style={StyleSheet.applyWidth(
										{
											backgroundColor: "rgb(245, 245, 245)",
											borderRadius: 8,
											marginRight: 16,
											padding: 8,
										},
										dimensions.width
									)}
								>
									<Text
										accessible={true}
										allowFontScaling={true}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.TextStyles(theme)["Text"],
												{ fontFamily: "Inter_600SemiBold", fontSize: 10 }
											),
											dimensions.width
										)}
									>
										{"#231"}
									</Text>
								</View>
								<Icon name={"Entypo/dots-three-vertical"} size={24} />
							</View>
						</View>
						{/* Row */}
						<View
							style={StyleSheet.applyWidth(
								{
									alignItems: "center",
									flexDirection: "row",
									justifyContent: "space-between",
								},
								dimensions.width
							)}
						>
							{/* Value */}
							<View
								style={StyleSheet.applyWidth(
									{
										backgroundColor: "rgb(235, 255, 255)",
										borderRadius: 8,
										marginRight: 16,
										padding: 8,
									},
									dimensions.width
								)}
							>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(0, 61, 61)",
											fontFamily: "Inter_600SemiBold",
											fontSize: 12,
										}),
										dimensions.width
									)}
								>
									{"#231"}
								</Text>
							</View>
							{/* Date */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Icon
									name={"MaterialCommunityIcons/calendar-blank"}
									size={24}
									style={StyleSheet.applyWidth(
										{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
										dimensions.width
									)}
								/>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(39, 31, 1)",
											fontFamily: "Inter_400Regular",
											fontSize: 12,
											letterSpacing: 0.4,
										}),
										dimensions.width
									)}
								>
									{"May 8th - 8:00 PM "}
								</Text>
							</View>
							{/* Location */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Icon
									name={"Ionicons/location-sharp"}
									size={24}
									style={StyleSheet.applyWidth(
										{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
										dimensions.width
									)}
								/>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(39, 31, 1)",
											fontFamily: "Inter_400Regular",
											fontSize: 12,
											letterSpacing: 0.4,
										}),
										dimensions.width
									)}
								>
									{"PP"}
								</Text>
							</View>
							{/* Price */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(39, 31, 1)",
											fontFamily: "Inter_700Bold",
											fontSize: 12,
											letterSpacing: 0.4,
											paddingLeft: 16,
										}),
										dimensions.width
									)}
								>
									{"$35"}
								</Text>
							</View>
						</View>
					</View>
					{/* GameCardWhite 2 */}
					<View
						style={StyleSheet.applyWidth(
							{
								backgroundColor: "rgb(255, 255, 255)",
								borderColor: "rgb(235, 235, 235)",
								borderRadius: 8,
								borderWidth: 1,
								marginBottom: 8,
								padding: 15,
							},
							dimensions.width
						)}
					>
						{/* Row */}
						<View
							style={StyleSheet.applyWidth(
								{
									alignItems: "center",
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: 12,
								},
								dimensions.width
							)}
						>
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										fontFamily: "Inter_500Medium",
										fontSize: 16,
										letterSpacing: 0.2,
									}),
									dimensions.width
								)}
							>
								{"Linden Vs Pershing"}
							</Text>

							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								{/* Number */}
								<View
									style={StyleSheet.applyWidth(
										{
											backgroundColor: "rgb(245, 245, 245)",
											borderRadius: 8,
											marginRight: 16,
											padding: 8,
										},
										dimensions.width
									)}
								>
									<Text
										accessible={true}
										allowFontScaling={true}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.TextStyles(theme)["Text"],
												{ fontFamily: "Inter_600SemiBold", fontSize: 10 }
											),
											dimensions.width
										)}
									>
										{"#231"}
									</Text>
								</View>
								<Icon name={"Entypo/dots-three-vertical"} size={24} />
							</View>
						</View>
						{/* Row */}
						<View
							style={StyleSheet.applyWidth(
								{
									alignItems: "center",
									flexDirection: "row",
									justifyContent: "space-between",
								},
								dimensions.width
							)}
						>
							{/* Value */}
							<View
								style={StyleSheet.applyWidth(
									{
										backgroundColor: "rgb(235, 255, 255)",
										borderRadius: 8,
										marginRight: 16,
										padding: 8,
									},
									dimensions.width
								)}
							>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(0, 61, 61)",
											fontFamily: "Inter_600SemiBold",
											fontSize: 12,
										}),
										dimensions.width
									)}
								>
									{"#231"}
								</Text>
							</View>
							{/* Date */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Icon
									name={"MaterialCommunityIcons/calendar-blank"}
									size={24}
									style={StyleSheet.applyWidth(
										{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
										dimensions.width
									)}
								/>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(39, 31, 1)",
											fontFamily: "Inter_400Regular",
											fontSize: 12,
											letterSpacing: 0.4,
										}),
										dimensions.width
									)}
								>
									{"May 8th - 8:00 PM "}
								</Text>
							</View>
							{/* Location */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Icon
									name={"Ionicons/location-sharp"}
									size={24}
									style={StyleSheet.applyWidth(
										{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
										dimensions.width
									)}
								/>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(39, 31, 1)",
											fontFamily: "Inter_400Regular",
											fontSize: 12,
											letterSpacing: 0.4,
										}),
										dimensions.width
									)}
								>
									{"PP"}
								</Text>
							</View>
							{/* Price */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: "rgb(39, 31, 1)",
											fontFamily: "Inter_700Bold",
											fontSize: 12,
											letterSpacing: 0.4,
											paddingLeft: 16,
										}),
										dimensions.width
									)}
								>
									{"$35"}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			{/* Modal Fiter Game Referee */}
			<>
				{!Constants["visible"] ? null : (
					<View
						style={StyleSheet.applyWidth(
							{ marginTop: 150, position: "absolute", width: "100%" },
							dimensions.width
						)}
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
							style={StyleSheet.applyWidth({ width: "100%" }, dimensions.width)}
						>
							{/* Filter Game Modal */}
							<View
								style={StyleSheet.applyWidth(
									{
										alignContent: "flex-start",
										alignItems: "stretch",
										alignSelf: "auto",
										backgroundColor: "rgb(255, 255, 255)",
										borderRadius: 24,
										padding: 24,
										position: "relative",
									},
									dimensions.width
								)}
							>
								{/* Row */}
								<View
									style={StyleSheet.applyWidth(
										{
											alignItems: "center",
											backgroundColor: "rgb(255, 255, 255)",
											flexDirection: "row",
											justifyContent: "space-between",
											marginBottom: 32,
										},
										dimensions.width
									)}
								>
									<Text
										accessible={true}
										allowFontScaling={true}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.TextStyles(theme)["Text"],
												{
													color: theme.colors["Grey600"],
													fontFamily: "Inter_400Regular",
													fontSize: 16,
													letterSpacing: 0.25,
												}
											),
											dimensions.width
										)}
									>
										{"Filter games"}
									</Text>
									<IconButton
										color={theme.colors["Grey600"]}
										icon={"AntDesign/close"}
										onPress={() => {
											try {
												setGlobalVariableValue({
													key: "visible",
													value: false,
												});
											} catch (err) {
												console.error(err);
											}
										}}
										size={20}
									/>
								</View>

								<View
									style={StyleSheet.applyWidth(
										{ alignContent: "flex-end" },
										dimensions.width
									)}
								>
									{/* form_control */}
									<View
										style={StyleSheet.applyWidth(
											{ marginBottom: 24, width: "100%" },
											dimensions.width
										)}
									>
										{/* Label */}
										<Text
											accessible={true}
											allowFontScaling={true}
											style={StyleSheet.applyWidth(
												StyleSheet.compose(
													GlobalStyles.TextStyles(theme)["Text"],
													{
														color: "rgb(92, 92, 92)",
														fontFamily: "Inter_500Medium",
														fontSize: 10,
														letterSpacing: 1.5,
														marginBottom: 8,
														paddingLeft: 16,
														textTransform: "uppercase",
													}
												),
												dimensions.width
											)}
										>
											{"Other filters"}
										</Text>
										{/* state_multi_select_picker */}
										<MultiSelectPicker
											autoDismissKeyboard={true}
											dropDownBackgroundColor={theme.colors.background}
											dropDownBorderColor={theme.colors.divider}
											dropDownBorderRadius={8}
											dropDownBorderWidth={1}
											dropDownTextColor={theme.colors.strong}
											iconSize={24}
											leftIconMode={"inset"}
											onValueChange={(newStateMultiSelectPickerValue) => {
												const pickerValue = newStateMultiSelectPickerValue;
												try {
													setMultiSelectPickerValue(
														newStateMultiSelectPickerValue
													);
												} catch (err) {
													console.error(err);
												}
											}}
											placeholder={"State"}
											rightIconName={"Entypo/chevron-small-down"}
											selectedIconColor={theme.colors.strong}
											selectedIconName={"Feather/check"}
											selectedIconSize={20}
											style={StyleSheet.applyWidth(
												{
													backgroundColor: theme.colors["Grey200"],
													borderRadius: 8,
													marginBottom: 16,
												},
												dimensions.width
											)}
											type={"solid"}
											value={multiSelectPickerValue}
										/>
										{/* city_multi_select_picker */}
										<MultiSelectPicker
											autoDismissKeyboard={true}
											dropDownBackgroundColor={theme.colors.background}
											dropDownBorderColor={theme.colors.divider}
											dropDownBorderRadius={8}
											dropDownBorderWidth={1}
											dropDownTextColor={theme.colors.strong}
											iconSize={24}
											leftIconMode={"inset"}
											onValueChange={(newCityMultiSelectPickerValue) => {
												const pickerValue = newCityMultiSelectPickerValue;
												try {
													setMultiSelectPickerValue(
														newCityMultiSelectPickerValue
													);
												} catch (err) {
													console.error(err);
												}
											}}
											placeholder={"City"}
											rightIconName={"Entypo/chevron-small-down"}
											selectedIconColor={theme.colors.strong}
											selectedIconName={"Feather/check"}
											selectedIconSize={20}
											style={StyleSheet.applyWidth(
												{
													backgroundColor: theme.colors["Grey200"],
													borderRadius: 8,
													marginBottom: 16,
												},
												dimensions.width
											)}
											type={"solid"}
											value={multiSelectPickerValue}
										/>
										{/* sport_multi_select_picker */}
										<MultiSelectPicker
											autoDismissKeyboard={true}
											dropDownBackgroundColor={theme.colors.background}
											dropDownBorderColor={theme.colors.divider}
											dropDownBorderRadius={8}
											dropDownBorderWidth={1}
											dropDownTextColor={theme.colors.strong}
											iconSize={24}
											leftIconMode={"inset"}
											onValueChange={(newSportMultiSelectPickerValue) => {
												const pickerValue = newSportMultiSelectPickerValue;
												try {
													setMultiSelectPickerValue(
														newSportMultiSelectPickerValue
													);
												} catch (err) {
													console.error(err);
												}
											}}
											placeholder={"Sport"}
											rightIconName={"Entypo/chevron-small-down"}
											selectedIconColor={theme.colors.strong}
											selectedIconName={"Feather/check"}
											selectedIconSize={20}
											style={StyleSheet.applyWidth(
												{
													backgroundColor: theme.colors["Grey200"],
													borderRadius: 8,
													marginBottom: 16,
												},
												dimensions.width
											)}
											type={"solid"}
											value={multiSelectPickerValue}
										/>
										{/* level_multi_select_picker */}
										<MultiSelectPicker
											autoDismissKeyboard={true}
											dropDownBackgroundColor={theme.colors.background}
											dropDownBorderColor={theme.colors.divider}
											dropDownBorderRadius={8}
											dropDownBorderWidth={1}
											dropDownTextColor={theme.colors.strong}
											iconSize={24}
											leftIconMode={"inset"}
											onValueChange={(newLevelMultiSelectPickerValue) => {
												const pickerValue = newLevelMultiSelectPickerValue;
												try {
													setMultiSelectPickerValue(
														newLevelMultiSelectPickerValue
													);
												} catch (err) {
													console.error(err);
												}
											}}
											placeholder={"Level"}
											rightIconName={"Entypo/chevron-small-down"}
											selectedIconColor={theme.colors.strong}
											selectedIconName={"Feather/check"}
											selectedIconSize={20}
											style={StyleSheet.applyWidth(
												{
													backgroundColor: theme.colors["Grey200"],
													borderRadius: 8,
												},
												dimensions.width
											)}
											type={"solid"}
											value={multiSelectPickerValue}
										/>
									</View>

									<View
										style={StyleSheet.applyWidth(
											{ marginBottom: 24 },
											dimensions.width
										)}
									>
										{/* Label */}
										<Text
											accessible={true}
											allowFontScaling={true}
											style={StyleSheet.applyWidth(
												StyleSheet.compose(
													GlobalStyles.TextStyles(theme)["Text"],
													{
														color: "rgb(92, 92, 92)",
														fontFamily: "Inter_500Medium",
														fontSize: 10,
														letterSpacing: 1.5,
														marginBottom: 8,
														paddingLeft: 16,
														textTransform: "uppercase",
													}
												),
												dimensions.width
											)}
										>
											{"minimum compensation"}
										</Text>
										<Slider
											maximumTrackTintColor={theme.colors["Grey400"]}
											minimumTrackTintColor={theme.colors["Primary/Yellow400"]}
											onValueChange={(newSliderValue) => {
												const sliderValue = newSliderValue;
												try {
													setSliderValue(newSliderValue);
												} catch (err) {
													console.error(err);
												}
											}}
											style={StyleSheet.applyWidth(
												GlobalStyles.SliderStyles(theme)["Slider"],
												dimensions.width
											)}
											thumbTintColor={theme.colors["Primary/Yellow400"]}
											value={sliderValue}
										/>
									</View>
								</View>
								{/* Button container */}
								<View
									style={StyleSheet.applyWidth(
										{
											alignContent: "flex-end",
											alignItems: "flex-end",
											alignSelf: "auto",
											width: "100%",
										},
										dimensions.width
									)}
								>
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
														const profileObjectVariable =
															setGlobalVariableValue({
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
											StyleSheet.compose(
												GlobalStyles.ButtonStyles(theme)["Button"],
												{
													backgroundColor: "rgb(248, 211, 71)",
													borderRadius: 100,
													color: "rgb(39, 31, 1)",
													fontFamily: "Inter_500Medium",
													fontSize: 16,
													letterSpacing: 1.25,
													width: 120,
												}
											),
											dimensions.width
										)}
										title={"Confirm"}
									/>
								</View>
							</View>
						</Shadow>
					</View>
				)}
			</>
		</AuthLayout>
	);
};

export default withTheme(MyGamesScreen);
