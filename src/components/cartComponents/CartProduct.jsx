import { useStateValue } from "../../context/StateProvider";
import "./Cart.css"

function CartProduct(props) {

    const { id, name, price, rating, imgUrl, qty } = props.item;
    const [{ }, dispacher] = useStateValue();

    // const getQty = () => {
    //     var val = document.getElementById(_id).value;
    //     // updateQty(val, props.item);
    // }

    const removeItem = () => {
        dispacher({
            type: 'REMOVE_FROM_BASKET',
            id,
        })
    }
    return (
        <div className="d-flex flex-row">
            <div>
                <img src={process.env.PUBLIC_URL + imgUrl} className="cart__product__img img-fluid" alt="..." />
            </div>
            <div className="product__dec">
                <p className="">{name}</p>
                <div className="product__price">
                    <small>
                        <sup>₹</sup>
                    </small>
                    <strong> {price}</strong>
                </div>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (<p>⭐</p>))
                    }
                </div>
                <p className="text-success">In Stock</p>
                <div className="card-text">
                    <select id={id} name="item-qty">
                        <option value="" >{qty}</option>
                        {
                            Array(10).fill().map((_, i) => (<option value={i + 1} >{i + 1}</option>))
                        }
                    </select>
                </div>

                <button
                    onClick={removeItem}
                    className="btn btn-sm m-2 btn-warning"
                >
                    Remove
                </button>
            </div>

        </div>
    )
}

export default CartProduct;