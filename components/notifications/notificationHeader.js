import { withTheme, Link, Icon, Touchable } from "@draftbit/ui";
import { useRoute } from "@react-navigation/native";
import { Text, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import * as StyleSheet from "../../utils/StyleSheet.js";
import * as GlobalStyles from "../../GlobalStyles.js";

const NotificationHeader = (props) => {
	const { theme, navigation } = props;
	const dimensions = useWindowDimensions();
	const router = useRoute();
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (router.name === "NotificationsScreen") {
			setIsFocused(true);
		} else {
			setIsFocused(false);
		}
	}, [navigation, router]);

	return (
		<Touchable
			onPress={() => {
				if (!isFocused) {
					navigation.navigate("NotificationsScreen");
				}
			}}
		>
			<View
				style={StyleSheet.applyWidth(
					{
						alignContent: "center",
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: !isFocused ? "rgb(255, 255, 255)" : "yellow",
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
					style={{ backgroundColor: "rgba(0, 0, 0, 0)", ...dimensions.width }}
				/>
				{/* Notification Quantity */}
				{!isFocused && (
					<View
						style={{
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
							...dimensions.width,
						}}
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
				)}
			</View>
		</Touchable>
	);
};

export default withTheme(NotificationHeader);
