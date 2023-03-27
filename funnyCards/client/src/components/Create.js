import { useState } from "react"


export default function Create({
    onCreateCardSubmit,
}) {
    const [values, setValues] =useState({
        title: '',
        description: '',
        imageUrl: ''       
    })
    const onChamgeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onCreateCardSubmit(values)
    }
    return (
        <section id="create-page">
        <div className="form">
            <form className="create-form" onSubmit={onSubmit} >
                <h2>Create funny card</h2>
                <p>Animal image</p>
                <input value={values.imageUrl} onChange={onChamgeHandler} type="text" name="imageUrl" placeholder="Enter animal image" />
                <p>Title</p>
                <input value={values.title} onChange={onChamgeHandler} type="text" name="title" placeholder="Enter Title" />
                <p>Description</p>
                <textarea value={values.description} onChange={onChamgeHandler} name="description" placeholder="Enter Description"></textarea>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>

    </section>
    )
}