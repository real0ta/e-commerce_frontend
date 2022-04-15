import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Checkout from "./components/Checkout/Checkout";
import ProtectedRoute from "./utils/protectedRoute";
import Products from "./components/Products/Products";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/category/:name" element={<ProductsByCategory />} />
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
