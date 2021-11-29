import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaQuestion } from "../components/HeaQuestion";
import { GetData } from "../service/getData";
import { postData } from "../service/postData";

export const HeaPage = () => {
    let param = useParams();
    const [preguntas, setPreguntas] = useState()
    const [pagina, setPagina] = useState(1)
    const [respuestas, setRespuestas] = useState([])
    const onResponse = (id, answer) => {
        setRespuestas((r) => {
            return [...r.filter(r => r.hea_id !== id), { hea_id: id, answer: (answer == "" || answer == "-") ? "S" : answer }]
        })
        console.log(id, answer)
    }
    console.log(respuestas)
    const saveAs = async () => {
        let res = await postData(respuestas, `test/${param.test_id}/hea`)
        if (res.code !== "OK") {
            alert("Algo pago!")
            return
        }
        alert("Datos guardados")
        LoadQuestions()
    }
    const LoadQuestions = async () => {
        let res = await GetData(`test/${param.test_id}/hea?items=11&page=${pagina}`)
        if (res.code !== "OK") {
            alert("Algo pago!")
            return
        }
        setRespuestas([])
        setPreguntas(res.data)
    }
    useEffect(() => {
        LoadQuestions()
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, [pagina])
    const setPage = (p) => {
        setPagina(p)
    }
    return (
        <div className="container">
            <h1 className="text-center mb-3">Test HEA</h1>
            <div><p className="text-center">Pagina actual {pagina}</p></div>
            {Paginas(setPage,pagina)}
            <div className="container">
                {
                    preguntas?.map(p => (
                        <HeaQuestion
                            key={p.id}
                            id={p.id}
                            q={p.question}
                            a={p.answer}
                            done={p.done}
                            onResponse={onResponse}
                        />
                    ))
                }
            </div>
            <div className="p-5 d-flex justify-content-center">
                <button className="btn btn-primary btn-bg" onClick={saveAs}>Guardar Respuestas</button>
            </div>
            {Paginas(setPage,pagina)}
            <br/>
            <br/>
        </div>
    )
}

const Paginas = (setPage,pagina) => (
    <nav aria-label="Page navigation example"  className="d-flex justify-content-center">
        <ul className="pagination ">
            <li className="page-item" onClick={() => setPage(pagina<=1 ? 1 : pagina-1 )}>
                <button className="page-link">Previa</button>
            </li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(1)}>1</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(2)}>2</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(3)}>3</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(4)}>4</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(5)}>5</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(6)}>6</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(7)}>7</button></li>
            <li className="page-item" onClick={() => setPage(pagina>=7 ? 7 : pagina+1 )}>
                <button className="page-link" >Siguiente</button>
            </li>
        </ul>
    </nav>
)

