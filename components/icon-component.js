import React from 'react';
import { FONT_SIZE } from '../constants/ThemeConstants';

const IconComponent = ({ style, type, name, size = FONT_SIZE.REGULAR, color, onPress }) => {
	const renderIcons = () => {
		let Icon = null;
		Icon = type;
		return <Icon onPress={onPress} style={style} name={name} size={size} color={color} />;
	};

	return <>{renderIcons()}</>;
};

export default IconComponent;
