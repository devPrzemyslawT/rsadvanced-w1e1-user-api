import React from "react";
import { useState, useEffect } from "react";
import { requestApi } from "../../API/api";
import User from "../User/User";
const UserList = props => {
	const [usersList, setUsersList] = useState([]);

	useEffect(() => {
		requestApi(7)
			.then(data => {
				setUsersList(data.results);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div>
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
	);
};

export default UserList;
