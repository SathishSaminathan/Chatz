import React from 'react';
import AuthFunctional from './components/auth-functional';

const AuthScreen = ({ navigation }) => {
	return <AuthFunctional {...{ navigation }} />;
};

export default AuthScreen;
