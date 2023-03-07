import React from "react";

const InNum = props => {
	const { onClick, onChange } = props;
	return (
		<div>
			<input
				type='number'
				placeholder='Enter users value...'
				onChange={onChange}></input>
			<button onClick={onClick}>GET</button>
		</div>
	);
};

export default InNum;
