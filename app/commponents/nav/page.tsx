import { FaUser, FaShoppingBag, FaSearch } from 'react-icons/fa';

export default function Navbar() {
    return (
        <>
            {/* Promo Banner */}
            <div className=" text-white bg-black min-h-6 text-center py-2 font-bold">
                
            </div>

            {/* Navbar */}
            <nav className="bg-black text-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    
                    {/* Left Side - Search Icon */}
                    <div className="flex items-center">
                        <a href="#" className="hover:text-gray-400"><FaSearch className="text-xl" /></a>
                    </div>

                    {/* Logo Centered */}
                    <div className="text-center absolute left-1/2 transform -translate-x-1/2">
                        <a href="#" className="text-3xl font-bold">
                            AZAIB <span className="font-extrabold">Fragrances</span>
                        </a>
                    </div>

                    {/* Right Side - Cart and User Icons */}
                    <div className="flex space-x-6 items-center">
                        <a href="#" className="hover:text-gray-400"><FaUser className="text-xl" /></a>
                        <a href="#" className="hover:text-gray-400"><FaShoppingBag className="text-xl" /></a>
                    </div>
                </div>

                {/* Navigation Links below the logo */}
                <div className="bg-black py-2">
                    <ul className="flex justify-center space-x-8 text-lg">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Catalog</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
