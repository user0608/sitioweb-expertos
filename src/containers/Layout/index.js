import { Link } from "react-router-dom";
import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button";
import {useToken} from '../../hook/useToken'
import  useUser  from '../../hook/useUser.js'
import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

import { header, username,cerrarsesion } from "./layout.module.css"

const Layout = ({ children }) => {
    const k = useToken();
    const {isLogged,logout} = useUser();
    const navigate = useNavigate ();    

    const removeStorage = () =>{
        logout()

        navigate("/login")
    }

    const getDataUser=()=>{
        
    }

    useEffect(() => {

    }, [k])

    return (
        <>
            <header className={header}>
                <Link className="" to="/" >
                    <img src="/logo64.png" />
                </Link>
{/*                 {k?k:"no hay token"}
                {   u &&
                        <span className={username}>
                            {u?.nombre} {u?.apellido_paterno} {u?.apellido_materno}
                        </span>
                } */}
                {isLogged
                    ? <Button onClick={removeStorage} className={cerrarsesion}> Cerrar sesión</Button>
                    : <ButtonLink src="login"> Inicia Sesion</ButtonLink>
                }
            </header>

            {children}
        </>
    );
}
export default Layout;