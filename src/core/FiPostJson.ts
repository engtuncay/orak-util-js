// JSON POST işlemi için util fonksiyonu
export function fiPostJson(url : string, data: Record<string, any>): Promise<Response> {
	 return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
}