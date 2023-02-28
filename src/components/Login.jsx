import logo from "../img/amazon-logo-black.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../firebase"


function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setUser({
                ...user,
                email: e.target.value
            })
        } else {
            setUser({
                ...user,
                password: e.target.value
            })
        }

    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential);
                navigate('/Amazon-clone/');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const registerUser = () => {

        createUserWithEmailAndPassword(auth, user.email, user.password)
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
        <div className="d-flex justify-content-center align-items-start bg-light" style={{ height: "100vh" }}>
            <div className="d-flex flex-column justify-content-center w-25 m-2">
                <Link to={"/Amazon-clone/"} >
                    <div className="text-center">
                        <img style={{ objectFit: "contain", width: "150px" }} src={logo} alt="logo" />
                    </div>
                </Link>
                <div className=" p-5" style={{ border: "0.5px solid #80808057", borderRadius: "5px" }}>
                    <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email" value={user.email} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="pass" value={user.password} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" onClick={signIn} className="btn bg-color w-100">Sign in</button>
                    <button type="submit" onClick={registerUser} className="btn bg-color w-100">Sign up</button>
                </div>
            </div>
        </div>
    )

}

export default Login;