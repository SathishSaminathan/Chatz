import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './routes/stack';
import { StatusBarAndroidIOS } from './components';
import { AuthProvider } from './context/auth-context';

export default function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<StatusBarAndroidIOS />
				<AppStack />
			</NavigationContainer>
		</AuthProvider>
	);
}
