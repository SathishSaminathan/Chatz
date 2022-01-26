import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './routes/stack';
import { StatusBarAndroidIOS } from './components/status-bar';

export default function App() {
	return (
		<NavigationContainer>
			{/* <StatusBarAndroidIOS /> */}
			<AppStack />
		</NavigationContainer>
	);
}
