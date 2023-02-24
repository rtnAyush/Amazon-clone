import { useContext } from "react";
import CartContext from "../context/AddToCart/CartContext";
import CartProduct from "./CartProduct";

function Cart() {
    const { items } = useContext(CartContext);
    return (
        <div className="container-fluid p-3 mt-5" >
            <div className="row">
                <div className="col-9">
                    <div className="card d-flex flex-row justify-content-between px-3">
                        <h4 className="card-title p-2">Shopping Cart</h4>
                        <p className="card-text align-self-end pe-3">Price</p>
                    </div>
                </div>
                {
                    items.map((item) => {
                        return (
                            <div className="col-9">
                                <CartProduct key={Math.random()} item={item} />
                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default Cart;