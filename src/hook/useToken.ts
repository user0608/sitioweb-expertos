import { useEffect, useState } from "react"

export const useToken = () => {
    const [token, setToken] = useState("")
    useEffect(() => {
        let res = localStorage.getItem("token")
        if (res) {
            setToken(res ? res : "")
        }
    },[])
    return token
}


