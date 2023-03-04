// for useReducer parameters
export const initialState = {
    basket: [],
    user: null,
}

export const getSubTotal = (basket) => {
    let total = basket.reduce((amt, item) => amt + item.price, 0)
    return total;
}

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case 'REMOVE_FROM_BASKET':
            const newBasket = [...state.basket];
            let idx1 = newBasket.findIndex((basketItem) => basketItem.id === action.id);
            if (idx1 !== -1) {
                newBasket.splice(idx1, 1);
            } else {
                console.warn(`product id ${(action.id)} does not exit`)
            }
            return {
                ...state,
                basket: newBasket,
            };

        case 'ADD_TO_BASKET_IN_GROUP':
            const items = [...state.basket];
            let idx = items.findIndex((basketItem) => basketItem.id === action.item.id);
            if (idx !== -1) {
                items[idx].qty += 1;
                return {
                    ...state,
                    basket: items,
                };
            } else {
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                }
            }

        default:
            return state;
    }
}

export default reducer;