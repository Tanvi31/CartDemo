import classes from "./Card.module.css";
import { useContext } from "react";
import cartContext from "./store/cart-context";
import { useRef } from "react";

const Card = ({ id, name, price, description, img }) => {
    const cartCtx = useContext(cartContext);

    const qtyRef = useRef();

    const addItemHandler = () => {
        const enteredQty = qtyRef.current.value;
        const enteredQtyNum = +enteredQty;
        cartCtx.addItem({
            id: id,
            key: id,
            name: name,
            price: price,
            qty: enteredQtyNum,
        });
    };

    return (
        <div className={classes.card}>
            {!img && <p>Loading....</p>}
            {img && <img src={img} alt="product-img" />}
            <h4 className={classes.heading}>{name}</h4>
            <p>
                <span>Description:</span> {description}
            </p>
            <div className={classes.qty}>
                <label htmlFor="qty">Quantity</label>
                <input
                    type="number"
                    id="qty"
                    step="1"
                    min={1}
                    max={5}
                    defaultValue="1"
                    ref={qtyRef}
                />
            </div>
            <p className={classes.price}>
                <span>Price:</span> {price}
            </p>
            <button onClick={addItemHandler} className={classes.addToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default Card;
