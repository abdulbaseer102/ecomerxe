import React from 'react';


 const ProductCard= ({ id, title, price, image, onSale }) => {//+"55088ad0-65b2-41c3-b81c-3cbf60d16b46","source":"instruct"}
    return (
        <div>


            <div className="bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out relative">

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
                        Buy Now
                    </button>
                    <button className="mt-4 w-full bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-300 ease-in-out">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
