import styles from './login.module.css'
import { Link } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm"
import { useState } from 'react'


export default function Login() {
    const { onLoginSubmit } = useAuthContext()
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)

    const [error, setError] = useState({
        email: '',
        password: ''
    })
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "email":
                    /*if (!value) {
                      stateObj[name] = "Please enter Email.";
                    }*/
                    if (!regex.test(value)) {
                        stateObj[name] = "Invalid email format.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
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
        <section id={styles["login-page"]}>
            
                <div>
                    <div className={styles["starsec"]}></div>
                    <div className={styles["starthird"]}></div>
                    <div className={styles["starfourth"]}></div>
                    <div className={styles["starfifth"]}></div>
                </div>
                <div className={styles["flex"]}>
                <div className={styles["form"]}>
                    <h2>Login</h2>
                    <form className={styles["form-login"]} method="POST" onSubmit={onSubmit} >
                        <p>Email</p>
                        <input type="text" name="email" placeholder="email" value={values.email} onChange={changeHandler} onBlur={validateInput} />
                        {error.email && <p className={styles["form-error"]}>{error.email}</p>}

                        <p>Password</p>
                        <input type="password" name="password" placeholder="password" value={values.password} onChange={changeHandler} onBlur={validateInput} />
                        {error.password && <p className={styles["form-error"]}>{error.password}</p>}

                        <div>
                            <button type="submit" disabled={!isFormValid} >login</button>
                        </div>
                        <p className={styles["message"]}>Not registered? <Link to='/register'>Create an account</Link></p>
                    </form>
                </div>
            </div>
        </section>
    )
}
