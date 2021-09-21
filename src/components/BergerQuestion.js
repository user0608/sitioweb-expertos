import { useState, useEffect } from "react"

export const BergerQuestion = ({ id, q1, q2, a, done, onResponse }) => {
    const [res, setRes] = useState(a)
    const change = (value) => {
        setRes(value)
    }
    useEffect(() => {
        onResponse(id, res)
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
                        checked={res == 1}
                        onChange={() => change(1)}
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
                        checked={res == 9}
                        onChange={() => change(9)}
                    />
                </div>
            </div>
        </div>
    )
}
