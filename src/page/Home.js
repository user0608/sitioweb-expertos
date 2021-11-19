import { useEffect, useState } from 'react';
import { deleteData } from '../service/deleteData';
import { GetData } from '../service/getData';
import { Link } from "react-router-dom";
import '../css/global.css'
import Button from '../components/Button';
export const Home = () => {
    const [user, setUser] = useState()
    
    const loadData = async () => {
        let data = await GetData("prueba")
        if (data.code != "OK") {
            alert("Algo paso!")
            return
        }
        setUser(data.data)
    }
    const onDelete = async (id) => {
        let data = await deleteData("prueba/" + id)
        if (data.code != "OK") {
            alert("Algo paso!")
            return
        }
        loadData()
    }
    const onProcess = async (id) => {
        const res = await GetData(`test/${id}/resultado`)
        if (res.code != "OK") {
            alert("Algo paso")
            return
        } else {
            if (res.data.done) {
                alert("Resultados generados")
            } else {
                alert("Aun no a completado el test")
            }
        }
    }
    const onCrearTest = async () => {
        let data = await GetData("prueba/create")
        console.log(data)
        if (data.code != "OK") {
            alert("Algo paso!")
            return
        }
        loadData()
    }
    
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className="container">
            
            <div className="container-image">
                <img max-height="200"  src="/banner.png" />
            </div>
            <h1>
                SISTEMA EXPERTO PARA EL COLEGIO CONSUELO SOLANO DE VILLON 80880
            </h1>
            <div className="d-flex justify-content-end">
                <Button
                    className="me-2"
                    onClick={onCrearTest}
                >Crear nuevo test</Button>
            </div>
            <div class="table-responsive-md">
                <table className="table table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Test CASM</th>
                            <th scope="col">Test Berger</th>
                            <th scope="col">Test HEA</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user?.reverse().map((u, i) => (
                                <tr key={u.test_id}>
                                    <th scope="row">{u.test_id + ". Test " + (i + 1)}</th>
                                    <td>{u.created_at}</td>
                                    <td>
                                        {!u.resultado_casm &&
                                            <Link to={`test/${u.test_id}/casm`}>Start</Link>
                                        }
                                    </td>
                                    <td>
                                        {!u.resultado_berger &&
                                            <Link to={`test/${u.test_id}/berger`}>Start</Link>
                                        }
                                    </td>
                                    <td>
                                        {!u.resultado_hea &&
                                            <Link to={`test/${u.test_id}/hea`}>Start</Link>
                                        }
                                    </td>
                                    {u.done ?
                                        <>
                                            <td><Link
                                                to={`resultado/${u.test_id}`}
                                                className="btn btn-primary">resultado</Link></td>
                                        </>
                                        :
                                        <>
                                            <td><button onClick={() => { onDelete(u.test_id) }}>X</button></td>
                                            <td><button onClick={() => { onProcess(u.test_id) }}>OO</button></td>
                                        </>
                                    }
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
