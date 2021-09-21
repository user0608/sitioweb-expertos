import { useState } from "react";
const useForm = (initialValue = {}) => {
    const [formInputs, setFromInputs] = useState(initialValue)
    const reset = () => {
        setFromInputs(initialValue)
    }
    const handleInputChange = ({ target }: any) => {
        setFromInputs({
            ...formInputs,
            [target.name]: target.value
        })
    }
    return [formInputs, handleInputChange, reset]
}

export default useForm;