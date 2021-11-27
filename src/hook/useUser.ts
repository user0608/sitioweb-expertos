import { useEffect, useState } from "react"

export const useUser = () => {
    const [userSEOV, setUserSEOV] = useState({})
    useEffect(() => {
        let res = localStorage.getItem("usuario")
        if (res) {
            setUserSEOV(res ? JSON.parse(res) : {})
        }
    },[])
    return userSEOV
}
/* export const deleteUserSEOV = () => {
        localStorage.removeItem("usuario_id");
        localStorage.removeItem("usuario");
        return

} */