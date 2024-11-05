import React,{useState} from 'react';
// import SignUpModal from './SignUpModal';
// import logo from "/assets/logo/logo.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-auto  mx-auto bg-black text-white z-50 py-3 px-6 flex items-center justify-between rounded-full">
                <img src="/assets/logo/logo.svg" alt="Logo" className="h-8 w-auto" />

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 rounded-lg p-1"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                <nav className={`
          absolute md:relative top-full left-0 right-0 mt-2 md:mt-0
          md:flex items-center gap-8 
          ${isOpen ? 'flex' : 'hidden'} md:flex
          ${isOpen ? 'flex-col' : 'flex-row'}
          md:flex-row
          ${isOpen ? 'bg-black rounded-2xl p-4' : ''}
          md:bg-transparent md:p-0
        `}>
                    {['About', 'Features', 'Contact'].map((link) => (
                        <a
                            key={link}
                            href={`/${link.toLowerCase()}`}
                            className="text-sm font-inter hover:text-gray-300 md:text-base transition-colors font-medium duration-300 py-2 md:py-0"
                        >
                            {link}
                        </a>
                    ))}
                    <button
                        // onClick={() => setIsModalOpen(true)}
                        className="bg-[#8B3EF8] hover:bg-[#8B3EF8]/90 text-white py-2 px-6 rounded-full transition-colors duration-300 text-sm font-medium whitespace-nowrap md:text-base md:w-[202px] md:h-[48px]"
                    >
                        <a
                        href='#signup'>

                        Pre-Launch Sign Up
                        </a>
                    </button>
                </nav>
            </header>
            {/* Assuming SignUpModal component exists */}
            {/* {isModalOpen && <SignUpModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />} */}
        </>
    )
}
