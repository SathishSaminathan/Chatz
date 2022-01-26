import React from 'react';
import { ROUTES } from '../../../constants/AppConstant';
import SplashPresentational from './splash-presentational';

const SplashFunctional = ({ navigation }) => {
	React.useEffect(() => {
		setTimeout(() => {
			navigation.navigate(ROUTES.AUTH_SCREEN);
		}, 2000);
	}, []);

	return <SplashPresentational />;
};

export default SplashFunctional;
