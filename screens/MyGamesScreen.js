import React, { useState } from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as SupabaseStagingApi from "../apis/SupabaseStagingApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext";
import Images from "../config/Images";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import {
	Button,
	Icon,
	IconButton,
	MultiSelectPicker,
	ScreenContainer,
	Shadow,
	Slider,
	TextInput,
	Touchable,
	withTheme,
} from "@draftbit/ui";
import { useIsFocused } from "@react-navigation/native";
import {
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from "react-native";
import AuthLayout from "../components/layout/AuthLayout.js";
import GameItem from "../components/games/GameItem.js";
import BaseModal from "../components/ui/BaseModal.js";
import GamesFilterModal from "../components/games/GamesFilterModal.js";

const MyGamesScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;
	const setGlobalVariableValue = GlobalVariables.useSetValue();

	const isFocused = useIsFocused();
	React.useEffect(() => {
		const handler = async () => {
			console.log("Screen ON_SCREEN_FOCUS Start");
			let error = null;
			try {
				if (!isFocused) {
					return;
				}
				console.log("Start ON_SCREEN_FOCUS:0 EXTRACT_KEY");
				const profile_id_extract = Constants["user_session"]?.id;
				console.log("Complete ON_SCREEN_FOCUS:0 EXTRACT_KEY", {
					profile_id_extract,
				});
				console.log("Start ON_SCREEN_FOCUS:1 FETCH_REQUEST");
				const games = (
					await SupabaseStagingApi.getGamesAssignorGET(Constants, {
						profile_id: profile_id_extract,
					})
				)?.json;
				console.log("Complete ON_SCREEN_FOCUS:1 FETCH_REQUEST", { games });
				console.log("Start ON_SCREEN_FOCUS:2 CONSOLE_LOG");
				console.log(games, profile_id_extract);
				console.log("Complete ON_SCREEN_FOCUS:2 CONSOLE_LOG");
			} catch (err) {
				console.error(err);
				error = err.message ?? err;
			}
			console.log(
				"Screen ON_SCREEN_FOCUS Complete",
				error ? { error } : "no error"
			);
		};
		handler();
	}, [isFocused]);
	const [showFilters, setShowFilters] = useState(false);
	const [multiSelectPickerValue, setMultiSelectPickerValue] = useState([]);
	const [pickerValue, setPickerValue] = useState(undefined);
	const [slider2Value, setSlider2Value] = useState(0);
	const [sliderValue, setSliderValue] = useState(0);
	const [textInputValue, setTextInputValue] = useState("");

	return (
		<AuthLayout name="Dashboard" navigation={navigation}>
			{/* Welcome */}
			<View
				style={{
					alignItems: "center",
					alignSelf: "center",
					backgroundColor: "rgba(245, 245, 245, 0)",
					flexDirection: "row",
					height: 64,
					justifyContent: "space-between",
					paddingBottom: 12,
					paddingLeft: 16,
					paddingRight: 16,
					paddingTop: 12,
					width: "100%",
					...dimensions.width,
				}}
			>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
							color: "rgb(61, 61, 61)",
							fontFamily: "Inter_500Medium",
							fontSize: 20,
							letterSpacing: 0.15,
						}),
						dimensions.width
					)}
				>
					{"Welcome John"}
				</Text>
				<TouchableOpacity>
					<Button
						icon={"Feather/sliders"}
						onPress={() => setShowFilters(true)}
						style={StyleSheet.applyWidth(
							StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
								backgroundColor: "rgb(235, 235, 235)",
								borderColor: "rgb(201, 33, 33)",
								borderRadius: 100,
								color: "rgb(61, 61, 61)",
								fontFamily: "Inter_500Medium",
								fontSize: 16,
								letterSpacing: 1.25,
							}),
							dimensions.width
						)}
						title={"Filters"}
					/>
				</TouchableOpacity>
			</View>
			{/* Search */}
			<View
				style={StyleSheet.applyWidth(
					{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: "rgba(81, 71, 71, 0)",
						flexDirection: "row",
						height: 64,
						justifyContent: "space-between",
						paddingBottom: 12,
						paddingLeft: 16,
						paddingRight: 16,
						paddingTop: 12,
						width: "100%",
					},
					dimensions.width
				)}
			>
				<TextInput
					allowFontScaling={true}
					autoCapitalize={"none"}
					changeTextDelay={500}
					onChangeText={(newTextInputValue) => {
						const textInputValue = newTextInputValue;
						try {
							setTextInputValue(newTextInputValue);
						} catch (err) {
							console.error(err);
						}
					}}
					placeholder={"Enter a value..."}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(
							GlobalStyles.TextInputStyles(theme)["Text Input"],
							{
								backgroundColor: "rgb(255, 255, 255)",
								fontFamily: "Inter_400Regular",
								letterSpacing: 0.25,
								paddingBottom: 15,
								paddingLeft: 12,
								paddingRight: 16,
								paddingTop: 15,
								width: "100%",
							}
						),
						dimensions.width
					)}
					value={textInputValue}
				/>
			</View>
			{/* Upcoming Games Content */}
			<View>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={StyleSheet.applyWidth(
						StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
							color: "rgb(61, 61, 61)",
							fontFamily: "Inter_400Regular",
							fontSize: 16,
							letterSpacing: 0.15,
							padding: 16,
						}),
						dimensions.width
					)}
				>
					Upcoming Game Schedule
				</Text>

				<View
					style={{
						backgroundColor: "rgb(255, 255, 255)",
						borderRadius: 8,
						padding: 16,
						width: "100%",
						...dimensions.width,
					}}
				>
					<GameItem />
					<GameItem />
					<GameItem />
					<GameItem />
				</View>
			</View>
			{/* Modal Fiter Game Referee */}
			<>
				<GamesFilterModal
					isOpen={showFilters}
					onClose={() => setShowFilters(false)}
				/>
			</>
		</AuthLayout>
	);
};

export default withTheme(MyGamesScreen);
