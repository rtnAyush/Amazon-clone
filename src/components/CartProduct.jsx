function CartProduct(props) {
    const { name, price, rating, imgUrl } = props.item;
    return (

        <div className="card flex-row justify-content-around p-2">
            <img src={imgUrl} className="card-img-top m-2" alt="..." style={{ width: "200px" }} />
            <div className="card-body">
                <h6 className="card-title w-75">{name}</h6>
                <p className="card-text text-success w-75">In Stock</p>
                <p className="rating">{Array(rating).fill().map((_, i) => (<span>⭐</span>))}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="h5 price-box" style={{ minWidth: "6rem" }}><small><sup>₹</sup></small><strong> {price} </strong></div>
        </div>
    )
}

export default CartProduct;