import { useNavigate } from 'react-router-dom';
import useForm from '../hook/useForm';
import { useToken } from '../hook/useToken';
import useUser from '../hook/useUser.js'
import { postData } from '../service/login';
import { useState, useEffect } from 'react'


const Login = () => {


    const navigate = useNavigate();
    console.log("useHistory", navigate)
    const { login, isLogged, hasLoginError, isLoginLoading } = useUser()
    console.log({hasLoginError})
    const k = useToken();
    const [form, handlerChange, reset] = useForm({
        username: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.username.length > 6 && form.password.length > 6) {
            login(form)
            /*             let response = await postData(form, "login")
            
                        await console.log(response)
                        if (response.code === "OK") {
                            localStorage.setItem("token", response.token)
                            localStorage.setItem("usuario_id", response.usuario.estudiante_id)
                            localStorage.setItem("usuario", JSON.stringify(response.usuario))
                            navigate("/")
                        } */

        } else {
            alert("datos Incorrectos")
            reset()
            e.target.submit()
        }
    }


    useEffect(() => {
        if (isLogged) {
            console.log("vaya al inicio")
            navigate("/")
        } else {
            console.log("que pasa", k);
        }
    }, [navigate, isLogged])

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <h1 className="text-center">Login</h1>
                    {isLoginLoading && <strong>Revisando credenciales</strong>}
                    {!isLoginLoading &&
                        <form className="mt-5" onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    name="username"
                                    value={form.username}
                                    onChange={e => handlerChange(e)}
                                    type="text"
                                    className="form-control"
                                    autoComplete="off" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    name="password"
                                    value={form.password}
                                    onChange={handlerChange}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <input className="btn btn-primary" type="submit" value="Enviar datos" />
                            </div>
                        </form>
                    }
                    {hasLoginError&& <strong>Credenciales invalidas</strong>}
                </div>
                <div className="col-4">
                    token:{k ? k : "no hay toekn"}
                </div>
            </div>
        </div>
    )
}

export default Login;