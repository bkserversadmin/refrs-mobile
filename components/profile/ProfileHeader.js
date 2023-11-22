import { withTheme } from "@draftbit/ui";
import { View, Text, useWindowDimensions, Image } from "react-native";
import Images from "../../config/Images";

const ProfileHeader = (props) => {
	const dimensions = useWindowDimensions();
	return (
		<View
			style={{
				alignContent: "center",
				alignItems: "center",
				padding: 20,
				...dimensions.width,
			}}
		>
			<View
				style={{
					alignItems: "center",
					flexDirection: "row",
					...dimensions.width,
				}}
			>
				<Image
					resizeMode={"cover"}
					source={Images.AvatarSm}
					className="w-20 h-20 cover-fill"
				/>
				<Text
					accessible={true}
					allowFontScaling={true}
					style={{
						fontFamily: "Inter_400Regular",
						fontSize: 24,
						marginLeft: 24,
						...dimensions.width,
					}}
					className="text-yellow-900"
				>
					John Doe
				</Text>
			</View>
			<View
				style={{
					alignItems: "center",
					flexDirection: "row",
					marginTop: 16,
					...dimensions.width,
				}}
			>
				<View
					style={{
						alignItems: "center",
						marginRight: 24,
						...dimensions.width,
					}}
				>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={{
							fontFamily: "Inter_400Regular",
							fontSize: 12,
							marginBottom: 12,
							...dimensions.width,
						}}
						className="text-gray-600"
					>
						Total games
					</Text>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={{
							fontFamily: "Inter_400Regular",
							fontSize: 20,
							letterSpacing: 0.15,
							...dimensions.width,
						}}
						className="text-yellow-900"
					>
						14
					</Text>
				</View>
				<View style={{ alignItems: "center", ...dimensions.width }}>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={{
							fontFamily: "Inter_400Regular",
							fontSize: 12,
							marginBottom: 12,
							...dimensions.width,
						}}
						className="text-gray-600"
					>
						Average pay per game
					</Text>
					<Text
						accessible={true}
						allowFontScaling={true}
						style={{
							fontFamily: "Inter_400Regular",
							fontSize: 20,
							letterSpacing: 0.15,
							...dimensions.width,
						}}
						className="text-yellow-900"
					>
						$25
					</Text>
				</View>
			</View>
		</View>
	);
};

export default withTheme(ProfileHeader);
