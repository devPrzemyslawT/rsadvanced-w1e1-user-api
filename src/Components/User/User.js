import React from "react";
import "./User.css";
import Map from "../Map/Map";
const User = props => {
	const {
		firstName,
		lastName,
		streetName,
		streetNumber,
		city,
		state,
		postcode,
		coordinatesLat,
		coordinatesLon,
		email,
		picture,
	} = props;

	return (
		<div>
			<div className='user'>
				<div className='pic'>
					<p>
						<img src={picture} alt='user picture'></img>
					</p>
				</div>
				<div className='data'>
					<p>
						<strong>Name:</strong> {firstName} {lastName}
					</p>
					<p>
						<strong>Location:</strong> {streetName} {streetNumber}, {city}
					</p>
					<p>
						<strong>E-mail:</strong> {email}
					</p>
				</div>
			</div>
			<Map
				streetName={streetName}
				streetNumber={streetNumber}
				city={city}
				state={state}
				postcode={postcode}
				latitude={coordinatesLat}
				longitude={coordinatesLon}></Map>
		</div>
	);
};

export default User;
