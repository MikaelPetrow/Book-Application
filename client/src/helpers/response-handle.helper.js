
export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log('Response from backend: ' + data)
    return data;
  });
}
