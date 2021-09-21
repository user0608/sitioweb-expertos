import {API_URL} from './globals'
export const deleteData = async (path) => {
    const response = await fetch(`${API_URL}/${path}`, {
        method: 'DELETE',                
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")         
        }
    });
    return response.json(); 
}
