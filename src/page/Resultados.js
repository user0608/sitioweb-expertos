import { useEffect, useState } from "react"
import { GetData } from "../service/getData"
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const CASM = {
    CCFM: "Ciencias físicas matemáticas",
    CCSS: "Ciencias sociales",
    CCNA: "Ciencias naturales",
    CCCO: "Ciencias de la comunicación",
    ARTE: "Artes",
    BURO: "Burocracia",
    CCLP: "Ciencias económicas políticas",
    IIAA: "Fuerzas armadas de Perú",
    FINA: "Finanzas",
    LING: "Lingüística",
    JURI: "Jurisprudencia"
}
const Resultados = () => {
    let param = useParams();
    const [res, setResultados] = useState()
    const LoadData = async () => {
        const r = await GetData(`test/${param.test_id}/resultado`)
        if (r.code !== "OK") {
            toast.error("Los datos no se han podido obtener")
            return
        }
        setResultados(r.data)
    }
    useEffect(() => {
        LoadData()
    }, [])
    if (!res) {
        return (
            <div className="container">
                <h4>Cargando Resultados ...</h4>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
            </div>
        )
    } else {
        return (
            <div className="container">

                <div className="mb-5">
                    <p className="display-4 text-center">Resumen de resultados</p>
                </div>
                <div className="mb-4">
                    <p className="h5">Resultado del test CASM 83</p>
                    <ul>
                        {res.resultado_casm.map(i => (
                            <li key={i.res}>{CASM[i.res]} con un {i.per}% de fiabilidad</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="h5">Resultado del Cuestionario caracterológico de Gastón Berger</p>
                    <ul>
                        <li>{res.resultado_berger.emotivo}</li>
                        <li>{res.resultado_berger.activo}</li>
                        <li>{res.resultado_berger.orden}</li>
                        <p className="mt-2">Finalmente como se obtiene como resultado: {res.resultado_berger_final}</p>
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="h5">Resultado del test de HEA</p>
                    <ul>
                        {res.resultado_hea.map(value => (
                            value && <li>{value}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="h5">Resultado final del sistema experto</p>
                    <p>El sistema experto a determinado como vocacion:</p>
                    <ul>
                        {res.resultado.map(value => (
                            value && <li>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Resultados
