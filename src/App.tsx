import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Checkout from "./components/Checkout/Checkout";
import ProtectedRoute from "./utils/protectedRoute";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route
                        path="/login"
                        element={
                            <ProtectedRoute>
                                <LoginPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
