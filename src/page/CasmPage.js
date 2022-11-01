import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CasmQuestion } from "../components/CasmQuestion";
import { GetData } from "../service/getData";
import { postData } from "../service/postData";

export const CasmPage = () => {
    let param = useParams();
    const [preguntas, setPreguntas] = useState()
    const [pagina, setPagina] = useState(1)
    const [respuestas, setRespuestas] = useState([])
    const onResponse = (action, id, answer_a, answer_b) => {
        if (action === "start") {
            respuestas.push({ casm_id: id, answer_a: answer_a, answer_b: answer_b })
            setRespuestas([
                ...respuestas.filter(i => i?.casm_id !== id)
            ])
            if (id % 15 === 0 || id == 143) {
                setRespuestas([
                    ...respuestas.filter(i => i?.casm_id != id),
                    { casm_id: id, answer_a: answer_a, answer_b: answer_b }
                ])
            }
        } else {
            setRespuestas([
                ...respuestas.filter(i => i?.casm_id != id),
                { casm_id: id, answer_a: answer_a, answer_b: answer_b }
            ])
        }
        console.log(id, answer_a, answer_b)
    }
    const saveAs = async () => {
        let res = await postData(respuestas, `test/${param.test_id}/casm`)
        if (res.code !== "OK") {
            alert("Algo pago!")
            return
        }
        alert("Datos guardados")
        LoadQuestions()
    }
    const LoadQuestions = async () => {
        let res = await GetData(`test/${param.test_id}/casm?items=15&page=${pagina}`)
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
            <h1 className="text-center mb-3">TEST CASM 83 Revisión del 2010</h1>
            <div><p className="text-center">Pagina actual {pagina}</p></div>
            {Paginas(setPage,pagina)}
            <div className="container">
                {
                    preguntas?.map(p => (
                        <CasmQuestion
                            key={p.id}
                            id={p.id}
                            q1={p.question_a}
                            q2={p.question_b}
                            a1={p.answer_a}
                            a2={p.answer_b}
                            done={p.done}
                            onResponse={onResponse}
                        />
                    ))
                }
            </div>
            <div className="p-5 d-flex justify-content-center ">
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
                <button className="page-link">{"<<"}</button>
            </li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(1)}>1</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(2)}>2</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(3)}>3</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(4)}>4</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(5)}>5</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(6)}>6</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(7)}>7</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(8)}>8</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(9)}>9</button></li>
            <li className="page-item"><button className="page-link" onClick={() => setPage(10)}>10</button></li>
            <li className="page-item" onClick={() => setPage(pagina>=10 ? 10 : pagina+1 )}>
                <button className="page-link" >{">>"}</button>
            </li>
        </ul>
    </nav>
)


