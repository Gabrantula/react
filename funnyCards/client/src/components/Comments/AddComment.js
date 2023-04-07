import styles from './comments.module.css'

import { useState } from "react"

import { useForm } from "../../hooks/useForm"

export default function AddComment({
    onCommentSubmit,
}) {
    const {values, changeHandler, onSubmit} = useForm({
        comment: ''
    }, onCommentSubmit)

    const [error, setError] = useState({
        comment: ''
       
    })
    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "comment":
                    if (!value) {
                        stateObj[name] = "Can not be empty.";
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
        <article >
                <label>Add new comment:</label>
                <form className={styles["form"]} method="POST" onSubmit={onSubmit} >
                    {/* <input type='text' name='username' placeholder="User Name" value={username} onChange={onUsernameChange} />*/}
                    
                    <textarea name="comment" 
                              placeholder="Comment......" 
                              value={values.comment} 
                              onChange={changeHandler} 
                              onBlur={validateInput} 
                    ></textarea>
                    {error.comment && <p className={styles["form-error"]}>{error.comment}</p>}
                    
                    <input className={styles["action"]} type="submit" disabled={!isFormValid} value="Add Comment" />
                </form>
            </article>
    )
}
