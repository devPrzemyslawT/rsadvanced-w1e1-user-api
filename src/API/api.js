export const API_URL = "https://randomuser.me/api/?results=";

export function requestApi(endpointNb) {
	const url = `${API_URL}${endpointNb}`;
	console.log(url);
	return fetch(url).then(response => {
		return response.json();
	});
}
