import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Content, ImageComponent, TextComponent } from '../../components';
import Header from '../../components/header';
import { FontType, ROUTES, USERS } from '../../constants/AppConstant';
import { Colors, FONT_SIZE, SPACING } from '../../constants/ThemeConstants';
import { useAuthContext } from '../../context/auth-context';

const IMAGE_SIZE = RFPercentage(8);

const ChatList = ({ navigation }) => {
	const { currentUser, selectedUser, setSelectedUser } = useAuthContext();
	React.useEffect(() => {
		selectedUser && navigation.navigate(ROUTES.CHAT_SCREEN);
	}, [selectedUser]);

	return (
		<Content noPadding>
			<Header title="Chat List" />
			<Content noPadding>
				{USERS?.map(({ name, image, id }, index) =>
					id !== currentUser?.id ? (
						<Ripple
							onPress={() => setSelectedUser({ name, image, id })}
							key={index}
							style={{ flexDirection: 'row', padding: SPACING.NORMAL, borderBottomWidth: 0.5, borderColor: Colors.accDividerColor }}>
							<ImageComponent style={{ height: IMAGE_SIZE, width: IMAGE_SIZE, borderRadius: 100 }} source={{ uri: image }} />
							<View style={{ paddingLeft: SPACING.NORMAL, justifyContent: 'space-between' }}>
								<TextComponent fontSize={FONT_SIZE.X_LARGE} type={FontType.BOLD}>
									{name}
								</TextComponent>
								<TextComponent color={Colors.green}>online</TextComponent>
							</View>
						</Ripple>
					) : null,
				)}
			</Content>
		</Content>
	);
};

export default ChatList;
