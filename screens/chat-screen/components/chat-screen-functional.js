import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { useAuthContext } from '../../../context/auth-context';
import ChatScreenPresentational from './chat-screen-presentational';

const ChatScreenFunctional = ({ params }) => {
	const [message, setMessage] = React.useState('');
	const { selectedUser, currentUser } = useAuthContext();
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		const subscriber = firestore()
			.collection(`11112222`)
			.orderBy('time')
			.onSnapshot((querySnapshot) => {
				const list = [];
				let messages = [];
				querySnapshot.forEach((doc) => {
					messages.push(doc.data());
				});
				setMessages([...messages]);
			});

		// Stop listening for updates when no longer required
		return () => subscriber();
	}, []);

	const handleSendMessage = () => {
		firestore()
			.collection('11112222')
			.add({
				message,
				...currentUser,
				time: firestore.FieldValue.serverTimestamp(),
			});
		setMessage('');
	};

	return <ChatScreenPresentational {...{ selectedUser, currentUser, messages, message, setMessage, handleSendMessage }} />;
};

export default ChatScreenFunctional;
