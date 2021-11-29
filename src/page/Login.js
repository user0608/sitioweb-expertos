import { useNavigate } from 'react-router-dom';
import useForm from '../hook/useForm';
import { useToken } from '../hook/useToken';
import useUser from '../hook/useUser.js'
import toast, { Toaster } from 'react-hot-toast';

import { useState, useEffect } from 'react'


const Login = () => {


    const navigate = useNavigate();
    const { login, isLogged, hasLoginError, isLoginLoading } = useUser()
    const [form, handlerChange, reset] = useForm({
        username: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.username.length > 6 && form.password.length > 6) {
            login(form)
        } else {
            toast.error("Datos incorrectos.")
            reset()
            e.target.submit()
        }
    }

    useEffect(() => {
        if (isLogged) {
            console.log("vaya al inicio")
            toast.success("Bienvenido")
            navigate("/")
        }
        if (isLoginLoading) toast('Revisando credenciales', {
            icon: '🤔',
        });
        if (hasLoginError) toast.error("Credenciales invalidas")
    }, [isLogged, navigate, isLoginLoading, hasLoginError])

    /*     if(isLoginLoading) (()=>toast.success('Revisando credenciales'))()
        if(hasLoginError) toast.error("Credenciales invalidas")
        if(!isLoginLoading&&!hasLoginError&&isLogged) (()=>toast.success("Bienvenido"))() */

    /*         {hasLoginError && toast.error("Credenciales invalidas")}
            {(!isLoginLoading && !hasLoginError && isLogged) && (() => toast.success("Bienvenido"))()} */
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <h1 className="text-center">Login</h1>


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

                    <Toaster
                        position="bottom-center"
                        reverseOrder={false}
                    />
                </div>
                <div className="col-4">

                </div>
            </div>
        </div>
    )
}

export default Login;