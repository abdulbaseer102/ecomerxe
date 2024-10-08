import React from 'react';
import ProductCard from '../card/page';

const products = [
  {
    id: 1,
    title: 'this perfeum is good',
    price: 49.99,
    image: 'https://perfumedubai.com/cdn/shop/articles/dior_sauvage_960x.jpg?v=1652439946',
    onSale: true,
  },
  {
    id: 2,
    title: 'this perfeum is good',
    price: 59.99,
    image: 'https://perfumedubai.com/cdn/shop/articles/dior_sauvage_960x.jpg?v=1652439946',
    onSale: false,
  },
  {
    id: 2,
    title: 'this perfeum is good',
    price: 59.99,
    image: 'https://perfumedubai.com/cdn/shop/articles/dior_sauvage_960x.jpg?v=1652439946',
    onSale: false,
  },
  {
    id: 2,
    title: 'this perfeum is good',
    price: 59.99,
    image: 'https://perfumedubai.com/cdn/shop/articles/dior_sauvage_960x.jpg?v=1652439946',
    onSale: false,
  },
  {
    id: 2,
    title: 'this perfeum is good',
    price: 59.99,
    image: 'https://perfumedubai.com/cdn/shop/articles/dior_sauvage_960x.jpg?v=1652439946',
    onSale: false,
  },
  {
    id: 2,
    title: 'this perfeum is good',
    price: 59.99,
    image: 'https://perfumedubai.com/cdn/shop/articles/dior_sauvage_960x.jpg?v=1652439946',
    onSale: false,
  },
  // Add more products here
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Fragrences</h1>

      {/* Grid layout for product cards */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onSale={product.onSale}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
