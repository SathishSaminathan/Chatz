import React from "react";
import { ScrollView, View } from "react-native";
import { Colors, SPACING } from "../constants/ThemeConstants";

const Content = ({
	children,
	noPadding = false,
	scroll = false,
	style = {},
	contentContainerStyle = {},
	...rest
}) => {
	const Component = scroll ? ScrollView : View;
	return (
		<Component
			{...{
				...(scroll
					? {
							contentContainerStyle: {
								flexGrow: 1,
								padding: SPACING.NORMAL,
								backgroundColor: Colors.white,
								...contentContainerStyle,
								...(noPadding && { padding: 0 }),
							},
							scrollIndicatorInsets: { right: 1 },
					  }
					: {
							style: {
								flex: 1,
								backgroundColor: Colors.white,
								padding: SPACING.NORMAL,
								...style,
							},
					  }),
				...(noPadding && { padding: 0 }),
			}}
			{...rest}
		>
			{children}
		</Component>
	);
};

export default Content;
