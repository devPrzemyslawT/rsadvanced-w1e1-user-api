import React from "react";
import "./User.css";
const User = props => {
	const {
		firstName,
		lastName,
		streetName,
		streetNumber,
		city,
		email,
		picture,
	} = props;

	return (
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
	);
};

export default User;
