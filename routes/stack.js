import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { ROUTES } from '../constants/AppConstant';
import AuthScreen from '../screens/auth';
import SplashScreen from '../screens/splash';
import ChatList from '../screens/chat-list';
import ChatScreen from '../screens/chat-screen';

const Stack = createStackNavigator();

const AppStackData = [
	{
		name: ROUTES.AUTH_SCREEN,
		component: AuthScreen,
	},
	{
		name: ROUTES.SPLASH_SCREEN,
		component: SplashScreen,
	},
	{
		name: ROUTES.CHAT_LIST,
		component: ChatList,
	},
	{
		name: ROUTES.CHAT_SCREEN,
		component: ChatScreen,
	},
];

export function AppStack(props) {
	return (
		<Stack.Navigator initialRouteName={ROUTES.SPLASH_SCREEN} screenOptions={{ headerShown: false }}>
			{AppStackData.map((screen, index) => {
				return (
					<Stack.Screen
						key={index}
						name={screen.name}
						component={screen.component}
						options={{
							cardStyleInterpolator: screen?.cardStyleInterpolator ?? CardStyleInterpolators.forHorizontalIOS,
						}}
					/>
				);
			})}
		</Stack.Navigator>
	);
}
