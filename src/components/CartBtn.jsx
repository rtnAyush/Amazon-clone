import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/AddToCart/CartContext";

function CartBtn() {
    const { items } = useContext(CartContext);

    return (
        <Link to={"/Amazon-clone/cart"} style={{ textDecoration: 'none' }} >
            <div className="nav-list mx-4 text-white">
                <div className="nav-line-2">
                    <span className="item-count">{items.length}</span>
                    <i className="bi bi-cart4 h4 mx-1"></i>
                    <span> Cart</span>
                </div>
            </div>
        </Link>
    );
}

export default CartBtn;