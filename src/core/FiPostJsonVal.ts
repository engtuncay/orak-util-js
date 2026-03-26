// JSON POST işlemi için util fonksiyonu
export function fiPostJsonVal(url, data) {
	 return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => response.json());
}