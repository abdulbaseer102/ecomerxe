import {  FaShoppingBag, FaSearch, } from 'react-icons/fa';
import Resnav from '../res/page';
import { User2Icon } from 'lucide-react';

export default function Navbar() {
    return (
        <>
            {/* Promo Banner */}
            <div className=" text-white bg-black min-h-6 text-center py-2 font-bold">

            </div>

            {/* Navbar */}
            <nav className="bg-black text-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">

                    <div className='lg:hidden'>
                        <Resnav />
                    </div>

                    <div className="lg:flex items-center hidden">
                        <a href="#" className="hover:text-gray-400"><FaSearch className="text-xl" /></a>
                    </div>

                    {/* Logo Centered */}
                    <div className="text-center absolute left-1/2 transform -translate-x-1/2">
                        <a href="#" className="text-3xl font-bold ">
                            AZAIB <span className="font-extrabold"> Fragrances</span>
                        </a>
                    </div>

                    <div className="flex space-x-4 sm:space-x-6 items-center -mr-4">
                        {/* Search icon for mobile view */}
                        <a href="#" className="hover:text-gray-400 lg:hidden ">
                            <FaSearch className="text-3xl sm:text-4xl" />
                        </a>
                        {/* Cart icon always visible */}
                        <a href="/commponents/cart" className="hover:text-gray-400">
                            <FaShoppingBag className="text-2xl sm:text-5xl lg:text-2xl" />
                        </a>
                        <a href="/commponents/all" className="hover:text-gray-400">
                            <User2Icon className="text-5xl hidden lg:flex" />
                        </a>
                    </div>
                </div>

                {/* Navigation Links below the logo */}
                <div className="bg-black py-2 ">
                    <ul className="hidden lg:flex justify-center space-x-8 text-lg">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/commponents/cards" className="hover:underline">Catalog</a></li>
                        <li><a href="/commponents/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
