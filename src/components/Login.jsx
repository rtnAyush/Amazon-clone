import "./Login.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                navigate('/Amazon-clone/');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const registerUser = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                if (userCredential) {
                    navigate('/Amazon-clone/');
                }
            })
            .catch((error) => {
                alert(error.code);
            });
    }

    return (
        <div className="login">

            <Link to={"/Amazon-clone/"} >
                <img className="login__logo" src={process.env.PUBLIC_URL + "/images/amazon-logo-black.png"} alt="logo" />
            </Link>

            <div className="login__container">
                <h2>Sign In</h2>
                <form action="">
                    <h6>Email address</h6>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" />
                    <h6>Password</h6>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" />
                    <button type="submit" onClick={signIn} className="btn bg-warning w-100">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button style={{ backgroundColor: "#ededed" }} type="submit" onClick={registerUser} className="btn btn-outline-secondary">Create your Amazon account</button>
            </div>
        </div>
    )

}

export default Login;