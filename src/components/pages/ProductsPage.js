import classes from "./ProductsPage.module.css";
import Card from "../Card";
import { faker } from "@faker-js/faker";

const ProductsPage = () => {
    faker.seed(20);
    const DUMMY_PRODUCTS = [
        {
            id: "0",
            name: "Computer",
            price: "523.99",
            description: "lorem ipsum",
            img: faker.image.business(null, null, true),
        },
        {
            id: "1",
            name: "Bottle",
            price: "23.99",
            description: "lorem ipsum",

            img: faker.image.business(null, null, true),
        },
        {
            id: "2",
            name: "Toaster",
            price: "332.99",
            description: "lorem ipsum",
            img: faker.image.business(null, null, true),
        },
        {
            id: "3",
            name: "Chips",
            price: "13.49",
            description: "lorem ipsum",
            img: faker.image.business(null, null, true),
        },
        {
            id: "4",
            name: "Bag",
            price: "63.49",
            description: "lorem ipsum",
            img: faker.image.business(null, null, true),
        },
        {
            id: "5",
            name: "Playstation",
            price: "643.49",
            description: "lorem ipsum",
            img: faker.image.business(),
        },
    ];

    return (
        <div className={classes.layout}>
            <h3>Product Details..</h3>
            <div className={classes.container}>
                {DUMMY_PRODUCTS.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            img={item.img}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsPage;
