import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue, update, remove, push, set } from "firebase/database";
import { ArrowBigLeft, ShoppingCart, Trash2 } from "lucide-react";
import Footer from "../components/Footer";
import { NavLink, useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartRef = ref(db, "cart");

    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const arr = Object.keys(data).map((cartId) => ({
          cartId,
          ...data[cartId],
        }));
        setCart(arr);
      } else {
        setCart([]);
      }
    });
  }, []);

  // CONFIRM ORDER
  const confirmOrder = async () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const orderRef = ref(db, "orders");

    const orderData = {
      items: cart,
      status: "pending",
      createdAt: new Date().toISOString(),
      totalAmount: cart.reduce((sum, item) => sum + item.ptr * item.qty, 0),
    };

    // create unique order id
    const newOrderRef = push(orderRef);

    // save order
    await set(newOrderRef, orderData);

    // clear cart
    await remove(ref(db, "cart"));

    alert("Order Successfully Placed!");
  };

  // Increase qty
  const increaseQty = (item) => {
    update(ref(db, `cart/${item.cartId}`), { qty: item.qty + 1 });
  };

  // Decrease qty
  const decreaseQty = (item) => {
    if (item.qty > 1) {
      update(ref(db, `cart/${item.cartId}`), { qty: item.qty - 1 });
    }
  };

  // REMOVE ITEM
  const deleteItem = (e, cartId) => {
    e.stopPropagation();
    remove(ref(db, `cart/${cartId}`));
  };

  return (
    <div className="p-4 pb-20">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <NavLink to="/extra-discount">
          <ArrowBigLeft className="w-6 h-6" />
        </NavLink>

        <div className="flex items-center gap-2">
          <ShoppingCart className="text-red-500" />
          <h2 className="text-lg font-semibold">Cart</h2>
        </div>

        <span className="text-2xl">⋮</span>
      </div>

      {/* CART LIST */}
      <div className="space-y-4">

        {cart.map((item) => (
          <div
            key={item.cartId}
            className="bg-red-50 rounded-xl p-3 shadow-sm border border-red-100 relative"
          >
            {/* DELETE BUTTON */}
            <button
              onClick={(e) => deleteItem(e, item.cartId)}
              className="absolute top-3 right-3 text-red-500"
            >
              <Trash2 size={20} />
            </button>

            <div className="flex gap-4">
              {/* IMAGE */}
              <img
                src={item.img}
                className="w-24 h-24 object-cover rounded-xl"
                alt=""
              />

              {/* TEXT */}
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h3 className="font-semibold text-[16px]">{item.name}</h3>

                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full mt-1 inline-block">
                    70% OFF
                  </span>
                </div>

                {/* PRICE */}
                <div>
                  <p className="text-black text-lg font-bold">
                    ₹{(item.ptr * item.qty).toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-xs line-through">
                    ₹{item.mrp}
                  </p>
                </div>
              </div>
            </div>

            {/* QTY SECTION */}
            <div className="flex justify-between items-center mt-4">

              <div className="flex items-center gap-3 bg-red-50 px-2 rounded-full border">
                <button onClick={() => decreaseQty(item)} className="text-xl font-bold">
                  –
                </button>

                <span className="text-lg">{item.qty}</span>

                <button onClick={() => increaseQty(item)} className="text-xl font-bold">
                  +
                </button>
              </div>

              <button className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-sm font-medium">
                See more like this
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* ADD MORE */}
      <button
        className="text-red-500 font-semibold flex items-center gap-2 mt-6"
        onClick={() => navigate("/extra-discount")}
      >
        <span className="text-2xl">+</span> Add more items
      </button>

      {/* ICONS */}
      <div className="flex justify-around mt-6">
        <div className="flex flex-col items-center">
          <div className="bg-red-50 p-4 rounded-full">
            <ShoppingCart className="text-red-500" />
          </div>
          <p className="text-xs mt-2">Secure Payment</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-red-50 p-4 rounded-full">🚚</div>
          <p className="text-xs mt-2">Fast Delivered</p>
        </div>
      </div>

      {/* COUPONS */}
      <button className="border border-red-500 text-red-500 w-full py-1 rounded-xl mt-6 font-semibold text-lg">
        🎟 View Coupons & Offers
      </button>

      {/* ORDER CONFIRM */}
      <button
        onClick={confirmOrder}
        className="bg-green-600 text-white w-full py-2 rounded-xl mt-4 font-semibold text-lg"
      >
        Order Confirm
      </button>

      <Footer />
    </div>
  );
}
