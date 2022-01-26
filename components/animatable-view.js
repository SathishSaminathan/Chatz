import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { OPACITY_TRANSLATE_ANIMATION } from "../constants/AppConstant";

const ViewAnimatable = Animatable.createAnimatableComponent(View);

const AnimatableView = ({
	children,
	style = {},
	index = 1,
	delay = 200,
	animationConfig = OPACITY_TRANSLATE_ANIMATION,
	animation = null,
	...rest
}) => {
	const viewDelay = delay + (index + 1) * 100;
	return (
		<ViewAnimatable
			useNativeDriver
			animation={animation ? animation : animationConfig}
			delay={viewDelay}
			style={[{}, style]}
			{...rest}
		>
			{children}
		</ViewAnimatable>
	);
};

export default AnimatableView;
