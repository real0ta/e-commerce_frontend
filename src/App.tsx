import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Checkout from "./components/Checkout/Checkout";
import ProtectedRoute from "./utils/protectedRoute";
import Products from "./components/Products/Products";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";
import AdminPage from "./components/AdminPage/AdminPage";
import SearchResults from "./components/SearchResults/SearchResults";
import AddProduct from "./components/AddProduct/AddProduct";
import AdminProducts from "./components/AdminPage/AdminProducts";
import AdminCategories from "./components/AdminCategories/AdminCategories";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/category/:name" element={<ProductsByCategory />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/search/:string" element={<SearchResults />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/admin/" element={<AdminPage />}>
                        <Route path="" element={<AdminProducts />} />
                        <Route path="add-product" element={<AddProduct />} />
                        <Route path="categories" element={<AdminCategories />} />
                    </Route>
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
