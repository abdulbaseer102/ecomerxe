'use client';
import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
    { id: 3, name: 'Product 3', price: 9.99, quantity: 1 },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Function to handle quantity change
  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
      )
    );
  };

  // Function to remove item from cart
  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Your Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-xl p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
                <div className="flex-1 md:mr-4 mb-2 md:mb-0">
                  <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-200"
                  >
                    -
                  </button>
                  <span className="mx-2 text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-200"
                  >
                    +
                  </button>
                  <span className="ml-4 font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-600 text-white ml-4 px-3 py-1 rounded hover:bg-red-700 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold text-gray-800">Total: ${totalPrice}</h2>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
            <a href="/commponents/checkout">Proceed to Checkout</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
