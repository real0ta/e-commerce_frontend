import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
