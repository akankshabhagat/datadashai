import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
    className="w-full bg-gradient-to-r from-blue-400 to-indigo-600 text-white shadow-lg"
    style={{ '--font-display': '"Oswald", sans-serif' }}
  >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
   
        <a href="#" className="text-2xl font-bold tracking-wide">DatadashAI</a>

      
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#" className="hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Login</a>
          </li>
         
        </ul>

     
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

    
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-blue-500 text-white py-4 space-y-4 ">
          
          <li>
            <a href="#" className="hover:text-gray-300" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300" onClick={toggleMenu}>Services</a>
          </li>
        
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
