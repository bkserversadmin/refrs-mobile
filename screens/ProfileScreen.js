import React from "react";
import { withTheme } from "@draftbit/ui";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthLayout from "../components/layout/AuthLayout.js";

import { RefereProfile } from "../components/profile/RefereeProfile.js";
import { AssignorProfile } from "../components/profile/AssignorProfile.js";
import { SportProfile } from "../components/profile/SportProfile.js";

const ProfileScreen = (props) => {
	const { theme, navigation } = props;

	return (
		<AuthLayout name="Profile" navigation={navigation}>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={"never"}
				showsVerticalScrollIndicator={true}
			>
				<RefereProfile theme={theme} />
				{/* <AssignorProfile theme={theme} />
				<SportProfile theme={theme} /> */}
			</KeyboardAwareScrollView>
		</AuthLayout>
	);
};

export default withTheme(ProfileScreen);
