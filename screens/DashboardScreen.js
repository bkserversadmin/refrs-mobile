import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as SupabaseStagingApi from "../apis/SupabaseStagingApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext";
import Images from "../config/Images";
import getFormattedDate from "../global-functions/getFormattedDate";
import getRefereesOnGame from "../global-functions/getRefereesOnGame";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import {
	Button,
	Icon,
	Link,
	ScreenContainer,
	TextInput,
	Touchable,
	withTheme,
} from "@draftbit/ui";
import { useIsFocused } from "@react-navigation/native";
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import { Fetch } from "react-request";
import Header from "../components/ui/Header.js";

const DashboardScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;

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

	const [textInputValue, setTextInputValue] = React.useState("");

	return (
		<ScreenContainer
			hasSafeArea={true}
			scrollable={false}
			style={StyleSheet.applyWidth(
				{ backgroundColor: "rgb(245, 245, 245)" },
				dimensions.width
			)}
		>
			{/* Header */}
			<Header name="Dashboard" navigatio={navigation} />

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
						{"Welcome John"}
					</Text>
					<Button
						icon={"Feather/sliders"}
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
										StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
											fontFamily: "Inter_600SemiBold",
											fontSize: 10,
										}),
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

				<SupabaseStagingApi.FetchGetGamesAssignorGET
					profile_id={Constants["profile_id"]}
				>
					{({ loading, error, data, refetchGetGamesAssignor }) => {
						const fetchData = data?.json;
						if (loading) {
							return <ActivityIndicator />;
						}

						if (error || data?.status < 200 || data?.status >= 300) {
							return <ActivityIndicator />;
						}

						return (
							<>
								{/* ListGame */}
								<FlatList
									data={fetchData}
									keyExtractor={(listGameData) => listGameData?.id}
									listKey={"x2ZB6l1e"}
									numColumns={1}
									onEndReachedThreshold={0.5}
									renderItem={({ item }) => {
										const listGameData = item;
										return (
											<>
												{/* GameCard 2 */}
												<>
													{!listGameData?.game_id ? null : (
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
																		StyleSheet.compose(
																			GlobalStyles.TextStyles(theme)["Text"],
																			{
																				fontFamily: "Inter_500Medium",
																				fontSize: 16,
																				letterSpacing: 0.2,
																			}
																		),
																		dimensions.width
																	)}
																>
																	{listGameData?.title}
																</Text>

																<View
																	style={StyleSheet.applyWidth(
																		{
																			alignItems: "center",
																			flexDirection: "row",
																		},
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
																					GlobalStyles.TextStyles(theme)[
																						"Text"
																					],
																					{
																						fontFamily: "Inter_600SemiBold",
																						fontSize: 10,
																					}
																				),
																				dimensions.width
																			)}
																		>
																			{listGameData?.game_level?.toUpperCase()}
																		</Text>
																	</View>
																	<Icon
																		name={"Entypo/dots-three-vertical"}
																		size={24}
																	/>
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
																		{listGameData?.game_level?.toUpperCase()}
																	</Text>
																</View>
																{/* Date */}
																<View
																	style={StyleSheet.applyWidth(
																		{
																			alignItems: "center",
																			flexDirection: "row",
																		},
																		dimensions.width
																	)}
																>
																	<Icon
																		name={
																			"MaterialCommunityIcons/calendar-blank"
																		}
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
																		{getFormattedDate(
																			new Date(listGameData?.event_datetime)
																		)}
																	</Text>
																</View>
																{/* Location */}
																<View
																	style={StyleSheet.applyWidth(
																		{
																			alignItems: "center",
																			flexDirection: "row",
																		},
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
																	<>
																		{!listGameData?.game_level ? null : (
																			<Text
																				accessible={true}
																				allowFontScaling={true}
																				style={StyleSheet.applyWidth(
																					StyleSheet.compose(
																						GlobalStyles.TextStyles(theme)[
																							"Text"
																						],
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
																				{listGameData?.venue?.slug?.toUpperCase()}
																			</Text>
																		)}
																	</>
																</View>
																{/* amount referees */}
																<View>
																	<Text
																		accessible={true}
																		allowFontScaling={true}
																		style={StyleSheet.applyWidth(
																			GlobalStyles.TextStyles(theme)["Text"],
																			dimensions.width
																		)}
																	>
																		{getRefereesOnGame(
																			listGameData?.game_referees
																		)}
																		{"/"}
																		{listGameData?.referees_count}
																	</Text>
																</View>
															</View>
														</View>
													)}
												</>
											</>
										);
									}}
									showsHorizontalScrollIndicator={true}
									showsVerticalScrollIndicator={true}
								/>
							</>
						);
					}}
				</SupabaseStagingApi.FetchGetGamesAssignorGET>
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
								navigation.navigate("ProfilePersonalInformationScreen");
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

export default withTheme(DashboardScreen);
