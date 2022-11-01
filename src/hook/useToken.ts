import { useEffect, useState } from "react"

export const useToken = () => {
    const [token, setToken] = useState(false)
    useEffect(() => {
        let res = localStorage.getItem("token")
        if (res) {
            setToken(res ? true : false)
        }
    },[])
    return token
}


