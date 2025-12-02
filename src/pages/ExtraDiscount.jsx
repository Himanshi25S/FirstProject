import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue, push, set } from "firebase/database";
import Footer from "../components/Footer";
import { ArrowBigLeft, ShoppingCart, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ExtraDiscount() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const productRef = ref(db, "products");

    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));
        setProducts(list);
      }
    });
  }, []);

  // Increase qty
  const increaseQty = () => setQty(qty + 1);

  // Decrease qty
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  // Add to cart function
  const addToCart = () => {
    const cartRef = push(ref(db, "cart")); // Auto ID inside 'cart'

    set(cartRef, {
      ...selectedProduct,
      qty: qty,
    });

    alert("Item added to cart!");
    setSelectedProduct(null); // Close modal
    setQty(1);
  };

  return (
    <div className="p-4 pb-20">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <NavLink to="/"><ArrowBigLeft className="w-6 h-6" /></NavLink>
          <h2 className="text-lg font-semibold">Extra Discount</h2>
        </div>
         <NavLink to="/cart">
        <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-red-600" />
        </NavLink>
      </div>

      {/* PRODUCT LIST */}
      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)} // OPEN POPUP
            className="bg-red-50 rounded-xl p-3 shadow-sm border border-red-100 flex gap-4 cursor-pointer"
          >
            <img
              src={item.img}
              className="w-24 h-24 object-cover rounded-md"
              alt=""
            />

            <div className="flex flex-col justify-between w-full">
              <div>
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-gray-500 text-xs">MEDILINK AGENCIES</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                   <p className="text-gray-800 text-sm ">
                    Strip: {item.box}
                  </p>
                  <p className="text-gray-400 text-sm ">
                    MRP ₹{item.mrp}
                  </p>
                  <p className="font-bold text-lg">PTR. ₹{item.ptr}</p>
                </div>

                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  Qty {item.qty || 100}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
{selectedProduct && (
  <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex justify-center items-center z-50">

    <div className="bg-white w-[92%] rounded-2xl p-4 pb-6 relative shadow-xl max-h-[90vh] overflow-y-auto">

      {/* Close Button */}
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-2 rounded-full z-50 shadow-lg"
      >
        <X size={22} />
      </button>

      {/* Product Image */}
      <img
        src={selectedProduct.img}
        className="w-full h-50 object-cover rounded-xl mb-4 mt-12"
        alt="product"
      />

      {/* Product Title */}
      <h2 className="font-bold text-xl text-gray-900">
        {selectedProduct.name}
      </h2>
      <p className="text-gray-500 mb-4">MEDILINK AGENCIES</p>

      {/* Quantity & Add Button */}
      <div className="flex items-center justify-between mt-8">

        {/* Qty Buttons */}
        <div className="flex items-center gap-5 bg-red-50 px-2 py-1 rounded-full border shadow-sm">
          <button
            onClick={decreaseQty}
            className="text-2xl font-bold px-2"
          >
            –
          </button>

          <span className="text-lg font-semibold">{qty}</span>

          <button
            onClick={increaseQty}
            className="text-2xl font-bold px-2"
          >
            +
          </button>
        </div>

        {/* Add Item Button With Updated Price */}
        <button
          onClick={addToCart}
className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-lg font-semibold shadow-md"        >
          Add Item ₹{(selectedProduct.ptr * qty).toFixed(1)}
        </button>
      </div>
    </div>
  </div>
)}



      <Footer />
    </div>
  );
}
