import { withTheme, Link, Icon, Touchable, IconButton } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles.js";

const Header = (props) => {
	const { theme, navigation, name, canGoBack = false } = props;
	const dimensions = useWindowDimensions();

	const backHandler = () => {
		navigation.goBack();
	};

	return (
		<View
			style={{
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
				...dimensions.width,
			}}
		>
			{canGoBack && (
				<Touchable onPress={() => backHandler()}>
					<Icon
						color={"rgb(255, 255, 255)"}
						name={"Entypo/chevron-left"}
						size={30}
					/>
				</Touchable>
			)}
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
				{name}
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
	);
};

export default withTheme(Header);
