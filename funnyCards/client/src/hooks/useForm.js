import { useState} from "react";

export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        //ili obratno
         onSubmitHandler(values)
         setValues(initialValues)

    }

    const changeValues = (newValues) => {
        //todo check validate edit
        setValues(newValues)
    }
    return {
        values,
        changeHandler,
        onSubmit,
        changeValues
    }
}
