import styles from "../styles/shop.module.css";
import Card from "./Card";

function Shop() {
    return (
        <div className={styles.shop}>
            <Card product={""} description="" price={""} image={""} />
            <Card product={""} description="" price={""} image={""} />
            <Card product={""} description="" price={""} image={""} />
            <Card product={""} description="" price={""} image={""} />
            <Card product={""} description="" price={""} image={""} />
            <Card product={""} description="" price={""} image={""} />
            <Card product={""} description="" price={""} image={""} />
        </div>
    );
}

export default Shop;
