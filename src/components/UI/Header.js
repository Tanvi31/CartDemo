import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import cartContext from "../store/cart-context";
import { useContext } from "react";

const Header = () => {
    const cartCtx = useContext(cartContext);

    // const totalItemsInCart = cartCtx.items.reduce((currNum, item) => {
    //     return currNum + item.qty;
    // }, 0);
    const totalItemsInCart = cartCtx.items.length;
    // console.log(totalItemsInCart);

    return (
        <nav className={classes.header}>
            <Link to="/">
                <h1 className={classes.heading}>ShoppIn</h1>
            </Link>
            <ul>
                <Link to="/cart">
                    <li>
                        <p>Cart</p>
                        <span className={classes.cartTotal}>
                            {totalItemsInCart}
                        </span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Header;
