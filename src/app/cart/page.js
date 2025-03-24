'use client';
import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Handmade Necklace', price: 25 },
    { id: 2, name: 'Vintage Art Print', price: 40 },
  ]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-lg bg-white p-6 shadow-md rounded-md">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-3">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>

          <button className="mt-6 w-full bg-yellow-400 p-3 rounded-md font-bold">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
