import React, { useState } from 'react'

export default function SignUpModal({ isOpen, setIsOpen }) {

    const [showThankYou, setShowThankYou] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowThankYou(true)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 font-inter">
            {!showThankYou ? (
                <div className="bg-purple-50 rounded-[32px] p-2 max-w-[1000px] w-full relative flex flex-col md:flex-row justify-between items-center gap-8">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 md:hidden"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex-1 text-left p-6">
                        <div className="mb-6">
                            <img src="/assets/logo/logo-modal.svg" alt="logo" className="mb-[24px]" />
                            <p className="text-lg md:text-2xl font-medium">Sign up for Pre-Launch Beta 👋</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 text-base font-normal">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-600 placeholder-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-600 placeholder-black"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-600 placeholder-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-600 placeholder-black"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Contact Number (optional)"
                                    className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-600 placeholder-black"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-[#8B3EF8] text-white rounded-full hover:bg-purple-700 transition-colors font-semibold "
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>

                    <div className="flex-1 hidden md:block relative bg-[#8B3EF8]  rounded-[32px] px-3 pt-3">
                        <img
                            src="/assets/img/signup.svg"
                            alt="Venu App Screenshot"
                            className="rounded-xl object-cover w-full h-full"
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-2 top-2 text-white hover:text-gray-200 bg-black/20 rounded-full p-1"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-[48px] p-16 max-w-[794px]  w-full text-center relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-6 top-4 text-black w-5 h-5 hover:text-gray-600"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="mb-6">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-9 h-9 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-[40px] font-medium mb-2 font-inter">
                            Thank you for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3EF8] via-[#CA35A5] to-[#CA35A5]">joining</span> our waitlist!
                        </h2>
                    </div>

                    <div className="flex justify-center -space-x-2 mb-4">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                            >
                                <img
                                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                                    alt={`User ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-black font-inter md:text-xl">
                        <span className="text-[#8B3EF8] font-bold">10529</span> people have joined us already
                    </p>
                </div>
            )}
        </div>
    )
}