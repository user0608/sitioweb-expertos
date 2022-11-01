import Context from '../context/UserContext'
import { useCallback, useContext, useState } from "react"
import { postData } from '../service/login'

const useUser = () => {

    const { jwt, setJWT, user } = useContext(Context)
    const [loginLoadingAndError, setLoginLoadingAndError] = useState({
        loading:false,
        error:false
    })

    const login = useCallback((form) => {
        setLoginLoadingAndError({ loading:true,error:false})
        postData(form, "login")
            .then(response => {
                console.log(response)
                if (response.code === "OK") {
                    setJWT(response.token)
                    setLoginLoadingAndError({ loading:false,error:false})
                    localStorage.setItem("token", response.token)
                    localStorage.setItem("usuario_id", response.usuario.estudiante_id)
                    localStorage.setItem("usuario", JSON.stringify(response.usuario))
                    /* navigate("/") */
                }else{
                    setLoginLoadingAndError({ loading:false,error:true})
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario_id");
        localStorage.removeItem("usuario");
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        login,
        logout,
        isLoginLoading: loginLoadingAndError.loading,
        hasLoginError: loginLoadingAndError.error,
        user
    }
}
export default useUser
/*
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
 */