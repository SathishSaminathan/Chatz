import React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Colors } from '../constants/ThemeConstants';

const StatusBarAndroidIOS = ({ backgroundColor = Colors.white, animated = true }) => (
	<View style={[Platform.OS === 'ios' && { height: getStatusBarHeight() }]}>
		<StatusBar backgroundColor={backgroundColor} barStyle="dark-content" animated={animated} />
	</View>
);

export default StatusBarAndroidIOS;
