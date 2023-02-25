import { useContext } from "react";
import CartContext from "../context/AddToCart/CartContext";
import CartProduct from "./CartProduct";
import SubTotal from "./SubTotal";
import { v4 as uuidv4 } from 'uuid';


function Cart() {
    const { items } = useContext(CartContext);

    return (
        <div className="container-fluid p-3 mt-5" >
            <div className="row mt-4">
                <div className="col-9">
                    <div className="card d-flex flex-row justify-content-between px-3">
                        <h4 className="card-title p-2">Shopping Cart</h4>
                        <p className="card-text align-self-end pe-3">Price</p>
                    </div>
                </div>
                {
                    items.length ? (
                        items.map((item) => {
                            return (
                                <div className="col-9">
                                    <CartProduct key={uuidv4()} item={item} />
                                </div>
                            )
                        }
                        )
                    ) : (
                        <div className="col-9" >
                            <div className=" card p-2" style={{ alignItems: "center" }}>
                                <img src="https://th.bing.com/th/id/OIP.r6aijQ7gtefVW3pa7N_t7AHaFQ?pid=ImgDet&rs=1" alt="" style={{ objectFit: "contain", width: "400px", height: "400px" }} />
                            </div>
                        </div>
                    )
                }
                <div className="col-3" style={{ position: "fixed", right: "1px" }}>
                    <SubTotal />
                </div>
            </div>

        </div>
    )
}

export default Cart;