import { withTheme, Touchable, Button } from "@draftbit/ui";
import { useCallback } from "react";

import { View, Text } from "react-native";

const TabButton = (props) => {
	const { theme, text, isActive, onClick } = props;

	const buttonClasses = useCallback(() => {
		return `w-full py-3 rounded-md px-3 text-center flex justify-center items-center
         ${isActive ? "bg-yellow-400" : "opacity-75 bg-slate-50"}
      `;
	}, [isActive]);

	return (
		<Touchable
			style={{
				width: "100%",
			}}
			onPress={() => onClick()}
		>
			<View className={buttonClasses()}>
				<Text
					style={{
						fontFamily: "System",
						fontWeight: "400",
						letterSpacing: 0.25,
					}}
					className="capitalize text-center mx-auto text-xs"
				>
					{text}
				</Text>
			</View>
		</Touchable>
	);
};

export default withTheme(TabButton);
