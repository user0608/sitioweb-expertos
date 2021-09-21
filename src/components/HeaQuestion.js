import { useState, useEffect } from "react"

export const HeaQuestion = ({ id, q, a, done, onResponse }) => {
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
                <div>
                    <p className="m-0">{q}</p>
                </div>
                <div className="d-flex justify-content-end mb-4 mt-2">
                    <div class="form-check me-2">
                        <label class="form-check-label text-muted" >
                            Me ocurre siempre
                        </label>
                        <input
                            checked={res == "S" || res == "s"}
                            onChange={() => change("S")}
                            class="form-check-input"
                            type="checkbox"
                            disabled={done}
                        />
                    </div>
                    <div class="form-check me-2">
                        <label class="form-check-label text-muted" >
                            Me ocurre mucho
                        </label>
                        <input
                            checked={res === "M" || res === "m"}
                            onChange={() => change("M")}
                            class="form-check-input"
                            type="checkbox"
                            disabled={done}
                        />
                    </div>
                    <div class="form-check me-2">
                        <label class="form-check-label text-muted" >
                            Me ocurre pocas veces, casi nunca
                        </label>
                        <input
                            checked={res === "P" || res === "p"}
                            onChange={() => change("P")}
                            class="form-check-input"
                            type="checkbox"
                            disabled={done}
                        />
                    </div>
                    <div class="form-check me-2">
                        <label class="form-check-label text-muted" >
                            Me ocurre alguna vez
                        </label>
                        <input
                            checked={res === "A" || res === "a"}
                            onChange={() => change("A")}
                            class="form-check-input"
                            type="checkbox"
                            disabled={done}
                        />
                    </div>
                    <div class="form-check me-2">
                        <label class="form-check-label text-muted" >
                            No me ocurre nunca
                        </label>
                        <input
                            checked={res === "N" || res === "n"}
                            onChange={() => change("N")}
                            class="form-check-input"
                            type="checkbox"
                            disabled={done}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
