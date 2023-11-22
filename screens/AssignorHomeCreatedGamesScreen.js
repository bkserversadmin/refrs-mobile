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

const AssignorHomeCreatedGamesScreen = (props) => {
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
	const [pickerValue, setPickerValue] = React.useState(undefined);
	const [textInputValue, setTextInputValue] = React.useState("");
	const [textInputValue2, setTextInputValue2] = React.useState("");

	return (
		<ScreenContainer
			hasSafeArea={false}
			scrollable={false}
			style={StyleSheet.applyWidth(
				{ backgroundColor: "rgb(245, 245, 245)" },
				dimensions.width
			)}
		>
			{/* Header */}
			<View
				style={StyleSheet.applyWidth(
					{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: "rgb(61, 61, 61)",
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
							color: "rgb(255, 255, 255)",
							fontFamily: "Inter_500Medium",
							fontSize: 20,
							letterSpacing: 0.15,
						}),
						dimensions.width
					)}
				>
					{"My Games"}
				</Text>

				<Touchable
					onPress={() => {
						try {
							navigation.navigate("NotificationsScreen");
						} catch (err) {
							console.error(err);
						}
					}}
				>
					{/* notification container */}
					<View
						style={StyleSheet.applyWidth(
							{
								alignContent: "center",
								alignItems: "center",
								alignSelf: "center",
								backgroundColor: "rgb(255, 255, 255)",
								borderRadius: 100,
								height: 40,
								justifyContent: "center",
								width: 40,
							},
							dimensions.width
						)}
					>
						<Icon
							color={theme.colors["Primary/Yellow800"]}
							name={"Ionicons/notifications"}
							size={24}
							style={StyleSheet.applyWidth(
								{ backgroundColor: "rgba(0, 0, 0, 0)" },
								dimensions.width
							)}
						/>
						{/* Notification Quantity */}
						<View
							style={StyleSheet.applyWidth(
								{
									alignContent: "center",
									alignItems: "center",
									alignSelf: "center",
									backgroundColor: theme.colors["System/Error500"],
									borderColor: theme.colors["Primary/Yellow100"],
									borderRadius: 100,
									borderWidth: 2,
									height: 14,
									justifyContent: "center",
									position: "absolute",
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: "rgb(255, 255, 255)",
										fontFamily: "Inter_700Bold",
										fontSize: 9,
									}),
									dimensions.width
								)}
							>
								{"2"}
							</Text>
						</View>
					</View>
				</Touchable>
			</View>

			<ScrollView
				bounces={true}
				showsHorizontalScrollIndicator={true}
				showsVerticalScrollIndicator={true}
			>
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
						{"Welcome Marvin"}
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
				{/* Tab buttons container */}
				<View style={StyleSheet.applyWidth({ padding: 16 }, dimensions.width)}>
					{/* Tab Buttons */}
					<View
						style={StyleSheet.applyWidth(
							{
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "flex-start",
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
							title={"Your created games"}
						/>
						{/* Button 2 */}
						<Button
							onPress={() => {
								try {
									navigation.navigate("AssignorHomeRefereeVacanciesScreen");
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
							title={"With referee vacancies"}
						/>
					</View>
				</View>
				{/* Upcoming Games Content */}
				<View>
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
						{/* AssignorGameCardActive */}
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
									{"MPLS Tournament Game"}
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
									<Icon name={"Entypo/dots-three-vertical"} size={20} />
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
													letterSpacing: 1.5,
												}
											),
											dimensions.width
										)}
									>
										{"12U"}
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
								{/* Number */}
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
													color: theme.colors["System/Error700"],
													fontFamily: "Inter_400Regular",
													fontSize: 12,
													letterSpacing: 0.4,
													marginRight: 4,
													paddingLeft: 16,
												}
											),
											dimensions.width
										)}
									>
										{"2/3"}
									</Text>
									<Icon
										color={theme.colors["System/Error700"]}
										name={"AntDesign/exclamationcircle"}
										size={14}
									/>
								</View>
							</View>
						</View>
						{/* AssignorGameCardActive 2 */}
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
									{"MPLS Tournament Game"}
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
									<Icon name={"Entypo/dots-three-vertical"} size={20} />
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
													letterSpacing: 1.5,
												}
											),
											dimensions.width
										)}
									>
										{"12U"}
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
								{/* Number */}
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
													color: theme.colors["System/Error700"],
													fontFamily: "Inter_400Regular",
													fontSize: 12,
													letterSpacing: 0.4,
													marginRight: 4,
													paddingLeft: 16,
												}
											),
											dimensions.width
										)}
									>
										{"2/3"}
									</Text>
									<Icon
										color={theme.colors["System/Error700"]}
										name={"AntDesign/exclamationcircle"}
										size={14}
									/>
								</View>
							</View>
						</View>
						{/* AssignorGameCardDefault */}
						<View
							style={StyleSheet.applyWidth(
								{
									backgroundColor: "rgb(255, 255, 255)",
									borderColor: theme.colors["Grey300"],
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
									{"Lakers vs Bulls"}
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
									<Icon name={"Entypo/dots-three-vertical"} size={20} />
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
													letterSpacing: 1.5,
												}
											),
											dimensions.width
										)}
									>
										{"12U"}
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
								{/* Number */}
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
													color: theme.colors["System/Error700"],
													fontFamily: "Inter_400Regular",
													fontSize: 12,
													letterSpacing: 0.4,
													marginRight: 4,
													paddingLeft: 16,
												}
											),
											dimensions.width
										)}
									>
										{"2/3"}
									</Text>
									<Icon
										color={theme.colors["System/Error700"]}
										name={"AntDesign/exclamationcircle"}
										size={14}
									/>
								</View>
							</View>
						</View>
						{/* AssignorGameCardDefault 2 */}
						<View
							style={StyleSheet.applyWidth(
								{
									backgroundColor: "rgb(255, 255, 255)",
									borderColor: theme.colors["Grey300"],
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
									{"Lakers vs Bulls"}
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
									<Icon name={"Entypo/dots-three-vertical"} size={20} />
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
													letterSpacing: 1.5,
												}
											),
											dimensions.width
										)}
									>
										{"12U"}
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
										size={14}
										style={StyleSheet.applyWidth(
											{ backgroundColor: "rgba(39, 31, 1, 0)", marginRight: 8 },
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
								{/* Number */}
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
													color: theme.colors["Success500"],
													fontFamily: "Inter_400Regular",
													fontSize: 12,
													letterSpacing: 0.4,
													marginRight: 4,
													paddingLeft: 16,
												}
											),
											dimensions.width
										)}
									>
										{"3/3"}
									</Text>
									<Icon
										color={theme.colors["Success500"]}
										name={"AntDesign/checkcircle"}
										size={14}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>
				{/* Modal Filter Game Referee */}
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
								style={StyleSheet.applyWidth(
									{ width: "100%" },
									dimensions.width
								)}
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
										{/* filter_date */}
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
												{"filter by dates"}
											</Text>
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
												{/* Row input from */}
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
																	color: theme.colors["Grey600"],
																	fontFamily: "Inter_400Regular",
																	fontSize: 10,
																	letterSpacing: 1.5,
																	marginRight: 4,
																	textTransform: "uppercase",
																}
															),
															dimensions.width
														)}
													>
														{"from"}
													</Text>
													{/* from_date_input */}
													<TextInput
														allowFontScaling={true}
														autoCapitalize={"none"}
														changeTextDelay={500}
														placeholder={"Jan 1"}
														placeholderTextColor={theme.colors["Light"]}
														style={StyleSheet.applyWidth(
															StyleSheet.compose(
																GlobalStyles.TextInputStyles(theme)[
																	"Text Input"
																],
																{
																	backgroundColor: "rgb(245, 245, 245)",
																	color: "rgb(122, 122, 122)",
																	fontFamily: "Inter_400Regular",
																	fontSize: 16,
																	marginRight: 8,
																	paddingBottom: 14,
																	paddingLeft: 16,
																	paddingRight: 16,
																	paddingTop: 14,
																	textTransform: "none",
																	width: 120,
																}
															),
															dimensions.width
														)}
													/>
												</View>
												{/* Row input from 2 */}
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
																	color: theme.colors["Grey600"],
																	fontFamily: "Inter_400Regular",
																	fontSize: 10,
																	letterSpacing: 1.5,
																	marginRight: 4,
																	textTransform: "uppercase",
																}
															),
															dimensions.width
														)}
													>
														{"to"}
													</Text>
													{/* from_date_input */}
													<TextInput
														allowFontScaling={true}
														autoCapitalize={"none"}
														changeTextDelay={500}
														placeholder={"Mar. 1"}
														placeholderTextColor={theme.colors["Light"]}
														style={StyleSheet.applyWidth(
															StyleSheet.compose(
																GlobalStyles.TextInputStyles(theme)[
																	"Text Input"
																],
																{
																	backgroundColor: "rgb(245, 245, 245)",
																	color: "rgb(122, 122, 122)",
																	fontFamily: "Inter_400Regular",
																	fontSize: 16,
																	paddingBottom: 14,
																	paddingLeft: 16,
																	paddingRight: 16,
																	paddingTop: 14,
																	textTransform: "none",
																	width: 120,
																}
															),
															dimensions.width
														)}
													/>
												</View>
											</View>
										</View>
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
											{/* first_name_input */}
											<TextInput
												allowFontScaling={true}
												autoCapitalize={"none"}
												changeTextDelay={500}
												placeholder={"ID number"}
												placeholderTextColor={theme.colors["Light"]}
												style={StyleSheet.applyWidth(
													StyleSheet.compose(
														GlobalStyles.TextInputStyles(theme)["Text Input"],
														{
															backgroundColor: "rgb(245, 245, 245)",
															color: "rgb(122, 122, 122)",
															fontFamily: "Inter_400Regular",
															fontSize: 16,
															marginBottom: 16,
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
														setPickerValue(pickerValue);
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
												value={pickerValue}
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
														setPickerValue(pickerValue);
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
												value={pickerValue}
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
														setPickerValue(pickerValue);
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
												value={pickerValue}
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
														setPickerValue(pickerValue);
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
												value={pickerValue}
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
				{/* Payment more detail modal */}
				<View
					style={StyleSheet.applyWidth(
						{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 8 },
						dimensions.width
					)}
				>
					{/* Payment more details modal */}
					<View
						style={StyleSheet.applyWidth(
							{
								backgroundColor: "rgb(255, 255, 255)",
								borderRadius: 8,
								padding: 20,
							},
							dimensions.width
						)}
					>
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey600"],
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 12,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"teams"}
							</Text>
							{/* Text 2 */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey900"],
										fontFamily: "Inter_400Regular",
										fontSize: 14,
										letterSpacing: 0.25,
									}),
									dimensions.width
								)}
							>
								{"LA Lakers vs Chicago Bulls"}
							</Text>
						</View>
						{/* info container 2 */}
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey600"],
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 12,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"address"}
							</Text>
							{/* Row */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Icon
									color={theme.colors["Primary/Yellow900"]}
									name={"Ionicons/ios-location-sharp"}
									size={14}
								/>
								{/* Text 2 */}
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: theme.colors["Grey900"],
											fontFamily: "Inter_400Regular",
											fontSize: 14,
											letterSpacing: 0.25,
											marginLeft: 8,
										}),
										dimensions.width
									)}
								>
									{"Southwest"}
								</Text>
							</View>
						</View>
						{/* info container 3 */}
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey600"],
										fontFamily: "Inter_500Medium",
										fontSize: 10,
										letterSpacing: 1.5,
										marginBottom: 12,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"date & time"}
							</Text>
							{/* Row */}
							<View
								style={StyleSheet.applyWidth(
									{ alignItems: "center", flexDirection: "row" },
									dimensions.width
								)}
							>
								<Icon
									color={theme.colors["Primary/Yellow900"]}
									name={"Entypo/calendar"}
									size={14}
								/>
								{/* Text 2 */}
								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: theme.colors["Grey900"],
											fontFamily: "Inter_400Regular",
											fontSize: 14,
											letterSpacing: 0.25,
											marginLeft: 8,
										}),
										dimensions.width
									)}
								>
									{"May 8th - 8:00 pm"}
								</Text>
							</View>
						</View>
						{/* Row 2 */}
						<View
							style={StyleSheet.applyWidth(
								{
									flexDirection: "row",
									justifyContent: "space-between",
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
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: theme.colors["Grey600"],
											fontFamily: "Inter_500Medium",
											fontSize: 10,
											letterSpacing: 1.5,
											marginBottom: 12,
											textTransform: "uppercase",
										}),
										dimensions.width
									)}
								>
									{"sport organization"}
								</Text>
								{/* Row */}
								<View
									style={StyleSheet.applyWidth(
										{ alignItems: "center", flexDirection: "row" },
										dimensions.width
									)}
								>
									<Image
										resizeMode={"cover"}
										source={Images.SportOrgLogo}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.ImageStyles(theme)["Image"],
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
												GlobalStyles.TextStyles(theme)["Text"],
												{
													color: theme.colors["Grey900"],
													fontFamily: "Inter_400Regular",
													letterSpacing: 0.25,
													marginLeft: 8,
												}
											),
											dimensions.width
										)}
									>
										{"National Basketball Association"}
									</Text>
								</View>
							</View>
						</View>
						{/* Row */}
						<View
							style={StyleSheet.applyWidth(
								{
									flexDirection: "row",
									justifyContent: "space-between",
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
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: theme.colors["Grey600"],
											fontFamily: "Inter_500Medium",
											fontSize: 10,
											letterSpacing: 1.5,
											marginBottom: 12,
											textTransform: "uppercase",
										}),
										dimensions.width
									)}
								>
									{"sport organization"}
								</Text>
								{/* Row */}
								<View
									style={StyleSheet.applyWidth(
										{
											alignItems: "center",
											flexDirection: "row",
											marginBottom: 8,
										},
										dimensions.width
									)}
								>
									<Image
										resizeMode={"cover"}
										source={Images.Avatar3}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.ImageStyles(theme)["Image"],
												{ height: 24, marginRight: 8, width: 24 }
											),
											dimensions.width
										)}
									/>
									{/* Image 2 */}
									<Image
										resizeMode={"cover"}
										source={Images.Avatar3}
										style={StyleSheet.applyWidth(
											StyleSheet.compose(
												GlobalStyles.ImageStyles(theme)["Image"],
												{ height: 24, marginRight: 8, width: 24 }
											),
											dimensions.width
										)}
									/>
									<View
										style={StyleSheet.applyWidth(
											{
												backgroundColor: theme.colors["Primary/Yellow200"],
												borderColor: theme.colors["Primary/Yellow600"],
												borderRadius: 100,
												borderStyle: "dashed",
												borderWidth: 1,
												height: 24,
												width: 24,
											},
											dimensions.width
										)}
									/>
								</View>

								<Text
									accessible={true}
									allowFontScaling={true}
									style={StyleSheet.applyWidth(
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											color: theme.colors["System/Error700"],
											fontFamily: "Inter_400Regular",
											fontSize: 12,
											letterSpacing: 0.4,
										}),
										dimensions.width
									)}
								>
									{"Still needing 1 referee"}
								</Text>
							</View>
						</View>
						{/* Row */}
						<View
							style={StyleSheet.applyWidth(
								{
									alignItems: "center",
									flexDirection: "row",
									justifyContent: "space-around",
								},
								dimensions.width
							)}
						>
							{/* Secondary button */}
							<Button
								onPress={() => {
									console.log("Secondary button ON_PRESS Start");
									let error = null;
									try {
										console.log("Start ON_PRESS:0 SET_VARIABLE");
										setGlobalVariableValue({
											key: "visible",
											value: false,
										});
										console.log("Complete ON_PRESS:0 SET_VARIABLE");
									} catch (err) {
										console.error(err);
										error = err.message ?? err;
									}
									console.log(
										"Secondary button ON_PRESS Complete",
										error ? { error } : "no error"
									);
								}}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(
										GlobalStyles.ButtonStyles(theme)["Button"],
										{
											backgroundColor: "rgb(255, 255, 255)",
											borderRadius: 100,
											color: theme.colors["Grey700"],
											fontFamily: "Inter_500Medium",
											fontSize: 16,
											letterSpacing: 1.25,
											marginRight: 16,
											width: 120,
										}
									),
									dimensions.width
								)}
								title={"Remove"}
							/>
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
								title={"Edit"}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
			{/* Navigation bar */}
			<View
				style={StyleSheet.applyWidth(
					{ backgroundColor: "rgb(255, 255, 255)" },
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
								navigation.navigate("MyGamesScreen");
							} catch (err) {
								console.error(err);
							}
						}}
					>
						{/* Nav button */}
						<View
							style={StyleSheet.applyWidth(
								{ alignItems: "center", alignSelf: "center", padding: 4 },
								dimensions.width
							)}
						>
							<Icon
								color={theme.colors["Grey600"]}
								name={"MaterialCommunityIcons/whistle-outline"}
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey700"],
										fontFamily: "Inter_500Medium",
										letterSpacing: 1.25,
									}),
									dimensions.width
								)}
							>
								{"My Games"}
							</Text>
						</View>
					</Touchable>
					{/* Touchable 2 */}
					<Touchable>
						{/* Nav button 2 */}
						<View
							style={StyleSheet.applyWidth(
								{ alignItems: "center", alignSelf: "center", padding: 4 },
								dimensions.width
							)}
						>
							<Icon
								color={theme.colors["Grey600"]}
								name={"Feather/users"}
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey700"],
										fontFamily: "Inter_500Medium",
										letterSpacing: 1.25,
									}),
									dimensions.width
								)}
							>
								{"Referees"}
							</Text>
						</View>
					</Touchable>
					{/* Touchable 3 */}
					<Touchable
						onPress={() => {
							try {
								navigation.navigate("EarningsScreen");
							} catch (err) {
								console.error(err);
							}
						}}
					>
						{/* Nav button 3 */}
						<View
							style={StyleSheet.applyWidth(
								{ alignItems: "center", alignSelf: "center", padding: 4 },
								dimensions.width
							)}
						>
							<Icon
								color={theme.colors["Grey600"]}
								name={"MaterialIcons/attach-money"}
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
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey700"],
										fontFamily: "Inter_500Medium",
										letterSpacing: 1.25,
									}),
									dimensions.width
								)}
							>
								{"Earnings"}
							</Text>
						</View>
					</Touchable>
					{/* Touchable Profile */}
					<Touchable
						onPress={() => {
							try {
								navigation.navigate("ProfileScreen");
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
								resizeMode={"cover"}
								source={Images.Avartar}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.ImageStyles(theme)["Image"], {
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

export default withTheme(AssignorHomeCreatedGamesScreen);
