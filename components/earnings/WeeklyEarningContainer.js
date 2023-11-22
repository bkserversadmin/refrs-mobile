import React from "react";
import { withTheme } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";
import WeeklyItem from "./WeeklyItem.js";

const WeeklyEarningContainer = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;

	return (
		<View>
			<Text
				accessible={true}
				allowFontScaling={true}
				style={{
					color: theme.colors["Grey600"],
					fontFamily: "Inter_400Regular",
					fontSize: 12,
					letterSpacing: 1.5,
					marginBottom: 16,
					marginTop: 32,
					paddingLeft: 20,
					paddingRight: 20,
					textTransform: "uppercase",
					...dimensions.width,
				}}
			>
				Weeks earnings details
			</Text>

			<View>
				<WeeklyItem theme={theme} navigation={navigation} />
			</View>
		</View>
	);
};

export default withTheme(WeeklyEarningContainer);
