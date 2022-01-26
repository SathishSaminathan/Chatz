import React from 'react';
import { useAuthContext } from '../../../context/auth-context';
import ChatScreenPresentational from './chat-screen-presentational';

const ChatScreenFunctional = ({ params }) => {
	const [message, setMessage] = React.useState('');
	const { selectedUser, currentUser } = useAuthContext();

	const handleSendMessage = () => {
		setMessage('');
	};

	return <ChatScreenPresentational {...{ selectedUser, currentUser, message, setMessage, handleSendMessage }} />;
};

export default ChatScreenFunctional;
