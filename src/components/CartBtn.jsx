import { useContext } from "react";
import CartContext from "../context/AddToCart/CartContext";

function CartBtn() {
    const { items } = useContext(CartContext);

    return (
        <div className="nav-list mx-4">
            <div className="nav-line-2">
                <span className="item-count">{items.length}</span>
                <i className="bi bi-cart4 h4 mx-1"></i>
                <span>Cart</span>
            </div>
        </div>
    );
}

export default CartBtn;