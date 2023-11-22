import React from "react";
import { withTheme } from "@draftbit/ui";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthLayout from "../components/layout/AuthLayout.js";

import { RefereProfile } from "../components/profile/RefereeProfile.js";

const ProfileScreen = (props) => {
	const { theme, navigation } = props;

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
