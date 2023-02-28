import { Link } from "react-router-dom";
import logo from "../img/amazon-logo.png"
import CartBtn from "./CartBtn";
import "./Header.css"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext, useEffect } from "react";
import CartContext from "../context/AddToCart/CartContext";

function Header() {
    const { user, getUser } = useContext(CartContext);

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                getUser(user);
            }
        });
    }, []);

    const handleAuth = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            const user = {
                email: 'guest'
            };

            getUser(user);

        }).catch((error) => {
            // An error happened.
            alert(error);
        });
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
            <div className="d-flex">
                <Link className="navbar-brand mx-4" to={"/Amazon-clone/"}><img className="logo" src={logo} alt="logo" /></Link>
            </div>

            <div className="d-flex flex-grow-1">
                <input className="form-control search-box" type="search" placeholder="Search" aria-label="Search" />
                <i className="btn bi bi-search bg-color"></i>
            </div>

            <div className="d-flex nav-tools">
                <Link to={user.email === 'guest' && "/Amazon-clone/login"} style={{ textDecoration: 'none' }} >
                    <div onClick={handleAuth} className="nav-list mx-4 text-white">
                        <div className="nav-line-1">
                            <span>Hello, {user.email}</span>
                        </div>
                        <div className="nav-line-2">
                            <span>
                                {
                                    user.email !== 'guest' ? "sign Out" : "sign In"
                                }
                            </span>

                        </div>
                    </div>
                </Link>
                <div className="nav-list mx-4">
                    <div className="nav-line-1">
                        <span>Returns</span>
                    </div>
                    <div className="nav-line-2">
                        <span>& Orders</span>
                    </div>
                </div>
                <div className="nav-list mx-4">
                    <div className="nav-line-1">
                        <span>Your</span>
                    </div>
                    <div className="nav-line-2">
                        <span>Prime</span>
                    </div>
                </div>
                <CartBtn />
            </div>
        </nav>
    );
}

export default Header;