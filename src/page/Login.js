import { useHistory } from 'react-router-dom';
import useForm from '../hook/useForm';
import { postData } from '../service/login';

export const Login = () => {
    const history = useHistory();
    console.log(history)
    const [form, handlerChange, reset] = useForm({
        username: "",
        password: ""
    })
    const onSubmit = async (e) => {
        e.preventDefault()
        if (form.username.length > 6 && form.password.length > 6) {
            let response = await postData(form, "login")
            console.log(response)
            if (response.code === "OK") {
                localStorage.setItem("token", response.token)
                localStorage.setItem("usuario_id", response.usuario.estudiante_id)
                localStorage.setItem("usuario", JSON.stringify(response.usuario))
                history.push("/")
            }

        } else {
            alert("datos Incorrectos")
            reset()
        }
        e.target.submit()
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1 className="text-center">Login</h1>
                    <form className="mt-5" onSubmit={onSubmit} >
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
                            <button type="submit" className="btn btn-primary" >Iniciar</button>
                        </div>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

