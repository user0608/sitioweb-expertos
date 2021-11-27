import { useNavigate   } from 'react-router-dom';
import useForm from '../hook/useForm';
import {useToken} from '../hook/useToken';

import { postData } from '../service/login';
import {useState,useEffect} from 'react'
const Login = ()  => {
    const [responseServer, setResponseServer] = useState("")
    const navigate  = useNavigate ();
    console.log("useHistory", navigate )

    const k =  useToken();
    const [form, handlerChange, reset] = useForm({
        username: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setResponseServer("enviando datos")
        if (form.username.length > 6 && form.password.length > 6) {
            let response = await postData(form, "login")
            /* await setResponseServer(response) */
            await console.log(response)
            if (response.code === "OK") {
                localStorage.setItem("token", response.token)
                localStorage.setItem("usuario_id", response.usuario.estudiante_id)
                localStorage.setItem("usuario", JSON.stringify(response.usuario))
                navigate("/")
            }

        } else {
            alert("datos Incorrectos")
            reset()
            e.target.submit()
        }
    }

    const redirectToHome=()=>{
        if (k) {
            console.log("vaya al inicio")
            navigate("/")
        }else{
            console.log("que pasa",k);
        }
    }
    useEffect(() => {
        console.log(responseServer)
    }, [responseServer])
    useEffect(() => {
        redirectToHome()
    }, [k])

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    {(responseServer)?responseServer:"no hay respuesta"}
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
                            <input  className="btn btn-primary" type="submit" value="Enviar datos" />
                        </div>
                    </form>
                </div>
                <div className="col-4">
                    token:{k?k:"no hay toekn"}
                </div>
            </div>
        </div>
    )
}

export default Login;