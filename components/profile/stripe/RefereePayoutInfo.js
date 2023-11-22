import React from "react";
import * as GlobalStyles from "../../../GlobalStyles.js";
import * as StyleSheet from "../../../utils/StyleSheet";
import { Button, withTheme } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";

const RefereePayoutInfo = (props) => {
	const dimensions = useWindowDimensions();
	const { theme } = props;

	return (
		<View
			style={StyleSheet.applyWidth(
				{ backgroundColor: "rgb(255, 255, 255)", padding: 20 },
				dimensions.width
			)}
		>
			<View
				style={StyleSheet.applyWidth(
					{
						borderColor: theme.colors["Grey300"],
						borderRadius: 16,
						borderWidth: 1,
						paddingBottom: 24,
						paddingLeft: 24,
						paddingRight: 24,
						paddingTop: 24,
					},
					dimensions.width
				)}
			>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
							color: theme.colors["Grey700"],
							fontFamily: "Inter_400Regular",
							fontSize: 21,
							lineHeight: 32,
							marginBottom: 16,
						}),
						dimensions.width
					)}
				>
					{"Refr Sports partners with Stripe for secure financial services"}
				</Text>

				<Text
					accessible={true}
					allowFontScaling={true}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
							color: theme.colors["Grey700"],
							fontFamily: "Inter_400Regular",
							lineHeight: 18,
							marginBottom: 24,
						}),
						dimensions.width
					)}
				>
					{
						"Add your bank to receive payouts. A payout is the transfer of founds from Stripe to your bank account. Link your account to seamlessly receive payouts."
					}
				</Text>

				<Button
					onPress={() => {
						const handler = async () => {
							console.log("Primary button ON_PRESS Start");
						};
						handler();
					}}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
							backgroundColor: "rgb(248, 211, 71)",
							borderRadius: 100,
							color: "rgb(39, 31, 1)",
							fontFamily: "Inter_500Medium",
							fontSize: 16,
							letterSpacing: 1.25,
							width: "100%",
						}),
						dimensions.width
					)}
					title={"Add payout option"}
				/>
			</View>
		</View>
	);
};

export default withTheme(RefereePayoutInfo);
