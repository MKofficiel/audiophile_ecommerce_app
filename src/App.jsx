import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./ui/Home";
import ProductCategory from "./features/product/ProductCategory";
import Cart from "./features/cart/Cart";
import Checkout from "./features/checkout/Checkout";
import ProductDetail from "./features/product/ProductDetail";
import NotFoundPage from "./ui/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:type' element={<ProductCategory />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
