import React from "react";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useTab } from "@mui/base";

const Map = props => {
	const { user } = props;
	// console.log(user);
	const position = [
		user.location.coordinates.latitude,
		user.location.coordinates.longitude,
	];
	return (
		<div>
			<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker
					position={position}
					icon={
						new Icon({
							iconUrl: markerIconPng,
							iconSize: [25, 41],
							iconAnchor: [12, 41],
						})
					}>
					<Popup>
						{user.location.street.name} {user.location.street.number} <br />
						{user.location.state}, {user.location.city},{" "}
						{user.location.postcode} <br />
						Latitude: {user.location.coordinates.latitude}, Longitude:
						{user.location.coordinates.longitude}
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
