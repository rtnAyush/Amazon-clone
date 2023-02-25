import { useContext } from "react";
import CartContext from "../context/AddToCart/CartContext";



function CartProduct(props) {
    const { removeFromCart, updateQty } = useContext(CartContext);
    const { _id, name, price, rating, imgUrl, qty } = props.item;

    const getQty = () => {
        var val = document.getElementById(_id).value;
        updateQty(val, props.item);
    }
    return (

        <div className="card flex-row justify-content-around p-2">
            <img src={imgUrl} className="card-img-top m-2" alt="..." style={{ objectFit: "contain", width: "200px", height: "200px" }} />
            <div className="card-body">
                <h6 className="card-title w-75">{name}</h6>
                <p className="card-text text-success w-75">In Stock</p>
                <p className="card-text text-success w-75">
                    <select id={_id} name="item-qty" onChange={getQty}>
                        <option value="" >{qty}</option>
                        {
                            Array(10).fill().map((_, i) => (<option value={i + 1} >{i + 1}</option>))
                        }
                    </select>
                </p>
                <p className="rating">
                    {
                        Array(rating).fill().map((_) => (<span>⭐</span>))
                    }
                </p>
                <span onClick={() => { removeFromCart(props.item) }} className="btn bg-color mt-3 align-self-center">Remove item</span>
            </div>
            <div className="h5 price-box" style={{ minWidth: "6rem" }}><small><sup>₹</sup></small><strong> {price} </strong></div>
        </div>
    )
}

export default CartProduct;