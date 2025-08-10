import { useState } from "react";
import "./App.css";

function App() {
    const [itemCount, setItemCount] = useState(0);
    const [activeButton, setActiveButton] = useState("home");

    function assignActiveStatus(currentButton) {
        if (activeButton === currentButton) return "active";
    }
    return (
        <>
            <header>
                <h1 className="shop-heading">SHOP</h1>
                <nav>
                    <button className={assignActiveStatus("home")}>Home</button>
                    <div className="divider"></div>
                    <button className={assignActiveStatus("shop")}>Shop</button>
                </nav>
                <div className="cart-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
                    </svg>

                    {(() => {
                        if (itemCount > 0)
                            return (
                                <div className="cart-number">{itemCount}</div>
                            ); // No need to display 0
                    })()}
                </div>
            </header>
        </>
    );
}

export default App;
