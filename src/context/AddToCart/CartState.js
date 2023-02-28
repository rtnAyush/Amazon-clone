import { useState } from "react";
import CartContext from "./CartContext";


function CartState(props) {
    const [items, setItems] = useState([]);
    const [user, setUser] = useState({});

    const addToCart = (item) => {
        let idx = items.findIndex((basketItem) => basketItem._id === item._id);
        if (idx !== -1) {
            items[idx].qty += 1;
        } else {
            item.qty = 1;
            setItems([...items, item]);
        }
    }

    const updateQty = (val, item) => {

        let idx = items.findIndex((basketItem) => basketItem._id === item._id);
        if (idx !== -1) {
            items[idx].qty = val;
            // console.log("aft", items[idx].qty);
        }
    }
    const removeFromCart = (item) => {

        let newBasket = items.filter((basketItem) => {
            return basketItem._id !== item._id;
        })
        setItems(newBasket);
    }

    const getUser = (user) => {
        setUser(user);
    }

    return (
        <CartContext.Provider value={{ items, user, addToCart, removeFromCart, updateQty, getUser }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartState;