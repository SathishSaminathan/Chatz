import React from 'react';
import { ROUTES } from '../../../constants/AppConstant';
import { useAuthContext } from '../../../context/auth-context';
import AuthPresentational from './auth-presentational';

const AuthFunctional = ({ navigation }) => {
	const { login, currentUser } = useAuthContext();
	const modalizeRef = React.useRef(null);

	const onOpen = () => {
		modalizeRef.current?.open();
	};

	React.useEffect(() => {
		currentUser && navigation.navigate(ROUTES.CHAT_LIST);
	}, [currentUser]);

	// GoogleSignin.configure({
	// 	webClientId: '528316341999-9ri5qvkuai0275ufalpukb9209sdcjbv.apps.googleusercontent.com',
	// });
	// const onGoogleButtonPress = async () => {
	// 	try {
	// 		// Get the users ID token
	// 		const { idToken } = await GoogleSignin.signIn();

	// 		// Create a Google credential with the token
	// 		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

	// 		// Sign-in the user with the credential
	// 		return auth().signInWithCredential(googleCredential);
	// 	} catch (err) {
	// 		console.log('err...', err);
	// 	}
	// };
	return <AuthPresentational {...{ onOpen, modalizeRef, navigation, login }} />;
};

export default AuthFunctional;
