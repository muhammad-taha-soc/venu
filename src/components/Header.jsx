import React, { useState } from 'react';
// import logo from "/assets/logo/logo.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        // setIsOpen(!isOpen);
    };
    return (
        <header className="bg-black text-white z-50 py-2 px-6 flex justify-between md:ml-[10%] md:mt-5 items-center rounded-full fixed md:w-[calc(80%-5rem)] w-[calc(95%-3rem)] top-10">
            <img src='/assets/logo/logo.svg' alt="Logo" className="" />

            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <nav className={`md:flex items-center space-x-6 text-sm ${isOpen ? 'flex' : 'hidden'} md:block`}>
                {['About', 'Features', 'Contact'].map((link, index) => (
                    <a
                        key={index}
                        href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="hover:text-gray-300 transition-colors duration-300"
                    >
                        {link}
                    </a>
                ))}
                <button className="bg-[#8B3EF8] hover:bg-[#8B3EF8] text-white py-2 px-4 rounded-full transition-colors duration-300">
                    Pre-Launch Sign Up
                </button>
            </nav>
        </header>

    );
};


export default Header;