import React from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Content, ImageComponent, TextComponent } from '../../../components';
import Header from '../../../components/header';
import IconComponent from '../../../components/icon-component';
import { IconType } from '../../../constants/AppConstant';
import { Colors, FONT_SIZE, SPACING } from '../../../constants/ThemeConstants';

const IMAGE_SIZE = RFPercentage(7);

const ChatScreenPresentational = ({ messages, selectedUser, currentUser, message, setMessage, handleSendMessage }) => (
	<Content noPadding>
		<Header title={selectedUser.name} back />
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			{messages
				?.sort((a, b) => moment(a.time) - moment(b.time))
				.map((data, index) => {
					const isCurrentUser = data?.id === currentUser.id;
					return (
						<View
							key={index}
							style={{
								flexDirection: isCurrentUser ? 'row-reverse' : 'row',
								padding: SPACING.NORMAL,
								alignItems: 'flex-end',
							}}>
							<ImageComponent style={{ height: IMAGE_SIZE, width: IMAGE_SIZE, borderRadius: 100 }} source={{ uri: data?.image }} />
							<View
								style={{
									justifyContent: 'space-between',
									backgroundColor: Colors.primaryLightTransparentThemeColor,
									padding: SPACING.NORMAL,
									borderRadius: SPACING.NORMAL,
									...(isCurrentUser
										? { borderBottomRightRadius: 0, marginRight: SPACING.NORMAL }
										: { borderBottomLeftRadius: 0, marginLeft: SPACING.NORMAL }),
								}}>
								<View style={{ width: RFPercentage(30) }}>
									<TextComponent numberOfLines={2}>{data?.message}</TextComponent>
								</View>
							</View>
						</View>
					);
				})}
		</ScrollView>
		<View
			style={{
				padding: SPACING.LARGE,
				paddingVertical: RFPercentage(2),
				backgroundColor: Colors.white,
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				elevation: 5,
			}}>
			<View style={{ flexDirection: 'row' }}>
				<TextInput
					value={message}
					onChangeText={(value) => setMessage(value)}
					placeholder="enter your message"
					style={{ fontFamily: 'ProximaNova-Regular', width: '90%', fontSize: FONT_SIZE.LARGE }}
				/>
				<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
					<TouchableOpacity onPress={handleSendMessage} activeOpacity={1}>
						<IconComponent type={IconType.Feather} name="send" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	</Content>
);

export default ChatScreenPresentational;
