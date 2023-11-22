import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as SupabaseStagingApi from "../apis/SupabaseStagingApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext";
import Images from "../config/Images";
import getFormattedDate from "../global-functions/getFormattedDate";
import getRefereesOnGame from "../global-functions/getRefereesOnGame";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import {
	Button,
	Icon,
	Link,
	ScreenContainer,
	TextInput,
	Touchable,
	withTheme,
} from "@draftbit/ui";
import { useIsFocused } from "@react-navigation/native";
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import { Fetch } from "react-request";
import Header from "../components/ui/Header.js";
import AuthLayout from "../components/layout/AuthLayout.js";
import { SafeAreaView } from "react-native-web";

const DashboardScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;

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

	const [textInputValue, setTextInputValue] = React.useState("");

	return (
		<ScreenContainer
			hasSafeArea={true}
			scrollable={false}
			style={StyleSheet.applyWidth(
				{ backgroundColor: "rgb(245, 245, 245)" },
				dimensions.width
			)}
		>
			<Header name="Dashboard" navigatio={navigation} />

			<ScrollView
				bounces={true}
				showsHorizontalScrollIndicator={true}
				showsVerticalScrollIndicator={true}
			></ScrollView>
		</ScreenContainer>
	);
};

export default withTheme(DashboardScreen);
