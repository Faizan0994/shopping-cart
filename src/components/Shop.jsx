import { useEffect, useState } from "react";
import styles from "../styles/shop.module.css";
import Card from "./Card";
import { useOutletContext } from "react-router-dom";

function Shop() {
    const [products, setProducts] = useState(null);
    const { addToCart } = useOutletContext();
    useEffect(() => {
        async function getProducts() {
            const promise = await fetch("https://fakestoreapi.com/products");
            const data = await promise.json();
            setProducts(data);
        }
        getProducts();
    }, []);

    function generateCards() {
        if (products)
            return (
                <>
                    {products.map((item) => {
                        return (
                            <Card
                                product={item.title}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                id={item.id}
                                addToCart={addToCart}
                                key={item.id}
                            />
                        );
                    })}
                </>
            );
        return <></>;
    }
    return <div className={styles.shop}>{generateCards()}</div>;
}

export default Shop;
