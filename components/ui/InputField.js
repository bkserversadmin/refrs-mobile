import { withTheme } from "@draftbit/ui";
import { useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles.js";

import { View, Text } from "react-native";
import { TextInput } from "@draftbit/ui";
import React, { useId } from "react";

const InputField = React.forwardRef((props, ref) => {
	const {
		type = "default",
		secureTextEntry = false,
		placeholder = null,
		error,
		extraClasses,
		onChange = null,
		value = null,
		errorColor = "default",
		label,
		secureText = false,
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

				<TextInput
					ref={ref}
					id={`field-${id}`}
					allowFontScaling={true}
					autoCapitalize={"none"}
					autoFocus={true}
					changeTextDelay={500}
					keyboardType={type}
					onChangeText={(value) => onChange(value)}
					placeholder={placeholder ? placeholder : "Enter a value..."}
					placeholderTextColor={theme.colors["Light"]}
					secureTextEntry={secureText}
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

export default withTheme(InputField);
