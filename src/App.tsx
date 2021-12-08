import Header from './components/Header/Header'
import './App.css';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
    </div>
  );
}

export default App;
