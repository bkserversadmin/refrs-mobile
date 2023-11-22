import React from "react";
import { Icon, Touchable, withTheme } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";

const EarningsGameItem = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;

	return (
		<View
			style={{
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
				marginVertical: 3,
				...dimensions.width,
			}}
		>
			<Text
				accessible={true}
				allowFontScaling={true}
				style={{
					color: theme.colors["Grey800"],
					fontFamily: "Inter_700Bold",
					fontSize: 16,
					letterSpacing: 0.2,
					...dimensions.width,
				}}
			>
				MPLS Tournament Game
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
						fontSize: 16,
						letterSpacing: 0.2,
						marginRight: 24,
						...dimensions.width,
					}}
				>
					$76
				</Text>
				<Icon
					color={theme.colors["Grey900"]}
					name={"Entypo/dots-three-vertical"}
					size={20}
					style={{ height: 20, width: 20, ...dimensions.width }}
				/>
				<Touchable
					onPress={() => {
						console.log("press on dots more");
					}}
				/>
			</View>
		</View>
	);
};

export default withTheme(EarningsGameItem);
