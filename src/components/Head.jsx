import "./Header.css"
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRef, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";

function Header() {
    const [{ basket, user }] = useStateValue();
    const logo = useRef();
    const ref = useRef();
    const searchBox = useRef();


    useEffect(() => {
        handleScroll();

        // eslint-disable-next-line
        return () => {
            handleScroll();
        }
    }, []);

    const handleAuth = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

            // getUser('');

        }).catch((error) => {
            // An error happened.
            alert(error);
        });
    }

    const handleScroll = () => {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            let currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll) {
                logo.current.classList.add('hide-sm');
                ref.current.classList.add('flex-nowrap');
                searchBox.current.classList.remove('search__box');
            } else if (currentScroll === 0) {
                logo.current.classList.remove('hide-sm');
                ref.current.classList.remove('flex-nowrap');
                searchBox.current.classList.add('search__box');
            }

            lastScroll = currentScroll;
        });
    }
    return (
        <>
            <nav ref={ref} className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">


                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <input id="menu-toggle" type="checkbox" />
                            <label class='menu-button-container' for="menu-toggle">
                                <div class='menu-button'></div>
                            </label>
                        </span>
                    </button>



                    <Link className="navbar-brand" to="/Amazon-clone/">
                        <img ref={logo} className="logo" src={process.env.PUBLIC_URL + "/images/amazon-logo.png"} alt="logo" />
                    </Link>
                </div>

                <div ref={searchBox} className="d-flex flex-grow-1 search__box same-order mx-2">
                    <input className="form-control search-box" type="search" placeholder="Search" aria-label="Search" />
                    <i className="btn bi bi-search bg-color"></i>
                </div>


                <div className="d-flex justify-content-evenly nav-tools">
                    <div className="collapse navbar-collapse menu menu-sm" id="navbarContent">

                        <Link to={!user && "/Amazon-clone/login"} className="header__link nav-item" >
                            <div onClick={handleAuth} className="nav__option">
                                <span className="nav__optionLine1">Hello, {user ? (user.email) : "Guest"} </span>
                                <span className="nav__optionLine2">{user ? "sign Out" : "sign In"}</span>
                            </div>
                        </Link>

                        <Link to="/Amazon-clone/" className="header__link nav-item" >
                            <div className="nav__option">
                                <span className="nav__optionLine1" >Returns</span>
                                <span className="nav__optionLine2" >& Orders</span>
                            </div>
                        </Link>

                        <Link to="/Amazon-clone/" className="header__link nav-item" >
                            <div className="nav__option">
                                <span className="nav__optionLine1" >Your</span>
                                <span className="nav__optionLine2" >Prime</span>
                            </div>
                        </Link>
                    </div>
                    <Link to={"/Amazon-clone/cart"} className="header__link" >
                        <div className="nav__option">
                            <span className="nav__optionLine1" >
                                <span className="item__count">{basket.length}</span>
                            </span>
                            <span className="nav__optionLine2" >
                                <i className="bi bi-cart4 cart__icon"></i>
                                Cart
                            </span>
                        </div>
                    </Link>
                </div>


            </nav >
        </>

    );
}

export default Header;