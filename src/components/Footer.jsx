import { Home, Flame, PercentCircle, CreditCard, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 md:py-3">
      <div className="flex justify-between px-6">

        <div className="flex flex-col items-center text-gray-700 hover:text-red-600 cursor-pointer">
          <NavLink to="/">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
          </NavLink>
        </div>

        <div className="flex flex-col items-center text-gray-700 hover:text-red-600 cursor-pointer">
          <Flame className="w-6 h-6" />
          <span className="text-xs mt-1">Hot Deal</span>
        </div>

        <div className="flex flex-col items-center text-gray-700 hover:text-red-600 cursor-pointer">
          
          <NavLink to="/extra-discount">
          <PercentCircle className="w-6 h-6" />
          <span className="text-xs mt-1">Xtra %</span>
          </NavLink>
        </div>

        <div className="flex flex-col items-center text-gray-700 hover:text-red-600 cursor-pointer">
          <CreditCard className="w-6 h-6" />
          <span className="text-xs mt-1">Pay</span>
        </div>

        <div className="flex flex-col items-center text-gray-700 hover:text-red-600 cursor-pointer">
         <NavLink to="/orders">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs mt-1">Order</span>
          </NavLink>
        </div>

      </div>
    </footer>
  );
}
