import { withTheme, Link } from "@draftbit/ui";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles.js";
import { Text, View, useWindowDimensions } from "react-native";

const Footer = (props) => {
	const { theme, navigation } = props;
	const dimensions = useWindowDimensions();

	return (
		<View
			style={StyleSheet.applyWidth(
				{ alignItems: "center", paddingBottom: 32, paddingTop: 32 },
				dimensions.width
			)}
		>
			<Text
				accessible={true}
				allowFontScaling={true}
				style={StyleSheet.applyWidth(
					StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
						color: "rgb(92, 92, 92)",
						fontFamily: "Inter_400Regular",
						fontSize: 12,
						letterSpacing: 0.4,
						marginBottom: 16,
					}),
					dimensions.width
				)}
			>
				{"©2023 Refr Sports"}
			</Text>
			<Link
				accessible={true}
				allowFontScaling={true}
				style={StyleSheet.applyWidth(
					StyleSheet.compose(GlobalStyles.LinkStyles(theme)["Link"], {
						color: "rgb(197, 156, 7)",
						fontFamily: "Inter_400Regular",
						fontSize: 12,
						letterSpacing: 0.4,
						marginBottom: 16,
					}),
					dimensions.width
				)}
				title={"Privacy Policy"}
				onPress={() => {
					try {
						navigation.navigate("LoginScreen");
					} catch (err) {
						console.error(err);
					}
				}}
			/>
			<Link
				accessible={true}
				allowFontScaling={true}
				style={StyleSheet.applyWidth(
					StyleSheet.compose(GlobalStyles.LinkStyles(theme)["Link"], {
						color: "rgb(197, 156, 7)",
						fontFamily: "Inter_400Regular",
						fontSize: 12,
						letterSpacing: 0.4,
					}),
					dimensions.width
				)}
				title={"Terms and Conditions"}
				onPress={() => {
					try {
						navigation.navigate("LoginScreen");
					} catch (err) {
						console.error(err);
					}
				}}
			/>
		</View>
	);
};

export default withTheme(Footer);
