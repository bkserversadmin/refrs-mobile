import { withTheme, Button } from "@draftbit/ui";
import { Text, View, useWindowDimensions } from "react-native";
import * as GlobalStyles from "../../../GlobalStyles.js";
import * as StyleSheet from "../../../utils/StyleSheet.js";
import InputField from "../../ui/InputField.js";
import InputPhone from "../../ui/InputPhone";
import SelectField from "../../ui/SelectField.js";
import TextArea from "../../ui/TextArea.js";

export const SportProfileForm = (props) => {
	const { theme } = props;
	const dimensions = useWindowDimensions();

	return (
		<>
			<View>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
							color: theme.colors["Primary/Yellow900"],
							fontFamily: "Inter_400Regular",
							fontSize: 16,
							letterSpacing: 0.15,
							marginBottom: 20,
						}),
						dimensions.width
					)}
				>
					Detailed information
				</Text>

				<InputField
					placeholder="Sport Organization"
					label="Sport Organization"
					theme={theme}
				/>
				<SelectField
					options={[]}
					placeholder={"Select an option"}
					label="Sports"
					theme={theme}
				/>
				<SelectField
					options={[]}
					placeholder={"Select an option"}
					label="State"
					theme={theme}
				/>
				<SelectField
					options={[]}
					placeholder={"Select an option"}
					label="City"
					theme={theme}
				/>

				<InputPhone
					label="Contact Number"
					placeholder="xxx-xxxx"
					onChange={(val) => console.log("el val phone ===>", val)}
					theme={theme}
				/>
				<InputField placeholder="email" label="email" theme={theme} />

				<TextArea
					theme={theme}
					label="About this Sport organization"
					onChange={(val) => console.log("el val", val)}
				/>

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
					title={"Save changes"}
				/>
			</View>
		</>
	);
};

export default withTheme(SportProfileForm);
