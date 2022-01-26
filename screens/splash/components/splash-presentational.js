import React from 'react';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LottieFile } from '../../../assets/lottie';
import { Content, TextComponent } from '../../../components';
import LottieAnimation from '../../../components/lottie-animation';

const SplashPresentational = ({}) => (
	<Content style={{ alignItems: 'center', justifyContent: 'center' }}>
		<View style={{ width: '100%', height: '100%' }}>
			<LottieAnimation file={LottieFile.Loader} />
		</View>
	</Content>
);

export default SplashPresentational;
