import { useState } from "react"

// za da ne se iztriva sesiqta pri refresh
export const useSessionStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        const persistedStateSerialized = sessionStorage.getItem(key)

        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized)

            return persistedState
        }
        return initialValue
       // return JSON.parse(sessionStorage.getItem(key))
    })

    const setSessionState = (value) => {

        setState(value)
        //sessionStorage iska key i string i za tova go pisha v Json
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    return [
        state,
        setSessionState,
    ]
}