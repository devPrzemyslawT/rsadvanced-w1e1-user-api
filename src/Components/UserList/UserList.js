import React from "react";
import { useState, useEffect } from "react";
import { requestApi } from "../../API/api";
import User from "../User/User";
import InNum from "../UserGenerator/UserGenerator";

const UserList = props => {
	const [usersList, setUsersList] = useState([]);

	const [getState, setGetState] = useState(false);
	const [inValue, setInValue] = useState(0);

	useEffect(() => {
		requestApi(inValue)
			.then(data => {
				setUsersList(data.results);
				setGetState(false);
			})
			.catch(error => {
				console.log(error);
				setGetState(false);
			});
	}, [getState]);

	const handleOnGetClick = e => {
		setGetState(true);
	};
	const handleOnInChange = e => {
		setInValue(e.target.value);
	};
	return (
		<div>
			<div></div>
			<div>
				<InNum onClick={handleOnGetClick} onChange={handleOnInChange}></InNum>

				{usersList.map(elem => {
					return (
						<div key={elem.login.uuid}>
							<hr></hr>
							<User user={elem}></User>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserList;
