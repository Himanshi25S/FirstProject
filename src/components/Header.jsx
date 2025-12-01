import { useState } from "react";
import { Bell, Wallet, ShoppingCart } from "lucide-react"; // icon library

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Left: Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Logo */}
        <h1 className="text-xl font-bold text-red-600">MediLink</h1>

        {/* Right icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Bell className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <Wallet className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-red-600" />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white shadow-md p-4 space-y-3 text-gray-700">
          <a href="#" className="block hover:text-red-600">Home</a>
          <a href="#" className="block hover:text-red-600">Deals</a>
          <a href="#" className="block hover:text-red-600">Categories</a>
          <a href="#" className="block hover:text-red-600">Profile</a>
        </nav>
      )}
    </header>
  );
}
