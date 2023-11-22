import { withTheme, Touchable, Icon } from "@draftbit/ui";
import { useNavigation } from "@react-navigation/native";
import { View, Text, useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles";

const GameItem = (props) => {
	const { theme, ...rest } = props;
	const dimensions = useWindowDimensions();
	const navigation = useNavigation();
	return (
		<Touchable
			onPress={() => {
				navigation.navigate("GameDetailsScreen");
			}}
		>
			<View
				style={{
					backgroundColor: "rgb(253, 241, 196)",
					borderColor: "rgb(248, 211, 71)",
					borderRadius: 8,
					borderWidth: 1,
					marginBottom: 8,
					padding: 15,
					...dimensions.width,
				}}
			>
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 12,
						...dimensions.width,
					}}
				>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={StyleSheet.applyWidth(
							StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
								fontFamily: "Inter_500Medium",
								fontSize: 16,
								letterSpacing: 0.2,
								...dimensions.width,
							})
						)}
					>
						Linden Vs Pershing
					</Text>

					<View
						style={{
							alignItems: "center",
							flexDirection: "row",
							...dimensions.width,
						}}
					>
						<View
							style={{
								backgroundColor: "rgb(245, 245, 245)",
								borderRadius: 8,
								marginRight: 16,
								padding: 8,
								...dimensions.width,
							}}
						>
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										fontFamily: "Inter_600SemiBold",
										fontSize: 10,
										...dimensions.width,
									})
								)}
							>
								#231
							</Text>
						</View>
						<Icon name={"Entypo/dots-three-vertical"} size={24} />
					</View>
				</View>
				{/* Row */}
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "space-between",
						...dimensions.width,
					}}
				>
					<View
						style={{
							backgroundColor: "rgb(235, 255, 255)",
							borderRadius: 8,
							marginRight: 16,
							padding: 8,
							...dimensions.width,
						}}
					>
						<Text
							accessible={true}
							allowFontScaling={true}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
									color: "rgb(0, 61, 61)",
									fontFamily: "Inter_600SemiBold",
									fontSize: 12,
									...dimensions.width,
								})
							)}
						>
							#231
						</Text>
					</View>
					{/* Date */}
					<View
						style={{
							alignItems: "center",
							flexDirection: "row",
							...dimensions.width,
						}}
					>
						<Icon
							name={"MaterialCommunityIcons/calendar-blank"}
							size={24}
							style={{
								backgroundColor: "rgba(39, 31, 1, 0)",
								marginRight: 8,
								...dimensions.width,
							}}
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
									...dimensions.width,
								})
							)}
						>
							May 8th - 8:00 PM
						</Text>
					</View>
					{/* Location */}
					<View
						style={{
							alignItems: "center",
							flexDirection: "row",
							...dimensions.width,
						}}
					>
						<Icon
							name={"Ionicons/location-sharp"}
							size={24}
							style={{
								backgroundColor: "rgba(39, 31, 1, 0)",
								marginRight: 8,
								...dimensions.width,
							}}
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
									...dimensions.width,
								})
							)}
						>
							PP
						</Text>
					</View>
					<View
						style={{
							alignItems: "center",
							flexDirection: "row",
							...dimensions.width,
						}}
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
									...dimensions.width,
								})
							)}
						>
							$35
						</Text>
					</View>
				</View>
			</View>
		</Touchable>
	);
};

export default withTheme(GameItem);
