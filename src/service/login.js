import {API_URL} from './globals'
export const postDataAPelo = async (data,path) => {
    const response = await fetch(`${API_URL}/${path}`, {
        method: 'POST',                
        headers: {
          'Content-Type': 'application/json'          
        },        
        body: JSON.stringify(data) 
    });
    return response.json(); 
}
