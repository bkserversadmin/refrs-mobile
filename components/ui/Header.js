import { withTheme, Link, Icon, Touchable, IconButton } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles.js";
import NotificationHeader from "../notifications/notificationHeader.js";

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
					{/* <Icon
					color={theme.colors["Grey100"]}
					name={"AntDesign/left"}
					size={24}
				/> */}
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

			<NotificationHeader navigation={navigation} />
		</View>
	);
};

export default withTheme(Header);
