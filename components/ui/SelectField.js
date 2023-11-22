import { useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles.js";

import { View, Text } from "react-native";
import { Picker, withTheme } from "@draftbit/ui";
import React, { useId } from "react";

const SelectField = React.forwardRef((props, ref) => {
	const {
		options,
		placeholder = null,
		error,
		onChange = null,
		value = null,
		label,
		theme,
		...rest
	} = props;
	const id = useId();

	const dimensions = useWindowDimensions();

	return (
		<>
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
					{label}
				</Text>

				<Picker
					ref={ref}
					id={`select-${id}`}
					autoDismissKeyboard={true}
					dropDownBackgroundColor={theme.colors.background}
					dropDownBorderColor={theme.colors.divider}
					dropDownBorderRadius={8}
					dropDownBorderWidth={1}
					dropDownTextColor={theme.colors.strong}
					iconSize={24}
					leftIconMode={"inset"}
					mode={"native"}
					onValueChange={(value) => {
						onChange(value);
					}}
					options={options}
					placeholder={placeholder ? placeholder : "Select an option"}
					rightIconName={"Entypo/chevron-down"}
					selectedIconColor={theme.colors["Medium"]}
					selectedIconName={"Feather/check"}
					selectedIconSize={20}
					style={StyleSheet.applyWidth(
						{
							backgroundColor: "rgb(245, 245, 245)",
							borderColor: "rgba(0, 0, 0, 0)",
							color: "rgb(122, 122, 122)",
							fontFamily: "Inter_400Regular",
							fontSize: 16,
						},
						dimensions.width
					)}
					type={"solid"}
					value={value}
				/>
				{error && (
					<Text
						accessible={true}
						allowFontScaling={true}
						style={StyleSheet.applyWidth(
							StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
								color: theme.colors["System/Error500"],
							}),
							dimensions.width
						)}
					>
						{error}
					</Text>
				)}
			</View>
		</>
	);
});

export default withTheme(SelectField);
