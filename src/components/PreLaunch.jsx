import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
export default function PreLaunch() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section id="signup"  className="flex flex-col items-center justify-center p-4">
                <div className=" lg:w-[95%] w-full max-w-auto ">
                    <div style={{ backgroundPosition: "-816px -978px" }} className="bg-[#200F36] bg-background-image bg-cover text-white rounded-3xl overflow-hidden shadow-lg">
                        <div className="p-8 md:p-12 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-semibold font-clash text-center">
                                Pre-launch <span className="text-[#A261FF]">Sign Up</span>
                            </h2>
                            <p className="text-center  mx-auto text-sm md:text-lg font-inter font-normal">
                                We are looking for businesses to join our Pre-Launch Beta. You will be able to publish your venue's content to the early stage users in your area, make use of the application and provide our team with feedback from your experiences that we will take onboard before the final launch date.
                            </p>
                            <p className="text-center  mx-auto text-sm md:text-lg font-inter font-normal">
                                In return, we'll give you <span className="font-bold text-[#A261FF]">6 months of using Venu for FREE</span> from the go live date and 50 premium listing vouchers to promote your business further when the app is live.
                            </p>
                            <div className="flex justify-center items-end space-x-4">
                                <button onClick={() => setIsModalOpen(true)} className="bg-[#8B3EF8] hover:bg-purple-600 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold font-inter transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
                                    Pre-Launch Sign Up
                                </button>
                                <img
                                    src="/assets/img/arrow-icon.svg"
                                    width={63}
                                    height={24}
                                    alt="Arrow"
                                    className="w-[63.01px] h-[24px]"
                                />
                            </div>
                        </div>
                    </div>
                    <section id='contact' className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {['Ben', 'Oscar'].map((name) => (
                            <div key={name} className="bg-[#200F36] text-white rounded-2xl overflow-hidden shadow-md">
                                <div className="p-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="/assets/img/profile.svg"
                                            width={48}
                                            height={48}
                                            alt={`${name}'s profile`}
                                            className="rounded-full"
                                        />
                                        <div className="text-left">
                                            <h3 className="font-semibold md:text-3xl font-clash">{name}</h3>
                                            <p className="text-sm md:text-lg font-normal font-inter">Co-Founder</p>
                                        </div>
                                    </div>
                                    <a
                                        href={`mailto:${name.toLowerCase()}@wearevenue.com`}
                                        className="bg-[#4B3666] hover:bg-purple-700 text-white text-xs md:text-base font-inter font-semibold px-3 py-1 rounded-full transition duration-300 ease-in-out"
                                    >
                                        {name.toLowerCase()}@wearevenue.com
                                    </a>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </section>
            {isModalOpen && <SignUpModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
        </>
    )
}