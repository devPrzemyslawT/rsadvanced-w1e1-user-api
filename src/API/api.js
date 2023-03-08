export const API_URL = "https://randomuser.me/api/?results=";

export function requestApi(endpointNb) {
	const url = `${API_URL}${endpointNb}`;

	return fetch(url).then(response => {
		return response.json();
	});
}
