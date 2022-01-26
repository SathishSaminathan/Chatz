import React from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Feather from 'react-native-vector-icons/Feather';
import { RFPercentage, SPACING } from 'react-native-responsive-fontsize';
import { Colors } from '../constants/ThemeConstants';
import { FontType } from '../constants/AppConstant';
import TextComponent from './text';

const ButtonComponent = (props) => {
	const {
		children,
		style,
		loading,
		onPress,
		icon,
		round,
		borderRadius = 4,
		fontColor = Colors.white,
		disabled = false,
		outline = false,
		danger = false,
		success = false,
		textStyle = {},
	} = props;
	return (
		<Ripple
			{...{ disabled }}
			rippleContainerBorderRadius={borderRadius}
			rippleColor={loading ? Colors.transparent : Colors.white}
			rippleSize={180}
			onPress={!loading && onPress}
			style={[
				{
					backgroundColor: loading || disabled ? Colors.accordionBorderColor : (style && style.backgroundColor) || Colors.primaryThemeColor,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: borderRadius,
					paddingHorizontal: RFPercentage(2),
					borderColor: loading || disabled ? Colors.accordionBorderColor : Colors.primaryThemeColor,
					borderWidth: 2,
					height: (style && style.height) || RFPercentage(Platform.OS === 'android' ? 6 : 6),
				},
				{
					...style,
					...(outline && { backgroundColor: Colors.white, borderColor: Colors.primaryThemeColor, ...style }),
					...(danger && { backgroundColor: Colors.red, borderColor: Colors.red }),
					...(success && { backgroundColor: Colors.success, borderColor: Colors.success }),
				},
			]}>
			<View
				style={[
					{
						backgroundColor: Colors.transparent,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
						backgroundColor: `${loading ? Colors.transparent : Colors.transparent}`,
						borderRadius: round ? 20 : 0,
					},
				]}>
				<View style={{ flex: 1 }}>{/* <TextComponent>{''}</TextComponent> */}</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						flex: 8,
					}}>
					<View style={{ flex: 8, alignItems: 'center' }}>
						<TextComponent
							type={FontType.BOLD}
							style={{
								fontSize: (style && style.fontSize) || SPACING.NORMAL,
								color: (style && style.color) || Colors.white,
								...textStyle,
								...(outline && { color: Colors.primaryThemeColor, ...textStyle }),
							}}>
							{children}
						</TextComponent>
					</View>

					{!loading && icon && <Feather style={{ fontSize: 25 }} name="arrow-right" />}
				</View>
				<View style={{ flex: 1 }}>
					{loading && <ActivityIndicator style={{ paddingLeft: 10 }} color={Colors.white} size="small"></ActivityIndicator>}
				</View>
			</View>
		</Ripple>
	);
};

export default ButtonComponent;
