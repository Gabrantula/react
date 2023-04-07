import styles from './register.module.css'
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from '../../hooks/useForm'


export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext)

  const { values, changeHandler, onSubmit } = useForm({
    username: '',
    email: '',
    password: '',
    rePass: ''
  }, onRegisterSubmit)

  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    rePass: ''
  })
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
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
          } else if (values.rePass && value !== values.rePass) {
            stateObj["rePass"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["rePass"] = values.rePass ? "" : error.rePass;
          }
          break;

        case "rePass":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (values.password && value !== values.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
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
    <section id={styles["register-page"]}>

      <div>
        <div className={styles["starsec"]}></div>
        <div className={styles["starthird"]}></div>
        <div className={styles["starfourth"]}></div>
        <div className={styles["starfifth"]}></div>
      </div>
      <div className={styles["flex"]}>
        <div className={styles["form"]}>
          <h2>Register</h2>

          <form className={styles["form-register"]} method="POST" onSubmit={onSubmit} >
            <p>Username</p>
            <input type="text" name="username" placeholder="username" value={values.username} onChange={changeHandler} onBlur={validateInput} />
            {error.username && <p className={styles["form-error"]}>{error.username}</p>}
          
            <p>Email</p>
            <input type="text" name="email" placeholder="email" value={values.email} onChange={changeHandler} onBlur={validateInput} />
            {error.email && <p className={styles["form-error"]}>{error.email}</p>}
           
            <p>Password</p>
            <input type="password" name="password" placeholder="password" value={values.password} onChange={changeHandler} onBlur={validateInput} />
            {error.password && <p className={styles["form-error"]}>{error.password}</p>}
           
            <p>Repeat Password</p>
            <input type="password" name="rePass" placeholder="repeat password" value={values.rePass} onChange={changeHandler} onBlur={validateInput} />
            {error.rePass && <p className={styles["form-error"]}>{error.rePass}</p>}
           
            <div>

              <button type="submit" disabled={!isFormValid}>register</button>
            </div>
            <p className={styles["message"]}>Already have an account? <Link to='/login'>Sign in</Link>.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
