import { API_URL } from './globals'
export const postData = async (data, path) => {
  const response = await fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    },
    referrerPolicy: 'unsafe-url',
    body: JSON.stringify(data)
  });
  return response.json();
}
