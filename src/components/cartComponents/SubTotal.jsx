import { getSubTotal } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

function SubTotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="card p-2">
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                    <span>Subtotal ({basket.length} items):</span>
                    <span>
                        <small>
                            <sup> ₹ </sup>
                        </small>
                        <strong>
                            {
                                getSubTotal(basket)
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