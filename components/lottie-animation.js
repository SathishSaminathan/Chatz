import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { LottieFile } from '../assets/lottie';

export default function LottieAnimation({ file = LottieFile.ThiefHiding, loop = true, autoPlay = true }) {
	return (
		<View style={{ flex: 1 }}>
			<LottieView {...{ loop, autoPlay, source: file }} />
		</View>
	);
}
