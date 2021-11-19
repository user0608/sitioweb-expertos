import { Link } from "react-router-dom";
import ButtonLink from "../../components/ButtonLink";

import { header, username,cerrarsesion } from "./layout.module.css"

const Layout = ({ children }) => {
    let u = JSON.parse(localStorage.getItem("usuario"))
    const removeStorage = () =>{
        console.log("vaciar")
        localStorage.removeItem("token");
    }

    return (
        <>
            <header className={header}>
                <Link className="" to="/" >
                    <img src="/logo64.png" />
                </Link>

                {u
                    ?
                    <><span className={username}>
                        {u?.nombre} {u?.apellido_paterno} {u?.apellido_materno}
                    </span>
                        <ButtonLink onclick={removeStorage} className={cerrarsesion} src="login"> Cerrar sesión</ButtonLink>
                    </>
                    : <ButtonLink src="login"> Inicia Sesion</ButtonLink>
                }

            </header>

            {children}
        </>
    );
}
export default Layout;