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
		console.log("use effect");
		requestApi( inValue )
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
		console.log(inValue);
	};
	return (
		<div>
			<div></div>
			<div>
				<InNum onClick={handleOnGetClick} onChange={handleOnInChange}></InNum>

				{usersList.map(elem => {
					const firstName = elem.name.first;
					const lastName = elem.name.last;
					const streetName = elem.location.street.name;
					const streetNumber = elem.location.street.number;
					const city = elem.location.city;
					const email = elem.email;
					const picMedium = elem.picture.medium;
					const idValue = elem.id.value;

					return (
						<div key={idValue}>
							<hr></hr>
							<User
								firstName={firstName}
								lastName={lastName}
								streetName={streetName}
								streetNumber={streetNumber}
								city={city}
								email={email}
								picture={picMedium}></User>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserList;
