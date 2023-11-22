import React from "react";
import { withTheme } from "@draftbit/ui";
import { View, useWindowDimensions } from "react-native";
import EarningGameItem from "./EarningGameItem.js";

const EarningGameContainer = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;

	return (
		<View
			style={{
				backgroundColor: "rgb(255, 255, 255)",
				borderRadius: 16,
				marginLeft: 20,
				marginRight: 20,
				padding: 12,
				...dimensions.width,
			}}
		>
			<EarningGameItem theme={theme} navigatio={navigation} />
			<EarningGameItem theme={theme} navigatio={navigation} />
			<EarningGameItem theme={theme} navigatio={navigation} />
			<EarningGameItem theme={theme} navigatio={navigation} />
			<EarningGameItem theme={theme} navigatio={navigation} />
		</View>
	);
};

export default withTheme(EarningGameContainer);
