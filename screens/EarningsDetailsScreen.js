import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as GlobalVariables from "../config/GlobalVariableContext";
import Images from "../config/Images";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import { Icon, ScreenContainer, Touchable, withTheme } from "@draftbit/ui";
import {
	Image,
	ScrollView,
	Text,
	View,
	useWindowDimensions,
} from "react-native";

const EarningsDetailsScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;
	const setGlobalVariableValue = GlobalVariables.useSetValue();

	const [test, setTest] = React.useState(false);

	return (
		<ScreenContainer
			hasSafeArea={false}
			scrollable={false}
			style={StyleSheet.applyWidth(
				{
					backgroundColor: theme.colors["Grey200"],
					justifyContent: "space-between",
				},
				dimensions.width
			)}
		>
			{/* global_header_backbutton */}
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
				<Icon
					color={theme.colors["Grey100"]}
					name={"AntDesign/left"}
					size={24}
				/>
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
					{"May 14 - 20, Earnings"}
				</Text>
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
			</View>

			<ScrollView
				bounces={true}
				showsHorizontalScrollIndicator={true}
				showsVerticalScrollIndicator={true}
			>
				{/* Week earnings details */}
				<>
					{Constants["visible"] ? null : (
						<View>
							{/* Ttile */}
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey600"],
										fontFamily: "Inter_400Regular",
										fontSize: 12,
										letterSpacing: 1.5,
										marginBottom: 16,
										marginTop: 24,
										paddingLeft: 20,
										paddingRight: 20,
										textTransform: "uppercase",
									}),
									dimensions.width
								)}
							>
								{"Weeks earnings details"}
							</Text>
							{/* Card Container */}
							<View
								style={StyleSheet.applyWidth(
									{
										backgroundColor: "rgb(255, 255, 255)",
										borderRadius: 16,
										marginLeft: 20,
										marginRight: 20,
										padding: 12,
									},
									dimensions.width
								)}
							>
								{/* Game item */}
								<View
									style={StyleSheet.applyWidth(
										{
											borderColor: theme.colors["Grey300"],
											borderWidth: 1,
											marginBottom: 8,
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
												borderColor: theme.colors["Grey300"],
												borderRadius: 8,
												borderWidth: 1,
												flexDirection: "row",
												justifyContent: "space-between",
												padding: 8,
												paddingBottom: 24,
												paddingLeft: 16,
												paddingRight: 16,
												paddingTop: 24,
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
														color: theme.colors["Grey800"],
														fontFamily: "Inter_700Bold",
														fontSize: 16,
														letterSpacing: 0.2,
													}
												),
												dimensions.width
											)}
										>
											{"MPLS Tournament Game"}
										</Text>
										{/* Price and arrow */}
										<View
											style={StyleSheet.applyWidth(
												{ alignItems: "center", flexDirection: "row" },
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
															color: theme.colors["Primary/Yellow800"],
															fontFamily: "Inter_700Bold",
															fontSize: 16,
															letterSpacing: 0.2,
															marginRight: 24,
														}
													),
													dimensions.width
												)}
											>
												{"$76"}
											</Text>
											<Icon
												color={theme.colors["Grey900"]}
												name={"Entypo/dots-three-vertical"}
												size={20}
												style={StyleSheet.applyWidth(
													{ height: 20, width: 20 },
													dimensions.width
												)}
											/>
											<Touchable
												onPress={() => {
													try {
														setTest(true);
													} catch (err) {
														console.error(err);
													}
												}}
											/>
										</View>
									</View>
								</View>
								{/* Game item 2 */}
								<View
									style={StyleSheet.applyWidth(
										{
											borderColor: theme.colors["Grey300"],
											borderWidth: 1,
											marginBottom: 8,
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
												borderColor: theme.colors["Grey300"],
												borderRadius: 8,
												borderWidth: 1,
												flexDirection: "row",
												justifyContent: "space-between",
												padding: 8,
												paddingBottom: 24,
												paddingLeft: 16,
												paddingRight: 16,
												paddingTop: 24,
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
														color: theme.colors["Grey800"],
														fontFamily: "Inter_700Bold",
														fontSize: 16,
														letterSpacing: 0.2,
													}
												),
												dimensions.width
											)}
										>
											{"MPLS Tournament Game"}
										</Text>
										{/* Price and arrow */}
										<View
											style={StyleSheet.applyWidth(
												{ alignItems: "center", flexDirection: "row" },
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
															color: theme.colors["Primary/Yellow800"],
															fontFamily: "Inter_700Bold",
															fontSize: 16,
															letterSpacing: 0.2,
															marginRight: 24,
														}
													),
													dimensions.width
												)}
											>
												{"$76"}
											</Text>
											<Icon
												color={theme.colors["Grey900"]}
												name={"Entypo/dots-three-vertical"}
												size={20}
												style={StyleSheet.applyWidth(
													{ height: 20, width: 20 },
													dimensions.width
												)}
											/>
										</View>
									</View>
								</View>
								{/* Game item 3 */}
								<View
									style={StyleSheet.applyWidth(
										{
											borderColor: theme.colors["Grey300"],
											borderWidth: 1,
											marginBottom: 8,
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
												borderColor: theme.colors["Grey300"],
												borderRadius: 8,
												borderWidth: 1,
												flexDirection: "row",
												justifyContent: "space-between",
												padding: 8,
												paddingBottom: 24,
												paddingLeft: 16,
												paddingRight: 16,
												paddingTop: 24,
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
														color: theme.colors["Grey800"],
														fontFamily: "Inter_700Bold",
														fontSize: 16,
														letterSpacing: 0.2,
													}
												),
												dimensions.width
											)}
										>
											{"MPLS Tournament Game"}
										</Text>
										{/* Price and arrow */}
										<View
											style={StyleSheet.applyWidth(
												{ alignItems: "center", flexDirection: "row" },
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
															color: theme.colors["Primary/Yellow800"],
															fontFamily: "Inter_700Bold",
															fontSize: 16,
															letterSpacing: 0.2,
															marginRight: 24,
														}
													),
													dimensions.width
												)}
											>
												{"$76"}
											</Text>
											<Icon
												color={theme.colors["Grey900"]}
												name={"Entypo/dots-three-vertical"}
												size={20}
												style={StyleSheet.applyWidth(
													{ height: 20, width: 20 },
													dimensions.width
												)}
											/>
										</View>
									</View>
								</View>
								{/* Game item 4 */}
								<View
									style={StyleSheet.applyWidth(
										{
											borderColor: theme.colors["Grey300"],
											borderWidth: 1,
											marginBottom: 8,
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
												borderColor: theme.colors["Grey300"],
												borderRadius: 8,
												borderWidth: 1,
												flexDirection: "row",
												justifyContent: "space-between",
												padding: 8,
												paddingBottom: 24,
												paddingLeft: 16,
												paddingRight: 16,
												paddingTop: 24,
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
														color: theme.colors["Grey800"],
														fontFamily: "Inter_700Bold",
														fontSize: 16,
														letterSpacing: 0.2,
													}
												),
												dimensions.width
											)}
										>
											{"MPLS Tournament Game"}
										</Text>
										{/* Price and arrow */}
										<View
											style={StyleSheet.applyWidth(
												{ alignItems: "center", flexDirection: "row" },
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
															color: theme.colors["Primary/Yellow800"],
															fontFamily: "Inter_700Bold",
															fontSize: 16,
															letterSpacing: 0.2,
															marginRight: 24,
														}
													),
													dimensions.width
												)}
											>
												{"$76"}
											</Text>
											<Icon
												color={theme.colors["Grey900"]}
												name={"Entypo/dots-three-vertical"}
												size={20}
												style={StyleSheet.applyWidth(
													{ height: 20, width: 20 },
													dimensions.width
												)}
											/>
										</View>
									</View>
								</View>
								{/* Game item 5 */}
								<View
									style={StyleSheet.applyWidth(
										{
											borderColor: theme.colors["Grey300"],
											borderWidth: 1,
											marginBottom: 8,
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
												borderColor: theme.colors["Grey300"],
												borderRadius: 8,
												borderWidth: 1,
												flexDirection: "row",
												justifyContent: "space-between",
												padding: 8,
												paddingBottom: 24,
												paddingLeft: 16,
												paddingRight: 16,
												paddingTop: 24,
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
														color: theme.colors["Grey800"],
														fontFamily: "Inter_700Bold",
														fontSize: 16,
														letterSpacing: 0.2,
													}
												),
												dimensions.width
											)}
										>
											{"MPLS Tournament Game"}
										</Text>
										{/* Price and arrow */}
										<View
											style={StyleSheet.applyWidth(
												{ alignItems: "center", flexDirection: "row" },
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
															color: theme.colors["Primary/Yellow800"],
															fontFamily: "Inter_700Bold",
															fontSize: 16,
															letterSpacing: 0.2,
															marginRight: 24,
														}
													),
													dimensions.width
												)}
											>
												{"$76"}
											</Text>
											<Icon
												color={theme.colors["Grey900"]}
												name={"Entypo/dots-three-vertical"}
												size={20}
												style={StyleSheet.applyWidth(
													{ height: 20, width: 20 },
													dimensions.width
												)}
											/>
										</View>
									</View>
								</View>
							</View>
						</View>
					)}
				</>
				{/* Payment More Details Modal */}
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
								{"payout date"}
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
									{"LA Lakers vs Chicago Bulls"}
								</Text>
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
									{"assignor"}
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
										source={Images.Avatar3}
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
										{"Robert Fox"}
									</Text>
								</View>
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
					</View>
				</View>
			</ScrollView>
			{/* Navigation Bar */}
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
								{
									alignItems: "center",
									alignSelf: "center",
									backgroundColor: theme.colors["Primary/Yellow400"],
									padding: 4,
								},
								dimensions.width
							)}
						>
							<Icon
								color={theme.colors["Primary/Yellow900"]}
								name={"MaterialIcons/monetization-on"}
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
										color: theme.colors["Primary/Yellow900"],
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

export default withTheme(EarningsDetailsScreen);
