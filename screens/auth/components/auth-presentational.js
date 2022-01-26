import React from 'react';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Modalize } from 'react-native-modalize';
import { FontType, OPACITY_TRANSLATE_Y_ANIMATION, ROUTES, TOP_TO_BOTTOM, USERS } from '../../../constants/AppConstant';
import { AnimatableView, ButtonComponent, Content, TextComponent, ImageComponent, GradientButton } from '../../../components';
import { ImagesFile } from '../../../assets/Images';
import { FONT_SIZE, SPACING } from '../../../constants/ThemeConstants';

const AuthPresentational = ({ onOpen, modalizeRef, navigation, login }) => (
	<Content>
		<View style={{ flex: 6 }}>
			<AnimatableView animationConfig={TOP_TO_BOTTOM} style={{ flex: 1 }} delay={500}>
				<ImageComponent source={ImagesFile.chatBG} resizeMode="contain" />
			</AnimatableView>
		</View>
		<View style={{ flex: 4, justifyContent: 'space-between' }}>
			<AnimatableView delay={1000}>
				<TextComponent style={{ textAlign: 'center' }} fontSize={FONT_SIZE.XXX_LARGE} type={FontType.BOLD}>
					Find your friends in one place.
				</TextComponent>
				<TextComponent style={{ textAlign: 'center', paddingTop: SPACING.SMALL }} type={FontType.LIGHT}>
					New way to collaborate with each other.
				</TextComponent>
			</AnimatableView>
			<AnimatableView animationConfig={OPACITY_TRANSLATE_Y_ANIMATION} delay={1500} style={{}}>
				<GradientButton onPress={onOpen}>Login</GradientButton>
			</AnimatableView>
		</View>
		<Modalize modalHeight={RFPercentage(35)} ref={modalizeRef}>
			<Content style={{ justifyContent: 'space-between', flex: 1, height: '100%' }}>
				<ButtonComponent style={{ marginBottom: 10 }} onPress={() => login(USERS[0])}>
					Login as Sathish
				</ButtonComponent>
				<ButtonComponent style={{ marginBottom: 10 }}>Login as Vinoth</ButtonComponent>
				<ButtonComponent style={{ marginBottom: 10 }}>Login as Eswaran</ButtonComponent>
			</Content>
		</Modalize>
	</Content>
);

export default AuthPresentational;
