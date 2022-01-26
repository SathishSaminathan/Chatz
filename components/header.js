import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextComponent from './text';
import { FontType, IconType } from '../constants/AppConstant';
import { Colors, SPACING } from '../constants/ThemeConstants';
import IconComponent from './icon-component';

const Header = ({ title, leftIcon = null, rightIcon = null, back = false, rightIconClick, handleBackClick = null }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.headerContainer}>
			{leftIcon || back ? (
				<TouchableOpacity
					onPress={() => (back ? handleBackClick?.() || navigation.goBack() : navigation.openDrawer())}
					style={styles.leftIconContainer}>
					<IconComponent
						name={back ? 'arrowleft' : leftIcon || 'arrowleft'}
						type={IconType.AntDesign}
						color={Colors.primaryThemeColor}
						size={25}
					/>
				</TouchableOpacity>
			) : null}
			<TextComponent style={{ fontSize: 20 }} type={FontType.BOLD}>
				{title}
			</TextComponent>
			{rightIcon ? (
				<View style={styles.rightIconContainer}>
					<IconComponent onPress={rightIconClick} type={IconType.Entypo} name={rightIcon} color={Colors.primaryThemeColor} size={25} />
				</View>
			) : null}
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		minHeight: 60,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.white,
		borderBottomWidth: 1,
		borderBottomColor: Colors.whiteGrey,
		paddingHorizontal: SPACING.NORMAL,
	},
	leftIconContainer: {
		height: '100%',
		// width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		left: SPACING.SMALL,
	},
	rightIconContainer: { height: '100%', width: 40, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, right: 0 },
});
