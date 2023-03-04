import "./Cart.css"
import CartProduct from "./CartProduct";
import SubTotal from "./SubTotal";
import { v4 as uuidv4 } from 'uuid';
import { useStateValue } from "../../context/StateProvider";


function Cart() {
    const [{ basket }] = useStateValue();

    return (
        <div className="container-fluid mt-5" >

            <div className="row flex-column-reverse subtotal-left">
                <div className="col col-md-9">
                    <div className="row">
                        <div className="card col">
                            <h4 className="card-title p-2">Shopping Cart</h4>
                        </div>
                        {
                            basket.length ? (
                                basket.map((item) => {
                                    return (
                                        <div className="col-12 card">
                                            <CartProduct key={uuidv4()} item={item} />
                                        </div>
                                    )
                                }
                                )
                            ) : (
                                <div className="col-12 card text-center" >
                                    <div>
                                        <img src="https://th.bing.com/th/id/OIP.r6aijQ7gtefVW3pa7N_t7AHaFQ?pid=ImgDet&rs=1" alt="" style={{ objectFit: "contain", width: "25rem", height: "25rem" }} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col col-md-3">
                    <div className="row">
                        <div className="col-12">
                            {
                                basket.length !== 0 ? (<SubTotal />) : null
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart;