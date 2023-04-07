import styles from './create.module.css'
import { useForm } from "../../hooks/useForm"
import { useCardContext } from "../../contexts/CardContext"
import { useState } from 'react'

export default function Create() {
    const { onCreateCardSubmit } = useCardContext()
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        description: '',
        imageUrl: ''
    }, onCreateCardSubmit)

    const [error, setError] = useState({
        title: '',
        description: '',
        imageUrl: ''
    })
      //const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
    const regex= /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/
    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "title":
                    if (!value) {
                        stateObj[name] = "Title is required.";
                    }
                    break;

                case "description":
                    if (!value) {
                        stateObj[name] = "Description is required.";
                    }
                    break;

                case "imageUrl":
                    if (!regex.test(value)) {
                        stateObj[name] = "Invalid image URL.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }
    const isFormValid = !Object.values(error).some(x => x)
    return (
        <section id={styles["create-page"]}>
            <div className={styles["form"]}>
                <form className={styles["create-form"]} method="POST" onSubmit={onSubmit} >
                    <h2>Create funny card</h2>
                    <p>Animal image</p>
                    <input value={values.imageUrl} 
                           onChange={changeHandler} 
                           type="text" name="imageUrl" 
                           placeholder="Enter animal image" 
                           onBlur={validateInput} 
                    />
                    {error.imageUrl && <p className={styles["form-error"]}>{error.imageUrl}</p>}
                   
                    <p>Title</p>
                    <input value={values.title} 
                           onChange={changeHandler} 
                           type="text" name="title" 
                           placeholder="Enter Title" 
                           onBlur={validateInput} 
                    />
                    {error.title && <p className={styles["form-error"]}>{error.title}</p>}

                    <p>Description</p>
                    <textarea value={values.description} 
                              onChange={changeHandler} 
                              name="description" 
                              placeholder="Enter Description" 
                              onBlur={validateInput} 
                    ></textarea>
                    {error.description && <p className={styles["form-error"]}>{error.description}</p>}

                    <div>
                        <button type="submit" disabled={!isFormValid} >Create</button>
                    </div>
                </form>
            </div>

        </section>
    )
}
