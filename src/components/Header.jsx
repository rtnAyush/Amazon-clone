import logo from "../img/amazon-logo.png"
import CartBtn from "./CartBtn";
import "./Header.css"

function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
            <div className="d-flex">
                <a className="navbar-brand mx-4" href="/"><img className="logo" src={logo} alt="logo" /></a>
            </div>

            <div className="d-flex flex-grow-1">
                <input className="form-control search-box" type="search" placeholder="Search" aria-label="Search" />
                <i className="btn bi bi-search bg-color"></i>
            </div>

            <div className="d-flex nav-tools">
                <div className="nav-list mx-4">
                    <div className="nav-line-1">
                        <span>Hello</span>
                    </div>
                    <div className="nav-line-2">
                        <span>Sign in</span>
                    </div>
                </div>
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