import React, { useState } from 'react';
import { Image } from 'react-native';
import { ImagesFile } from '../assets/Images';

const ImageComponent = ({ resizeMode = 'cover', source, style = null, withLoader = false }) => {
	const [IsLoaded, setIsLoaded] = useState(false);

	const onLoadEnd = () => {
		setIsLoaded(true);
	};

	return (
		<Image
			{...{
				onLoadEnd,
				resizeMode,
				source: source?.uri && withLoader ? (source && source.uri && IsLoaded ? { uri: source.uri } : ImagesFile.logo) : source,
			}}
			style={[
				{
					width: undefined,
					height: undefined,
					...{
						...(style ? style : { flex: 1 }),
					},
				},
			]}
		/>
	);
};

export default ImageComponent;
