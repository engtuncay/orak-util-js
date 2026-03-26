export function fiPostFormData(url: string, data: FormData) {
  return fetch(url, {
    method: 'POST',
    body: data
  });
}

//  return fetch(url, {
// method: 'POST',
// body: data instanceof FormData ? data : JSON.stringify(data),
// headers: data instanceof FormData ? undefined : { 'Content-Type': 'application/json' }
// });