import { Link } from "react-router-dom"

export default function Login() {
    return (
        <section id="login-page">
        <div className="form">
            <h2>Login</h2>
            <form className="form-login">
                <p>Email</p>
                <input type="text" name="email" placeholder="email" />
                <p>Password</p>
                <input type="password" name="password" placeholder="password" />
                <div>
                    <button type="submit">login</button>
                </div>
                <p className="message">Not registered? <Link to='/register'>Create an account</Link></p>
            </form>
        </div>
    </section>
    )
}