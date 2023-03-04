import "./Product.css"
import { useStateValue } from "../../context/StateProvider";

function Product(props) {
    const { _id, name, price, rating, imgUrl } = props.data;

    const [{ }, dispacher] = useStateValue();

    const addToCart = () => {
        dispacher({
            type: 'ADD_TO_BASKET',
            item: {
                id: _id,
                name,
                price,
                rating,
                imgUrl,
                qty: 1,
            },
        });
    }

    return (
        <div className={props.class} style={{ gap: "10px" }}>
            <div className="card-body d-flex flex-column">

                <div className="product__info">
                    <p className="product__name">{name}</p>
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
                </div>

                <img src={process.env.PUBLIC_URL + imgUrl} className="product__img img-fluid" alt="..." />

                <button
                    className="btn btn-sm w-50 mt-2 m-auto btn-warning"
                    onClick={() => { addToCart(props.data) }}
                >
                    Add to Cart
                </button>

            </div>
        </div>
    );
}

export default Product;