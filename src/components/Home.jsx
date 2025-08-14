import styles from "../styles/home.module.css";
import bgImgage from "../assets/shopBackground.jpg";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate(); // can't call the hook directly within the callback

    return (
        <div className={styles.home}>
            <img src={bgImgage} alt="" />
            <section>
                <h1>Highest Quality Products</h1>
                <p>Available at the best prices in the market</p>
                <button
                    onClick={() => {
                        navigate("/shop");
                    }}
                >
                    Shop Now
                </button>
            </section>
        </div>
    );
}

export default Home;
