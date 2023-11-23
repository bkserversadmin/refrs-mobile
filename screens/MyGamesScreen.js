import React, { useState } from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as StyleSheet from "../utils/StyleSheet";
import { Button, TextInput, withTheme } from "@draftbit/ui";
import { useIsFocused } from "@react-navigation/native";
import {
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from "react-native";
import AuthLayout from "../components/layout/AuthLayout.js";
import GameItem from "../components/games/GameItem.js";
import GamesFilterModal from "../components/games/GamesFilterModal.js";
import TabButtom from "../components/ui/Tab.js";

const assignorTabOptions = [
	{
		text: "Your created games",
		slug: "created-games",
	},
	{
		text: "With referee vancancies",
		slug: "referee-vacancies",
	},
];

const MyGamesScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const [activeTab, setActiveTab] = useState("created-games");

	const isFocused = useIsFocused();
	React.useEffect(() => {}, [isFocused]);
	const [showFilters, setShowFilters] = useState(false);

	return (
		<AuthLayout name="Dashboard" navigation={navigation}>
			{/* Welcome */}
			<View
				style={{
					...dimensions.width,
				}}
				className="w-full py-2 px-4 h-24 flex flex-row bg-[rgba(245, 245, 245, 0)] items-center justify-between"
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
					Enrique sarmiento
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
					onChangeText={(val) => console.log("val search", val)}
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
				/>
			</View>
			<View className="w-full h-20 flex flex-row justify-between items-center px-4">
				{assignorTabOptions.map((tab) => (
					<View className="w-[48%]" key={tab?.slug}>
						<TabButtom
							theme={theme}
							text={tab?.text}
							isActive={activeTab === tab?.slug}
							onClick={() => setActiveTab(tab?.slug)}
						></TabButtom>
					</View>
				))}
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
