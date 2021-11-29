import React, {useState} from 'react';

const Context = React.createContext({})

export const UserContextProvider = ({children}) => {
    const [jwt, setJWT] = useState(
        ()=> window.localStorage.getItem("token")
    )
    const [user, setUser] = useState(
        ()=> JSON.parse(window.localStorage.getItem("usuario"))
    )
    return ( 
        <Context.Provider value={{
            jwt,setJWT,
            user, setUser
        }}>
            {children}
        </Context.Provider>
    );
}
export default Context;