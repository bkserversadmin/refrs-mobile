import {
	withTheme,
	Shadow,
	IconButton,
	MultiSelectPicker,
	Slider,
	Button,
	Touchable,
} from "@draftbit/ui";
import * as GlobalStyles from "../../GlobalStyles";
import * as StyleSheet from "../../utils/StyleSheet";
import { View, Text, Modal, useWindowDimensions } from "react-native";
import { useOutsideClick } from "../../hooks/use-aoutside-click";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const BaseModal = (props) => {
	const { isOpen, theme, children, title, onClose } = props;
	const dimensions = useWindowDimensions();

	return (
		<Modal
			visible={isOpen}
			transparent={true}
			// animationType="slide"
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
				onClose();
			}}
			style={{
				top: 0,
				left: 0,
				right: 0,
				padding: 0,
				margin: 0,
				marginHorizontal: 0,
				justifyContent: "flex-end",
			}}
		>
			<View className="w-full h-full flex justify-center items-center">
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
					style={{
						width: 300,
					}}
				>
					<View
						style={{
							alignContent: "flex-start",
							alignItems: "stretch",
							alignSelf: "auto",
							backgroundColor: "rgb(255, 255, 255)",
							borderRadius: 24,
							padding: 24,
							position: "relative",
							...dimensions.width,
						}}
					>
						<View
							style={{
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "space-between",
								marginBottom: 32,
								...dimensions.width,
							}}
						>
							<Text
								accessible={true}
								allowFontScaling={true}
								style={StyleSheet.applyWidth(
									StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
										color: theme.colors["Grey600"],
										fontFamily: "Inter_400Regular",
										fontSize: 16,
										letterSpacing: 0.25,
									}),
									dimensions.width
								)}
							>
								{title}
							</Text>
							<IconButton
								color={theme.colors["Grey600"]}
								icon={"AntDesign/close"}
								onPress={() => {
									onClose();
								}}
								size={20}
							/>
						</View>
						{children}
					</View>
				</Shadow>
			</View>
		</Modal>
	);
};

export default withTheme(BaseModal);
