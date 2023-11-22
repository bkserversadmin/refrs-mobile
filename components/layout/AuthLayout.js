import { withTheme, ScreenContainer } from "@draftbit/ui";
import { SafeAreaView, ScrollView, useWindowDimensions } from "react-native";
import * as StyleSheet from "../../utils/StyleSheet";
import Header from "../ui/Header.js";

const AuthLayout = (props) => {
	const { name, children, navigation } = props;
	const dimensions = useWindowDimensions();

	return (
		<ScreenContainer
			hasSafeArea={false}
			scrollable={false}
			style={StyleSheet.applyWidth(
				{ backgroundColor: "rgb(61, 61, 61)" },
				// { backgroundColor: "rgb(245, 245, 245)" },
				dimensions.width
			)}
			hasTopSafeArea={true}
		>
			<SafeAreaView
				style={{ backgroundColor: "rgb(245, 245, 245)" }}
				className="h-full w-full"
			>
				{/* Header */}
				<Header name={name} navigation={navigation} />

				<ScrollView
					bounces={true}
					showsHorizontalScrollIndicator={true}
					showsVerticalScrollIndicator={true}
					className="mb-20"
				>
					{children}
				</ScrollView>
			</SafeAreaView>
		</ScreenContainer>
	);
};

export default withTheme(AuthLayout);
