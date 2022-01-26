import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

export const FontType = {
	REGULAR: 'REGULAR',
	LIGHT: 'LIGHT',
	BOLD: 'BOLD',
	SEMIBOLD: 'SEMIBOLD',
};

export const Stays = {
	UPCOMING: 'UPCOMING',
	PAST: 'PAST',
	CANCELLED: 'CANCELLED',
};

export const IconType = {
	FontAwesome: FontAwesome,
	Ionicons: Ionicons,
	AntDesign: AntDesign,
	Feather: Feather,
	MaterialCommunityIcons: MaterialCommunityIcons,
	Entypo: Entypo,
	EvilIcons: EvilIcons,
	MaterialIcons: MaterialIcons,
	FontAwesome5: FontAwesome5,
	Fontisto: Fontisto,
	Octicons: Octicons,
};

export const AppVariables = {
	USER: 'user',
	TOKEN: 'token',
	IS_FIRST_TIME_USER: 'IS_FIRST_TIME_USER',
	NAME: 'NAME',
	URL_SCHEMA: 'URL_SCHEMA',
	TRANSFER_POINTS: 'TRANSFER_POINTS',
	DONATE_REWARDS: 'DONATE_REWARDS',
	ME: 'ME',
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
};

export const POST = 'POST';
export const GET = 'GET';

export const HEADER_HEIGHT = 60;

// export const API_PORT=
// export const API_IP = 'https://122.165.203.72:5094/vin-app-api/api/v1/';
export const API_IP = 'http://122.165.203.72:9094/vin-app-api/api/v1/';

export const ROUTES = {
	AUTH_SCREEN: 'AUTH_SCREEN',
	SPLASH_SCREEN: 'SPLASH_SCREEN',
};

export const OPACITY_TRANSLATE_ANIMATION = {
	0: {
		opacity: 0,
		translateX: 50,
	},
	1: {
		opacity: 1,
		translateX: 0,
	},
};
export const OPACITY_TRANSLATE_Y_ANIMATION = {
	0: {
		opacity: 0,
		translateY: 50,
	},
	1: {
		opacity: 1,
		translateY: 0,
	},
};
export const OPACITY_ANIMATION = {
	0: {
		opacity: 0,
	},
	1: {
		opacity: 1,
	},
};
