import { useState, useEffect } from "react"

export const CasmQuestion = ({ id, q1, q2, a1, a2, done, onResponse }) => {
    const [res, setRes] = useState({ a1, a2 })
    const [l, setL] = useState(true)
    const change = (key, value) => {
        setRes({
            ...res,
            [key]: value
        })
    }
    useEffect(() => {
        if (l) {
            onResponse("start", id, res.a1, res.a2)
        } else {
            onResponse("__", id, res.a1, res.a2)
        }
        setL(false)
    }, [res])
    return (
        <div className="container mb-3">
            <h4>Pregunta {id}</h4>
            <div className="row">
                <div className="col-10">
                    <p className="m-0">{q1}</p>
                </div>
                <div className="col-2">
                    <span className="me-2">a</span>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        disabled={done}
                        checked={res.a1}
                        onChange={() => change("a1", !res.a1)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <p className="m-0">{q2}</p>
                </div>
                <div className="col-2">
                    <span className="me-2">b</span>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        disabled={done}
                        checked={res.a2}
                        onChange={() => change("a2", !res.a2)}
                    />
                </div>
            </div>
        </div>
    )
}
