import { withTheme } from "@draftbit/ui";
import { useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import * as GlobalStyles from "../../GlobalStyles.js";

import { View, Text } from "react-native";
import { TextInput } from "@draftbit/ui";
import React, { useId } from "react";

const TextArea = React.forwardRef((props, ref) => {
	const {
		type = "default",
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
			<View style={{ marginBottom: 24, width: "100%", ...dimensions.width }}>
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
					id={`text-area-${id}`}
					autoCapitalize={"none"}
					autoFocus={true}
					keyboardType={type}
					allowFontScaling={true}
					changeTextDelay={500}
					multiline={true}
					numberOfLines={4}
					onChangeText={(val) => onChange(val)}
					placeholder={
						placeholder
							? placeholder
							: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(
							GlobalStyles.TextInputStyles(theme)["Text Area"],
							{
								borderColor: theme.colors["Grey400"],
								color: theme.colors["Grey600"],
								fontFamily: "Inter_400Regular",
								fontSize: 12,
								lineHeight: 16,
								padding: 10,
								height: 100,
							}
						),
						dimensions.width
					)}
					textAlignVertical={"top"}
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

export default withTheme(TextArea);
