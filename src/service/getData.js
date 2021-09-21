import {API_URL} from './globals'
export const GetData = async (path) => {
    const response = await fetch(`${API_URL}/${path}`, {
        method: 'GET',                
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")         
        }
    });
    return response.json(); 
}
