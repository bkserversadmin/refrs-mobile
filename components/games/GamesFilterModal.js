import { withTheme, MultiSelectPicker, Slider, Button } from "@draftbit/ui";
import { View, Text, useWindowDimensions } from "react-native";
import * as GlobalStyles from "../../GlobalStyles";
import * as StyleSheet from "../../utils/StyleSheet";
import BaseModal from "../ui/BaseModal";

const GamesFilterModal = (props) => {
	const { theme, isOpen, onClose } = props;
	const dimensions = useWindowDimensions();
	return (
		<BaseModal isOpen={isOpen} title="Filter games" onClose={onClose}>
			<View style={{ alignContent: "flex-end" }}>
				<View
					style={StyleSheet.applyWidth(
						{ marginBottom: 24, width: "100%" },
						dimensions.width
					)}
				>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={StyleSheet.applyWidth(
							StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
								color: "rgb(92, 92, 92)",
								fontFamily: "Inter_500Medium",
								fontSize: 10,
								letterSpacing: 1.5,
								marginBottom: 8,
								paddingLeft: 16,
								textTransform: "uppercase",
							}),
							dimensions.width
						)}
					>
						Other filters
					</Text>
					<MultiSelectPicker
						autoDismissKeyboard={true}
						dropDownBackgroundColor={theme.colors.background}
						dropDownBorderColor={theme.colors.divider}
						dropDownBorderRadius={8}
						dropDownBorderWidth={1}
						dropDownTextColor={theme.colors.strong}
						iconSize={24}
						leftIconMode={"inset"}
						// onValueChange={(val) => console.log("picke change value", val)}
						placeholder={"State"}
						rightIconName={"Entypo/chevron-small-down"}
						selectedIconColor={theme.colors.strong}
						selectedIconName={"Feather/check"}
						selectedIconSize={20}
						style={StyleSheet.applyWidth(
							{
								backgroundColor: theme.colors["Grey200"],
								borderRadius: 8,
								marginBottom: 16,
							},
							dimensions.width
						)}
						type={"solid"}
					/>

					<MultiSelectPicker
						autoDismissKeyboard={true}
						dropDownBackgroundColor={theme.colors.background}
						dropDownBorderColor={theme.colors.divider}
						dropDownBorderRadius={8}
						dropDownBorderWidth={1}
						dropDownTextColor={theme.colors.strong}
						iconSize={24}
						leftIconMode={"inset"}
						// onValueChange={(val) => console.log("picke change value", val)}
						placeholder={"City"}
						rightIconName={"Entypo/chevron-small-down"}
						selectedIconColor={theme.colors.strong}
						selectedIconName={"Feather/check"}
						selectedIconSize={20}
						style={StyleSheet.applyWidth(
							{
								backgroundColor: theme.colors["Grey200"],
								borderRadius: 8,
								marginBottom: 16,
							},
							dimensions.width
						)}
						type={"solid"}
					/>

					<MultiSelectPicker
						autoDismissKeyboard={true}
						dropDownBackgroundColor={theme.colors.background}
						dropDownBorderColor={theme.colors.divider}
						dropDownBorderRadius={8}
						dropDownBorderWidth={1}
						dropDownTextColor={theme.colors.strong}
						iconSize={24}
						leftIconMode={"inset"}
						// onValueChange={(val) => console.log("picke change value", val)}
						placeholder={"Sport"}
						rightIconName={"Entypo/chevron-small-down"}
						selectedIconColor={theme.colors.strong}
						selectedIconName={"Feather/check"}
						selectedIconSize={20}
						style={StyleSheet.applyWidth(
							{
								backgroundColor: theme.colors["Grey200"],
								borderRadius: 8,
								marginBottom: 16,
							},
							dimensions.width
						)}
						type={"solid"}
					/>

					<MultiSelectPicker
						autoDismissKeyboard={true}
						dropDownBackgroundColor={theme.colors.background}
						dropDownBorderColor={theme.colors.divider}
						dropDownBorderRadius={8}
						dropDownBorderWidth={1}
						dropDownTextColor={theme.colors.strong}
						iconSize={24}
						leftIconMode={"inset"}
						// onValueChange={(val) => console.log("picke change value", val)}
						placeholder={"Level"}
						rightIconName={"Entypo/chevron-small-down"}
						selectedIconColor={theme.colors.strong}
						selectedIconName={"Feather/check"}
						selectedIconSize={20}
						style={StyleSheet.applyWidth(
							{
								backgroundColor: theme.colors["Grey200"],
								borderRadius: 8,
							},
							dimensions.width
						)}
						type={"solid"}
					/>
				</View>

				<View
					style={StyleSheet.applyWidth({ marginBottom: 24 }, dimensions.width)}
				>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={StyleSheet.applyWidth(
							StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
								color: "rgb(92, 92, 92)",
								fontFamily: "Inter_500Medium",
								fontSize: 10,
								letterSpacing: 1.5,
								marginBottom: 8,
								paddingLeft: 16,
								textTransform: "uppercase",
							}),
							dimensions.width
						)}
					>
						minimum compensation
					</Text>
					<Slider
						maximumTrackTintColor={theme.colors["Grey400"]}
						minimumTrackTintColor={theme.colors["Primary/Yellow400"]}
						// onValueChange={(val) => console.log("slider change value", val)}
						style={StyleSheet.applyWidth(
							GlobalStyles.SliderStyles(theme)["Slider"],
							dimensions.width
						)}
						thumbTintColor={theme.colors["Primary/Yellow400"]}
					/>
				</View>
			</View>

			<View
				style={StyleSheet.applyWidth(
					{
						alignContent: "flex-end",
						alignItems: "flex-end",
						alignSelf: "auto",
						width: "100%",
					},
					dimensions.width
				)}
			>
				<Button
					// onPress={() => console.log("on pres ===>")}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
							backgroundColor: "rgb(248, 211, 71)",
							borderRadius: 100,
							color: "rgb(39, 31, 1)",
							fontFamily: "Inter_500Medium",
							fontSize: 16,
							letterSpacing: 1.25,
							width: 120,
						}),
						dimensions.width
					)}
					title={"Confirm"}
				/>
			</View>
		</BaseModal>
	);
};

export default withTheme(GamesFilterModal);
