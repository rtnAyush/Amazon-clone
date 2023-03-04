import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

function BasketBtn() {
    const { items } = useContext(CartContext);

    return (
        <Link to={"/Amazon-clone/cart"} className="header__link basket-sm-right" >
            <div className="nav__option">
                <span className="nav__optionLine1" >
                    <span className="item__count">{items.length}</span>
                </span>
                <span className="nav__optionLine2" >
                    <i className="bi bi-cart4 cart__icon"></i>
                    Cart
                </span>
            </div>
        </Link>
    );
}

export default BasketBtn;