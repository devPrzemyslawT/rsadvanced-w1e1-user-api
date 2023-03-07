import React from "react";
import { useState, useEffect } from "react";
import { requestApi } from "../../API/api";

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
						Name: {firstName} {lastName}
						Location: {streetName} {streetNumber},{city}
						E-mail: {email}
						<img src={`${picMedium}`}></img>
					</div>
				);
			})}
		</div>
	);
};

export default UserList;
