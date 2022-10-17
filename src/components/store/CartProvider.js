import cartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmt =
            state.totalAmt + action.item.price * action.item.qty;
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingItemIndex];

        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                qty: existingCartItem.qty + action.item.qty,
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmt: updatedTotalAmt,
        };
    }

    if (action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[existingItemIndex];

        const updatedTotalAmt = state.totalAmt - existingItem.price;
        let updatedItems;
        if (existingItem.qty === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmt: updatedTotalAmt,
        };
    }
    return defaultState;
};

const defaultState = {
    items: [],
    totalAmt: 0,
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cart = {
        items: cartState.items,
        totalAmount: cartState.totalAmt,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <cartContext.Provider value={cart}>
            {props.children}
        </cartContext.Provider>
    );
};

export default CartProvider;
