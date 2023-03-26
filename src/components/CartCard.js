import classes from "./CartCard.module.css";
import cartContext from "./store/cart-context";
import { useContext } from "react";

const CartCard = ({ id, name, price, qty }) => {
    const cartCtx = useContext(cartContext);

    const removeItem = () => {
        cartCtx.removeItem(id);
    };

    return (
        <div className={classes.card}>
            <h4>
                {name}
                {id}
            </h4>
            <p className={classes.qty}>
                Quantity: [ {qty} ]
                <span className={classes.price}>
                    {" "}
                    {price} x {qty}
                </span>
                <button className={classes.minusBtn} onClick={removeItem}>
                    -
                </button>
            </p>
        </div>
    );
};

export default CartCard;
