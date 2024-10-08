'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function ProductCard({ id, title, price, image, onSale }) {
    return (
        <motion.div
            className="bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out relative"
            initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
            animate={{ opacity: 1, scale: 1 }} // Final animation state
            transition={{ duration: 3 }} // Animation duration
        >
            {/* Sale Badge */}
            {onSale && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                    Sale
                </div>
            )}

            {/* Product Image */}
            <div className="h-64 bg-gray-100 flex justify-center items-center">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
                <p className="text-gray-600 mt-2">${(price || 0).toFixed(2)}</p>

                {/* Add to Cart Button */}
                <button className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out">
                    <Link href="/components/checkout">Buy Now</Link>
                </button>
                <button className="mt-4 w-full bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-300 ease-in-out">
                    <Link href='/components/cart'>Add to Cart</Link>
                </button>
            </div>
        </motion.div>
    );
}
