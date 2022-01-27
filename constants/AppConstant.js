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

export const USERS = [
	{
		name: 'Sathish',
		id: 1111,
		image: 'https://randomuser.me/api/portraits/men/39.jpg',
	},
	// {
	// 	name: 'Vinoth',
	// 	id: 2222,
	// 	image: 'https://randomuser.me/api/portraits/men/71.jpg',
	// },
	{
		name: 'Eswaran',
		id: 2222,
		image: 'https://randomuser.me/api/portraits/men/51.jpg',
	},
];

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

export const HEADER_HEIGHT = 60;

export const ROUTES = {
	AUTH_SCREEN: 'AUTH_SCREEN',
	SPLASH_SCREEN: 'SPLASH_SCREEN',
	CHAT_LIST: 'CHAT_LIST',
	CHAT_SCREEN: 'CHAT_SCREEN',
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
export const TOP_TO_BOTTOM = {
	0: {
		opacity: 0,
		translateY: -50,
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

export const PLACEHOLDERS = {
	CHAT_LiST: 'CHAT_LiST',
};
