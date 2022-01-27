import React from 'react';
import { View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Placeholder, PlaceholderLine, ShineOverlay } from 'rn-placeholder';
import { Colors, SPACING } from '../constants/ThemeConstants';
import { PLACEHOLDERS } from '../constants/AppConstant';

const IMAGE_SIZE = RFPercentage(8);

const PlaceHolders = ({ type }) => {
	const renderLoader = (type) => {
		switch (type) {
			case PLACEHOLDERS.CHAT_LiST:
				return (
					<Placeholder style={{}} Animation={ShineOverlay}>
						{Array(3)
							.fill('')
							.map((data, index) => (
								<View
									key={index}
									style={{
										flexDirection: 'row',
										padding: SPACING.NORMAL,
										borderBottomWidth: 0.5,
										borderColor: Colors.accDividerColor,
									}}>
									<PlaceholderLine
										noMargin
										width={100}
										height={RFPercentage(20)}
										style={{ height: IMAGE_SIZE, width: IMAGE_SIZE, borderRadius: 100 }}
									/>
									<View style={{ paddingLeft: SPACING.NORMAL, justifyContent: 'space-between', flex: 1 }}>
										<PlaceholderLine noMargin width={35} height={RFPercentage(2)} />
										<PlaceholderLine noMargin width={30} height={RFPercentage(2)} />
									</View>
								</View>
							))}
					</Placeholder>
				);

			default:
				return null;
		}
	};
	return renderLoader(type);
};

export default PlaceHolders;
