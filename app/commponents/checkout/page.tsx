'use client'
import { useRouter } from 'next/router';
import React,{ useState } from 'react';
export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
        { id: 3, name: 'Product 3', price: 9.99, quantity: 1 },
      ]);

  const handleCheckout = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Implement checkout logic here
    alert('Checkout successful!');
    ('/'); // Redirect after checkout
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleCheckout} className="space-y-4">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
         
            <div className="border-t pt-2">
              <span className="font-bold">Total: ${totalPrice}</span>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Address"
                required
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="City"
                required
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="State"
                required
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                required
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Country"
                required
                className="border rounded-md p-2"
              />
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Payment Information</h2>
            <input
              type="text"
              placeholder="Card Number"
              required
              className="border rounded-md p-2 mb-2"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                required
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="CVC"
                required
                className="border rounded-md p-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Complete Checkout
          </button>
        </form>
      )}
    </div>
  );
}


