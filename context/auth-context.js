import React, { useState, useContext } from 'react';

// Creating the context object and passing the default values.
const AuthContext = React.createContext({
	status: null,
	login: () => {},
});

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [selectedUser, setSelectedUser] = useState(null);

	const login = (user) => {
		setCurrentUser(user);
	};

	const selectUser = (user) => {
		setSelectedUser(user);
	};

	const logout = () => {
		setCurrentUser(null);
	};

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser, login, logout, selectedUser, setSelectedUser }}>{children}</AuthContext.Provider>
	);
};

const useAuthContext = () => {
	return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
