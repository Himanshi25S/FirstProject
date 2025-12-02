import { ref, onValue, remove } from "firebase/database";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Trash2 } from "lucide-react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orderRef = ref(db, "orders");

    onValue(orderRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data).map((orderId) => ({
          orderId,
          ...data[orderId],
        }));
        setOrders(list);
      } else {
        setOrders([]);
      }
    });
  }, []);

  // DELETE ORDER
  const deleteOrder = (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    remove(ref(db, `orders/${orderId}`));
    alert("Order deleted successfully!");
  };

  return (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-bold mb-4">New Orders</h2>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders available.</p>
      )}

      {orders.map((o) => (
        <div
          key={o.orderId}
          className="p-3 border bg-red-50 rounded-xl mb-3 relative"
        >
          {/* DELETE BUTTON */}
          <button
            onClick={() => deleteOrder(o.orderId)}
            className="absolute top-3 right-3 text-red-600"
          >
            <Trash2 size={20} />
          </button>

          <h3 className="font-bold">Order ID: {o.orderId}</h3>
          <p className="font-semibold text-sm capitalize">Status: {o.status}</p>
          <p className="font-semibold text-sm">Total: ₹{o.totalAmount}</p>

          <h4 className="font-semibold mt-2">Items:</h4>
          {o.items.map((i) => (
            <p key={i.cartId} className="text-sm">
              {i.name} — Qty: {i.qty}
            </p>
          ))}
        </div>
      ))}

      <Footer />
    </div>
  );
}
