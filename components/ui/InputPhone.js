import { withTheme } from "@draftbit/ui";
import { useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles.js";

import { View, Text } from "react-native";
import { TextInput } from "@draftbit/ui";
import React, { useId } from "react";

const InputPhone = React.forwardRef((props, ref) => {
	const {
		type = "phone-pad",
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

	const normalizeInput = (value) => {
		// return nothing if no value
		if (!value) return value;

		// only allows 0-9 inputs
		const formatted = value.replace(/[^\d]/g, "");
		const cvLength = formatted.length;

		// returns: "x", "xx", "xxx"
		if (cvLength < 4) return formatted;

		// returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
		if (cvLength < 7) return `(${formatted.slice(0, 3)}) ${formatted.slice(3)}`;

		// returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
		return `(${formatted.slice(0, 3)}) ${formatted.slice(
			3,
			6
		)}-${formatted.slice(6, 10)}`;
	};

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

				<TextInput
					ref={ref}
					id={`field-${id}`}
					allowFontScaling={true}
					autoCapitalize={"none"}
					autoFocus={true}
					changeTextDelay={500}
					keyboardType={type}
					onChangeText={(value) => onChange(normalizeInput(value))}
					placeholder={placeholder ? placeholder : "Enter a value..."}
					placeholderTextColor={theme.colors["Light"]}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(
							GlobalStyles.TextInputStyles(theme)["Text Input"],
							{
								backgroundColor: "rgb(245, 245, 245)",
								color: "rgb(122, 122, 122)",
								fontFamily: "Inter_400Regular",
								fontSize: 16,
								paddingBottom: 20,
								paddingLeft: 16,
								paddingRight: 16,
								paddingTop: 20,
								textTransform: "none",
								width: "100%",
							}
						),
						dimensions.width
					)}
					value={value}
					{...rest}
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

export default withTheme(InputPhone);
