import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./components/pages/ProductsPage";
import Cart from "./components/pages/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
    return (
        <CartProvider>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>
                    <Route path="/" exact>
                        <ProductsPage />
                    </Route>
                    <Route path="*">
                        <ProductsPage />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </CartProvider>
    );
}

export default App;
