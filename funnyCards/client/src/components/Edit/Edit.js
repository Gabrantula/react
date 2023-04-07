import styles from './edit.module.css'

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { useForm } from "../../hooks/useForm"
import { useService } from "../../hooks/useService"
import { CardServiceFactory } from "../../services/CardService"
import { useCardContext } from "../../contexts/CardContext"

export default function Edit() {

    const {onCardEditSubmit} = useCardContext()
    const { cardId } = useParams()
    const cardService = useService(CardServiceFactory)
    const { values, changeHandler,onSubmit,  changeValues } = useForm({
        _id:'',
        title: '',
        imageUrl: '',
        description: ''
    }, onCardEditSubmit)

    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => {
                changeValues(result)
            })
    }, [cardId])
   
    const [error, setError] = useState({
        title: '',
        description: '',
        imageUrl: ''
    })
  //const regex= /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/
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
                    if (!value) {
                        stateObj[name] = "Image is required.";
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
        <section id={styles["edit-page"]}>
        <div className={styles["form"]}>
            <form className={styles["edit-form"]} method="POST" onSubmit={onSubmit} >
                <h2>Edit your card</h2>
                <p>Animal image</p>
                <input type="text" 
                       name="imageUrl" 
                       placeholder="Animal image" 
                       value={values.imageUrl} 
                       onChange={changeHandler} 
                       onBlur={validateInput} 
                />
                {error.imageUrl && <p className={styles["form-error"]}>{error.imageUrl}</p>}
                
                <p>Title</p>
                <input type="text" 
                       name="title" 
                       placeholder="Title" 
                       value={values.title} 
                       onChange={changeHandler} 
                       onBlur={validateInput} 
                />
                {error.title && <p className={styles["form-error"]}>{error.title}</p>}
                
                <p>Description</p>
                <textarea name="description" 
                          placeholder="Description" 
                          value={values.description} 
                          onChange={changeHandler} 
                          onBlur={validateInput} 
                ></textarea>
                {error.description && <p className={styles["form-error"]}>{error.description}</p>}
                
                <div>
                    <button type="submit" disabled={!isFormValid} >Edit</button>
                </div>
            </form>
        </div>
    </section>
    )
}
