import { useState } from 'react';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);  // Track if images have loaded

    const handleImageLoad = () => {
        setImageLoaded(true); // Set imageLoaded to true once images are loaded
    };

    return (
        <div style={{ backgroundPosition: "-1101px -573px" }} className="bg-background-image bg-cover text-white bg-[#200F36] md:rounded-[64px]">
            <div className="flex flex-col md:flex-row justify-between md:text-left items-center md:items-end lg:w-[94%] w-full max-w-auto mx-auto">
                <div className="flex flex-col justify-center md:items-start text-center md:text-left h-[500px] lg:h-[650px] md:w-[85%] p-6 mt-16 lg:mt-0 sm:p-0">
                    <h1 className="lg:text-6xl text-4xl mt-5 font-clash md:px-6 font-semibold">
                        <span className="" >The Social, <span className="">
                            <div className="inline-flex -space-x-2 mb-4">
                                {['round-img-1.png', 'round-img-2.png', 'round-img-3.png', 'round-img-4.jpg'].map((img, i) => (
                                    <div
                                        key={i}
                                        className="w-5 h-5 lg:w-10 lg:h-10 rounded-full border-2 border-[#200F36] overflow-hidden"
                                    >
                                        <img
                                            src={`/assets/img/${img}`}
                                            alt={`User ${i + 1}`}
                                            className="md:w-full md:h-full object-cover"
                                            onLoad={handleImageLoad} // Trigger image load handler
                                        />
                                    </div>
                                ))}
                            </div>
                        </span> <br />Social <span className="relative p-1"><img src='/assets/img/vector-hero-img.png' className="bg-cover inline absolute w-[300px] h-[34px] lg:w-[693px] lg:h-[56px]" /> Network</span></span>
                    </h1>
                    <p className="lg:text-lg md:px-6 my-6 font-inter font-normal md:w-[85%]">
                        Connect your business to a thriving community that helps users discover real-time venue and event info tailored to their interests and social circles, making it easy to explore, organize, and attend together.</p>
                    <p className="lg:text-lg md:px-6 my-4 font-general font-semibold">
                        Show Your Interest In The Pre-Launch Beta</p>
                    <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 px-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full lg:w-[290px] flex-grow rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                        <button className="w-full md:w-[109px] mt-5 sm:mt-0 rounded-full bg-[#8B3EF8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="aspect-w-1 aspect-h-1 flex items-center justify-center sm:mt-0 mt-10">
                    <div className="relative w-full h-full flex justify-center items-center">
                        {/* Hero Image with fade-in effect */}
                        <img
                            src='/assets/img/hero-section-group.png'
                            alt='hero'
                            className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"} w-2/3 lg:w-[95%] lg:h-[95%]  h-full`}
                            onLoad={handleImageLoad} // Trigger image load handler
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
