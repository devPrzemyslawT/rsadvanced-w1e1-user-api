import React from "react";
import { useState, useEffect } from "react";

const UserList = props => {
	const [usersList, setUsersList] = useState("");

	useEffect(() => {
		fetch("https://randomuser.me/api/")
			.then(response => {
				return response.json();
			})
			.then(data => {
				setUsersList(data.results[0].name.first);
				console.log("useEffect");
			})
			.catch(error => console.log(error));
	}, []);

	return <div>{usersList}</div>;
};

export default UserList;
