import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Content, TextComponent } from '../../components';

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
			<TextComponent>AuthScreen</TextComponent>
			<GoogleSigninButton
				style={{ width: 192, height: 48 }}
				size={GoogleSigninButton.Size.Wide}
				color={GoogleSigninButton.Color.Dark}
				onPress={onGoogleButtonPress}
				// disabled={this.state.isSigninInProgress}
			/>
		</Content>
	);
};

export default AuthScreen;
