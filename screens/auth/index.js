import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Content, TextComponent } from '../../components';
import { View } from 'react-native';
import { FontType } from '../../constants/AppConstant';

const AuthScreen = ({ navigation }) => {
	GoogleSignin.configure({
		webClientId: '528316341999-9ri5qvkuai0275ufalpukb9209sdcjbv.apps.googleusercontent.com',
	});
	const onGoogleButtonPress = async () => {
		try {
			// Get the users ID token
			const { idToken } = await GoogleSignin.signIn();

			// Create a Google credential with the token
			const googleCredential = auth.GoogleAuthProvider.credential(idToken);

			// Sign-in the user with the credential
			return auth().signInWithCredential(googleCredential);
		} catch (err) {
			console.log('err...', err);
		}
	};
	return (
		<Content>
			<View>
				<TextComponent type={FontType.BOLD}>Find your friends in one place</TextComponent>
			</View>
		</Content>
	);
};

export default AuthScreen;
