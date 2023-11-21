import * as React from "react";
import { I18nManager, Platform, Text, View, Image } from "react-native";
import { systemWeights } from "react-native-typography";
import { Icon, Touchable } from "@draftbit/ui";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "./themes/Draftbit.js";
import LinkingConfiguration from "./LinkingConfiguration.js";

import AssignorHomeCreatedGamesScreen from "./screens/AssignorHomeCreatedGamesScreen";
import AssignorHomeRefereeVacanciesScreen from "./screens/AssignorHomeRefereeVacanciesScreen";
import DashboardScreen from "./screens/DashboardScreen";
import EarningsDetailsScreen from "./screens/EarningsDetailsScreen";
import EarningsScreen from "./screens/EarningsScreen";
import GameDetailsScreen from "./screens/GameDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import MyGamesScreen from "./screens/MyGamesScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfilePayoutInformationScreen from "./screens/ProfilePayoutInformationScreen";
import ProfilePersonalInformationScreen from "./screens/ProfilePersonalInformationScreen";
import RegisterScreen from "./screens/RegisterScreen";
import * as StyleSheet from "./utils/StyleSheet";
import * as GlobalStyles from "./GlobalStyles.js";
import Images from "./config/Images";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabButton = (label, iconName, focused, isProfile) => {
	if (isProfile) {
		return (
			<View className="w-full h-full flex items-center p-3 ">
				<View
					className={`m-auto flex flex-col items-center justify-center w-14 h-14 rounded-full p-1 ${
						focused ? "bg-[#F8D347]" : ""
					} `}
				>
					<Image
						resizeMode={"cover"}
						source={{
							uri: "https://ui-avatars.com/api/?name=Enrique+Sarmiento",
						}}
						className="h-full w-full rounded-full"
					/>
				</View>
			</View>
		);
	}
	return (
		<View className="w-full h-full flex items-center p-3 ">
			<View
				className={`m-auto flex flex-col items-center justify-center w-full h-full rounded-md ${
					focused ? "bg-[#F8D347]" : ""
				} `}
			>
				<Icon
					color={theme.colors["Grey600"]}
					name={iconName}
					size={24}
					style={StyleSheet.applyWidth({ marginBottom: 4 })}
				/>
				{label && (
					<Text
						accessible={true}
						allowFontScaling={true}
						style={StyleSheet.applyWidth(
							StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
								color: theme.colors["Grey700"],
								fontFamily: "Inter_500Medium",
								letterSpacing: 1.25,
							})
						)}
					>
						{label}
					</Text>
				)}
			</View>
		</View>
	);
};

const MainTabNavigator = (props) => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					position: "absolute",
					elevation: 0,
					bottom: 0,
					left: 0,
					right: 0,
					backgroundColor: "#ffffff",
					height: 110,
				},
			}}
		>
			{/* <Tab.Screen
				name="DashboardScreen"
				component={DashboardScreen}
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						tabButton(
							"Dashboard",
							"MaterialCommunityIcons/whistle-outline",
							focused
						),
				}}
			/> */}
			<Tab.Screen
				name="MyGamesScreen"
				component={MyGamesScreen}
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						tabButton(
							"My Games",
							"MaterialCommunityIcons/whistle-outline",
							focused
						),
				}}
			/>
			<Tab.Screen
				name="EarningsDetailsScreen"
				component={EarningsDetailsScreen}
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						tabButton("Earnings", "MaterialIcons/attach-money", focused),
				}}
			/>
			<Tab.Screen
				name="ProfilePayoutInformationScreen"
				component={ProfilePayoutInformationScreen}
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						tabButton("Profile", null, focused, true),
				}}
			/>
		</Tab.Navigator>
	);
};

function Placeholder() {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#131A2A",
				justifyContent: "center",
				alignItems: "center",
				padding: 36,
			}}
		>
			<Text
				style={{
					textAlign: "center",
					fontSize: 24,
					fontWeight: "bold",
					marginBottom: 12,
					color: "#FFF",
				}}
			>
				Missing Screen
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 16,
					color: "#FFF",
					marginBottom: 8,
				}}
			>
				This screen is not in a navigator.
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 16,
					color: "#FFF",
					marginBottom: 8,
				}}
			>
				Go to Navigation mode, and click the + (plus) icon in the Navigator tab
				on the left side to add this screen to a Navigator.
			</Text>
			<Text style={{ textAlign: "center", fontSize: 16, color: "#FFF" }}>
				If the screen is in a Tab Navigator, make sure the screen is assigned to
				a tab in the Config panel on the right.
			</Text>
		</View>
	);
}

export default function RootAppNavigator() {
	return (
		<NavigationContainer linking={LinkingConfiguration}>
			<Stack.Navigator
				initialRouteName="LoginScreen"
				screenOptions={{
					animationEnabled: true,
				}}
			>
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{
						title: "Login",
					}}
				/>
				<Stack.Screen
					name="DashboardScreen"
					component={MainTabNavigator}
					options={{
						title: "Dashboard",
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="RegisterScreen"
					component={RegisterScreen}
					options={{
						title: "Register",
						headerLeft: () => null,
					}}
				/>
				{/* <Stack.Screen
					name="EarningsScreen"
					component={EarningsScreen}
					options={{
						title: "Earnings",
					}}
				/>
				<Stack.Screen
					name="EarningsDetailsScreen"
					component={EarningsDetailsScreen}
					options={{
						title: "Earnings Details",
					}}
				/> */}
				{/* <Stack.Screen
					name="ProfilePersonalInformationScreen"
					component={ProfilePersonalInformationScreen}
					options={{
						title: "Profile - Personal information",
					}}
				/>
				<Stack.Screen
					name="ProfilePayoutInformationScreen"
					component={ProfilePayoutInformationScreen}
					options={{
						title: "Profile - Payout information ",
					}}
				/>
				<Stack.Screen
					name="NotificationsScreen"
					component={NotificationsScreen}
					options={{
						title: "Notifications",
					}}
				/> */}
				{/* <Stack.Screen
					name="GameDetailsScreen"
					component={GameDetailsScreen}
					options={{
						title: "Game Details",
					}}
				/>
				<Stack.Screen
					name="MyGamesScreen"
					component={MyGamesScreen}
					options={{
						title: "My Games",
					}}
				/>
				<Stack.Screen
					name="AssignorHomeCreatedGamesScreen"
					component={AssignorHomeCreatedGamesScreen}
					options={{
						title: "[Assignor]Home - Created games",
					}}
				/>
				<Stack.Screen
					name="AssignorHomeRefereeVacanciesScreen"
					component={AssignorHomeRefereeVacanciesScreen}
					options={{
						title: "[Assignor]Home - Referee vacancies",
					}}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
