import React from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { Shadow, withTheme } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";

const EarningSummary = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;

	return (
		<Shadow
			paintInside={true}
			showShadowCornerBottomEnd={true}
			showShadowCornerBottomStart={true}
			showShadowCornerTopEnd={true}
			showShadowCornerTopStart={true}
			showShadowSideBottom={true}
			showShadowSideEnd={true}
			showShadowSideStart={true}
			showShadowSideTop={true}
			style={StyleSheet.applyWidth({ width: "100%" }, dimensions.width)}
		>
			<View
				style={{
					alignItems: "center",
					alignSelf: "center",
					backgroundColor: "rgb(255, 255, 255)",
					borderBottomLeftRadius: 24,
					borderBottomRightRadius: 24,
					padding: 24,
					width: "100%",
					...dimensions.width,
				}}
			>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={{
						color: theme.colors["Grey500"],
						fontFamily: "Inter_400Regular",
						fontSize: 12,
						letterSpacing: 1.5,
						marginBottom: 32,
						textTransform: "uppercase",
						...dimensions.width,
					}}
				>
					Earnings balance
				</Text>
				<View
					style={{
						alignItems: "center",
						marginBottom: 32,
						...dimensions.width,
					}}
				>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={{
							color: theme.colors["Grey600"],
							fontFamily: "Inter_400Regular",
							fontSize: 16,
							letterSpacing: 0.2,
							marginBottom: 8,
							...dimensions.width,
						}}
					>
						May 21 - 27
					</Text>

					<Text
						accessible={true}
						allowFontScaling={true}
						style={{
							color: theme.colors["Primary/Yellow800"],
							fontFamily: "Inter_400Regular",
							fontSize: 56,
							letterSpacing: 0.25,
							marginBottom: 8,
							...dimensions.width,
						}}
					>
						$805.00
					</Text>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={{
							color: theme.colors["Grey600"],
							fontFamily: "Inter_400Regular",
							fontSize: 16,
							letterSpacing: 0.2,
							...dimensions.width,
						}}
					>
						201 Games Scheduled
					</Text>
				</View>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={{
						color: theme.colors["Grey600"],
						fontFamily: "Inter_400Regular",
						fontSize: 12,
						letterSpacing: 0.4,
						...dimensions.width,
					}}
				>
					Next payout Thur, May 18
				</Text>
			</View>
		</Shadow>
	);
};

export default withTheme(EarningSummary);
