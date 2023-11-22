import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as SupabaseStagingApi from "../apis/SupabaseStagingApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext.js";
import Images from "../config/Images.js";
import Breakpoints from "../utils/Breakpoints.js";
import * as StyleSheet from "../utils/StyleSheet.js";
import {
	Button,
	Icon,
	NumberInput,
	ScreenContainer,
	TextInput,
	Touchable,
	withTheme,
} from "@draftbit/ui";
import {
	Image,
	ScrollView,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthLayout from "../components/layout/AuthLayout.js";
import InputField from "../components/ui/InputField.js";
import SelectField from "../components/ui/SelectField.js";
import InputPhone from "../components/ui/InputPhone.js";
import TextArea from "../components/ui/TextArea.js";
import TabButton from "../components/ui/Tab.js";
import ProfileHeader from "../components/profile/ProfileHeader.js";
import { RefereProfile } from "../components/profile/RefereeProfile.js";

const ProfileScreen = (props) => {
	const dimensions = useWindowDimensions();
	const { theme, navigation } = props;
	const Constants = GlobalVariables.useValues();
	const Variables = Constants;
	const setGlobalVariableValue = GlobalVariables.useSetValue();

	const [numberInputValue, setNumberInputValue] = React.useState("");
	const [textAreaValue, setTextAreaValue] = React.useState("");
	const [textInputValue, setTextInputValue] = React.useState("");

	return (
		<AuthLayout name="Profile" navigation={navigation}>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={"never"}
				showsVerticalScrollIndicator={true}
			>
				<RefereProfile theme={theme} />
			</KeyboardAwareScrollView>
		</AuthLayout>
	);
};

export default withTheme(ProfileScreen);
