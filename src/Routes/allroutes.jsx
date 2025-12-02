import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExtraDiscount from "../pages/ExtraDiscount";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";


export default function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra-discount" element={<ExtraDiscount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />


      </Routes>
   
  );
}