import { withTheme, ScreenContainer } from "@draftbit/ui";
import { SafeAreaView, ScrollView, useWindowDimensions } from "react-native";
import { useCallback } from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import Header from "../ui/Header.js";

const AuthLayout = (props) => {
	const {
		name,
		children,
		navigation,
		noTabBar = false,
		canGoBackToolBar = false,
	} = props;
	const dimensions = useWindowDimensions();

	const viewClasses = useCallback(() => {
		return !noTabBar ? "mb-20" : "";
	}, [noTabBar]);

	return (
		<ScreenContainer
			hasSafeArea={false}
			scrollable={false}
			style={StyleSheet.applyWidth(
				{ backgroundColor: "rgb(61, 61, 61)" },
				dimensions.width
			)}
			hasTopSafeArea={true}
		>
			<SafeAreaView
				style={{ backgroundColor: "rgb(245, 245, 245)" }}
				className="h-full w-full"
			>
				{/* Header */}
				<Header
					name={name}
					navigation={navigation}
					canGoBack={canGoBackToolBar}
				/>

				<ScrollView
					bounces={true}
					showsHorizontalScrollIndicator={true}
					showsVerticalScrollIndicator={true}
					className={viewClasses()}
				>
					{children}
				</ScrollView>
			</SafeAreaView>
		</ScreenContainer>
	);
};

export default withTheme(AuthLayout);
