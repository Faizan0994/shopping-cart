import styles from "../styles/cart.module.css";
import CartEntry from "./CartEntry";

function Cart({ cart, setCart }) {
    // Change cart to a simpler version to display
    function mergeCart(cart) {
        const productMap = {};

        cart.forEach((item) => {
            if (productMap[item.id]) {
                productMap[item.id].quantity += 1;
            } else {
                productMap[item.id] = { ...item, quantity: 1 };
            }
        });

        const finalCart = Object.values(productMap);

        return finalCart;
    }

    function displayEntries(cart) {
        return (
            <>
                {cart.map((item) => {
                    return (
                        <CartEntry
                            image={item.image}
                            title={item.product}
                            quantity={item.quantity}
                            price={item.price}
                            id={item.id}
                            removeFromCart={removeFromCart}
                            key={item.id}
                        />
                    );
                })}
            </>
        );
    }

    function calculateTotal(cart) {
        const total = cart.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);

        return Number(total.toFixed(1)); // allow precision upto one decimal place only
    }

    function removeFromCart(id) {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    const finalCart = mergeCart(cart);
    const total = calculateTotal(finalCart);

    return (
        <div className={styles.cart}>
            <h1 className={styles.cartHeading}>Your Cart</h1>
            {displayEntries(finalCart)}
            <div className={styles.checkoutSection}>
                <hr />
                <div className={styles.netTotal}>
                    <h2 className={styles.netTotalHeading}>Net Total</h2>
                    <h2 className={styles.netTotalAmount}>$ {total}</h2>
                </div>
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
