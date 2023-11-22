import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as SupabaseStagingApi from "../apis/SupabaseStagingApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext";
import Images from "../config/Images";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import {
	Button,
	Icon,
	ScreenContainer,
	Shadow,
	Touchable,
	withTheme,
} from "@draftbit/ui";
import {
	Image,
	ScrollView,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import AuthLayout from "../components/layout/AuthLayout.js";
import EarningSummary from "../components/earnings/EarningSummary.js";
import WeeklyEarningContainer from "../components/earnings/WeeklyEarningContainer.js";

const EarningsScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;
	const setGlobalVariableValue = GlobalVariables.useSetValue();

	return (
		<AuthLayout name="Earnings" navigation={navigation}>
			<EarningSummary theme={theme} navigation={navigation} />

			<WeeklyEarningContainer theme={theme} navigation={navigation} />
			{/* Earning balance */}
			<View style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}>
				{/* Row */}
				<View
					style={StyleSheet.applyWidth(
						{
							alignItems: "center",
							flexDirection: "row",
							justifyContent: "space-between",
							padding: 16,
						},
						dimensions.width
					)}
				>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={StyleSheet.applyWidth(
							StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
								color: theme.colors["Grey600"],
								fontFamily: "Inter_400Regular",
								fontSize: 12,
								letterSpacing: 1.5,
								textTransform: "uppercase",
							}),
							dimensions.width
						)}
					>
						{"May Balance"}
					</Text>
				</View>
				{/* Container */}
				<View
					style={StyleSheet.applyWidth(
						{
							paddingBottom: 16,
							paddingLeft: 16,
							paddingRight: 16,
							paddingTop: 0,
						},
						dimensions.width
					)}
				>
					{/* ChartCard */}
					<View
						style={StyleSheet.applyWidth(
							{
								backgroundColor: "rgb(255, 255, 255)",
								borderRadius: 8,
								padding: 12,
							},
							dimensions.width
						)}
					>
						<Image
							resizeMode={"cover"}
							source={Images.EarningChart}
							style={StyleSheet.applyWidth(
								StyleSheet.compose(GlobalStyles.ImageStyles(theme)["Image"], {
									height: 150,
									width: "100%",
								}),
								dimensions.width
							)}
						/>
					</View>
				</View>
			</View>
		</AuthLayout>
	);
};

export default withTheme(EarningsScreen);
