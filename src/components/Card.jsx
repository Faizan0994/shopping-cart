import { useState } from "react";
import styles from "../styles/card.module.css";

function Desc({ text, maxLength = 40 }) {
    // for the 'read more' functionality
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= maxLength) {
        return <p className={styles.desc}>{text}</p>;
    }

    const displayedText = isExpanded ? text : text.slice(0, maxLength) + "...";

    return (
        <p className={styles.desc}>
            {displayedText}{" "}
            <button onClick={() => setIsExpanded((prev) => !prev)}>
                {isExpanded ? "read less" : "read more"}
            </button>
        </p>
    );
}

function Card({ product, description = "", price, image, id, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    function purchase() {
        const itemList = [];
        const item = { product: product, price: price, id: id, image: image };
        for (let i = 1; i <= quantity; i++) {
            itemList.push(item);
        }
        addToCart(itemList);
    }

    return (
        <div className={styles.card}>
            <div className={styles.imgSection}>
                <img src={image} alt="" />
            </div>
            <div className={styles.detailSection}>
                <h2>{product}</h2>
                <Desc text={description} />
                <p className={styles.price}>$ {price}</p>
                <div className={styles.actions}>
                    <label htmlFor={`${id}`} className={styles.qtyLabel}>
                        Quantity:
                    </label>
                    <div className={styles.inputContainer}>
                        <button
                            className={styles.qtyButton}
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                        <input
                            type="number"
                            id={`${id}`}
                            value={quantity}
                            onChange={(event) => {
                                setQuantity(event.target.value);
                            }}
                        />
                        <button
                            className={styles.qtyButton}
                            onClick={() => setQuantity(quantity - 1)}
                        >
                            -
                        </button>
                    </div>
                    <button className={styles.buyButton} onClick={purchase}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
