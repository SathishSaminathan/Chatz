import React from 'react';
import { Text } from 'react-native';
import { FontType } from '../constants/AppConstant';
import { Colors, FONT_SIZE } from '../constants/ThemeConstants';

const TextComponent = ({ color = Colors.black, fontSize = FONT_SIZE.REGULAR, type, numberOfLines = 3, rupee = null, animate = null, ...rest }) => {
	const { children, style, onPress } = rest;
	const getFontFamily = (type) => {
		switch (type) {
			case FontType.REGULAR:
				return 'ProximaNova-Regular';
			case FontType.LIGHT:
				return 'ProximaNova-Light';
			case FontType.SEMIBOLD:
				return 'ProximaNova-Extrabld';
			case FontType.BOLD:
				return 'ProximaNova-Bold';
			default:
				return 'ProximaNova-Light';
		}
	};
	return (
		<Text
			{...{
				numberOfLines,
				...rest,
				style: [
					{
						fontFamily: getFontFamily(type),
						fontSize,
						color,
					},
					style,
				],
				...(animate && { transition }),
			}}>
			{children}
		</Text>
	);
};

export default TextComponent;

TextComponent.defaultProps = {
	type: FontType.REGULAR,
};
