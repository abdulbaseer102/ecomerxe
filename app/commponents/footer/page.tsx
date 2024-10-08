// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Subscription Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Subscribe to Our Emails</h2>
          <p className="text-gray-400 mt-2">
            Get the latest updates and exclusive offers straight to your inbox.
          </p>
          
          <form className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          
          {/* Copyright */}
          <p className="mt-6 md:mt-0 text-gray-500">&copy; 2024 Azaib Fragrances. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
