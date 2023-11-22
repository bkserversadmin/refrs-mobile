import React from "react";
import { Icon, Touchable, withTheme } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";

const WeeklyItem = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;

	return (
		<Touchable
			onPress={() => {
				try {
					navigation.navigate("EarningsDetailsScreen");
				} catch (err) {
					console.error(err);
				}
			}}
		>
			<View
				style={{
					alignItems: "center",
					backgroundColor: "rgb(255, 255, 255)",
					borderBottomWidth: 2,
					borderColor: theme.colors["Grey300"],
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
					flexDirection: "row",
					justifyContent: "space-between",
					marginLeft: 20,
					marginRight: 20,
					padding: 8,
					...dimensions.width,
				}}
			>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={{
						color: theme.colors["Grey800"],
						fontFamily: "Inter_400Regular",
						fontSize: 16,
						letterSpacing: 0.2,
						...dimensions.width,
					}}
				>
					May 14 - 20
				</Text>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={{
						color: theme.colors["Grey800"],
						fontFamily: "Inter_400Regular",
						letterSpacing: 0.2,
						...dimensions.width,
					}}
				>
					153 Games
				</Text>
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
						style={{
							color: theme.colors["Primary/Yellow800"],
							fontFamily: "Inter_700Bold",
							...dimensions.width,
						}}
					>
						$765
					</Text>
					<Icon
						color={theme.colors["Grey900"]}
						name={"MaterialIcons/keyboard-arrow-right"}
						size={20}
						style={{ height: 20, width: 20, ...dimensions.width }}
					/>
				</View>
			</View>
		</Touchable>
	);
};

export default withTheme(WeeklyItem);
