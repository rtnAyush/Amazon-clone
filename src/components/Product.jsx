import { useContext } from "react";
import CartContext from "../context/AddToCart/CartContext";

function Product(props) {
    const { name, price, rating, imgUrl } = props.data;

    const { addToCart } = useContext(CartContext);
    return (
        <div className="card col m-3 p-4 justify-content-between">
            {/* style={{ width: "100%", maxWidth: "400px", minWidth: "100px" }} */}
            {/* max-width: 400px; */}
            <div className="d-flex flex-column">
                <p className="">{name}</p>
                <h5 className="price-box"><small><sup>₹</sup></small><strong> {price} </strong></h5>
                <p className="rating">{Array(rating).fill().map((_, i) => (<span>⭐</span>))}</p>
                <img src={imgUrl} className="align-self-center" style={{ objectFit: "contain", width: "200px", height: "200px" }} alt="..." />
                <span className="btn bg-color mt-3 align-self-center" onClick={() => { addToCart(props.data) }}>Add to Cart</span>
            </div>
        </div>
    );
}

export default Product;