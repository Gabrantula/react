import { Link } from "react-router-dom"

export default function Register() {
    return (
        <section id="register-page">
        <div className="form">
            <h2>Register</h2>
            <form className="form-register">
                <p>Username</p>
                <input type="text" name="username" placeholder="username" />
                <p>Email</p>
                <input type="text" name="email" placeholder="email" />
                <p>Password</p>
                <input type="password" name="password" placeholder="password" />
                <p>Repeat Password</p>
                <input type="password" name="rePass" placeholder="repeat password" />
                <div>
                    <button type="submit">register</button>
                </div>
                <p className='message'>Already have an account? <Link to='/login'>Sign in</Link>.</p>
            </form>
        </div>
    </section>
    )
}