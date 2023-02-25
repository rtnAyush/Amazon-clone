import { useContext, useEffect } from "react";
import CartContext from "../context/AddToCart/CartContext";

function SubTotal() {
    const { items } = useContext(CartContext);

    useEffect(() => {
        getPrice()
    }, [items]);
    
    const getPrice = () => {
        let price = 0;

        items.forEach(item => {
            price += (item.qty * item.price);
        });

        return price;
    }
    return (
        <div className="card p-2">
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                    <span>Subtotal ({items.length} items):</span>
                    <span>
                        <small>
                            <sup> ₹ </sup>
                        </small>
                        <strong>
                            {
                                getPrice()
                            }
                        </strong>
                    </span>
                </h5>
                <span className="btn bg-color w-100 mt-3">Proceed to buy</span>
            </div>
        </div>
    )
}

export default SubTotal;