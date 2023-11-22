import { withTheme, Button } from "@draftbit/ui";
import { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet.js";
import ProfileHeader from "./ProfileHeader.js";
import TabButton from "../ui/Tab.js";
import AssignorProfileForm from "./forms/AssignorProfileForm.js";
import PayoutInfo from "./stripe/PayoutInfo.js";

const optionsTab = [
	{
		text: "Account information",
		slug: "personal-information",
	},
	{
		text: "payout information",
		slug: "payout-information",
	},
];

export const AssignorProfile = (props) => {
	const { theme } = props;
	const dimensions = useWindowDimensions();

	const [activeTab, setActiveTab] = useState("personal-information");

	return (
		<>
			<ProfileHeader />
			<View
				style={StyleSheet.applyWidth(
					{ backgroundColor: "rgb(255, 255, 255)", padding: 20 },
					dimensions.width
				)}
			>
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "flex-start",
						marginBottom: 24,
						paddingBottom: 8,
						paddingTop: 8,
						...dimensions.width,
					}}
				>
					{optionsTab.map((tab) => (
						<View className="w-1/2" key={tab?.slug}>
							<TabButton
								theme={theme}
								text={tab?.text}
								isActive={activeTab === tab?.slug}
								onClick={() => setActiveTab(tab?.slug)}
							/>
						</View>
					))}
					<View className="w-1/2">
						<TabButton theme={theme} text="Payout Information" />
					</View>
				</View>
				{activeTab === "personal-information" ? (
					<AssignorProfileForm theme={theme} />
				) : (
					<PayoutInfo theme={theme} />
				)}
			</View>
		</>
	);
};

export default withTheme(AssignorProfile);
