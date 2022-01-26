import React from "react";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import { ROUTES } from "../constants/AppConstant";
import AuthScreen from "../screens/auth";
import SplashScreen from "../screens/splash";

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
];

export function AppStack(props) {
	return (
		<Stack.Navigator
			initialRouteName={ROUTES.AUTH_SCREEN}
			screenOptions={{ headerShown: false }}
		>
			{AppStackData.map((screen, index) => {
				return (
					<Stack.Screen
						key={index}
						name={screen.name}
						component={screen.component}
						options={{
							cardStyleInterpolator:
								screen?.cardStyleInterpolator ??
								CardStyleInterpolators.forHorizontalIOS,
						}}
					/>
				);
			})}
		</Stack.Navigator>
	);
}
