import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, FONT_SIZE } from '../constants/ThemeConstants';
import TextComponent from './text';

const GradientButton = ({ children, onPress, style, colors = [Colors.primaryLightThemeColor, Colors.primaryThemeColor], ...rest }) => (
	<TouchableOpacity activeOpacity={1} onPress={onPress} {...rest}>
		<LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 }} colors={colors} style={[styles.button, style]}>
			<TextComponent
				style={[
					styles.textSign,
					{
						color: '#fff',
					},
				]}>
				{children}
			</TextComponent>
		</LinearGradient>
	</TouchableOpacity>
);

export default GradientButton;

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
	},
	textSign: {
		fontSize: FONT_SIZE.LARGE,
		fontWeight: 'bold',
	},
});
