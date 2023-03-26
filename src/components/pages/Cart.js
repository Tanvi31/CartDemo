import classes from "./Cart.module.css";
import cartContext from "../store/cart-context";
import { useContext } from "react";
import CartCard from "../CartCard";

const Cart = () => {
    const cartCtx = useContext(cartContext);

    const isTotal = cartCtx.totalAmount > 0;

    return (
        <div className={classes.layout}>
            <h1>Place your Order</h1>
            {cartCtx.items.map((i) => {
                return (
                    <CartCard
                        key={i.key}
                        id={i.id}
                        name={i.name}
                        price={i.price}
                        qty={i.qty}
                    />
                );
            })}
            <div className={classes.total}>
                {isTotal ? (
                    <span>Total: {cartCtx.totalAmount.toFixed(2)}</span>
                ) : (
                    <span>Total: 0</span>
                )}
            </div>
        </div>
    );
};

export default Cart;
