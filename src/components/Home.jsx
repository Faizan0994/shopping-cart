import styles from "../styles/home.module.css";
import bgImgage from "../assets/shopBackground.jpg";
function Home() {
    return (
        <div className={styles.home}>
            <img src={bgImgage} alt="" />
            <section>
                <h1>Highest Quality Products</h1>
                <p>Available at the best prices in the market</p>
                <button>Shop Now</button>
            </section>
        </div>
    );
}

export default Home;
