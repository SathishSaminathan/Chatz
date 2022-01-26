import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './routes/stack';
import { StatusBarAndroidIOS } from './components';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBarAndroidIOS />
			<AppStack />
		</NavigationContainer>
	);
}
