import React from "react";
import "./User.css";
import Map from "../Map/Map";
import CustomizedDialogs from "../DialogWindow/DialogWindow";
const User = props => {
	const { user } = props;

	return (
		<div>
			<div className='user'>
				<div className='pic'>
					<p>
						<img src={user.picture.medium} alt='user picture'></img>
					</p>
				</div>
				<div className='data'>
					<p>
						<strong>Name:</strong> {user.name.first} {user.name.last}
					</p>
					<p>
						<strong>Location:</strong> {user.location.street.name}{" "}
						{user.location.street.number}, {user.location.city}
					</p>
					<p>
						<strong>E-mail:</strong> {user.email}
					</p>
				</div>
			</div>
			<CustomizedDialogs user={user }></CustomizedDialogs>
		</div>
	);
};

export default User;
