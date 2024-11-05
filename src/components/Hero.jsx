// src/components/HeroSection.js
import hero from "../assets/hero-img.png"

const Hero = () => {
    return (
        <div className="text-white bg-[#200F36] bg-background-image bg-contain  md:rounded-[64px]">
            <div className="flex flex-col md:flex-row justify-between md:text-left items-center md:items-end lg:w-[94%] w-full  max-w-auto mx-auto">
                <div className=" flex flex-col justify-center  md:items-start text-center md:text-left h-[500px] lg:h-[650px] md:w-[85%] p-6 mt-16 lg:mt-0 sm:p-0">
                    <h1 className="lg:text-6xl text-3xl mt-5 font-clash  md:px-6 font-semibold">
                        <span className="" >Show Your <span className="">
                            <div className="inline-flex -space-x-2 mb-4">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-5 h-5 lg:w-10 lg:h-10 rounded-full border-2 border-white overflow-hidden"
                                    >
                                        <img
                                            src={`https://i.pravatar.cc/40?img=${i + 1}`}
                                            alt={`User ${i + 1}`}
                                            className="md:w-full md:h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </span> City <br />Who You Are!</span>
                    </h1>
                    <p className="lg:text-lg md:px-6 my-6 font-inter md:w-[85%]">
                        Connect your business to a thriving community that helps users discover real-time venue and event info tailored to their interests and social circles, making it easy to explore, organize, and attend together.</p>
                    <p className="lg:text-lg md:px-6 my-4 font-general">
                        Show Your Interest In The Pre-Launch Beta</p>
                    <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 px-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full flex-grow rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                        <button className="w-full md:w-[50%] mt-5 sm:mt-0 rounded-full bg-[#8B3EF8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Sign Up
                        </button>
                    </div>
                </div>
                {/* <img src='/assets/img/hero-group-crop.png' alt="hero" className="sm:mt-0 mt-10 aspect-w-1 aspect-h-1" /> */}
                <div className="aspect-w-1 aspect-h-1 flex items-center justify-center md:block sm:mt-0 mt-10">
                    <img
                        src='/assets/img/hero-group-crop.png'
                        alt='hero'
                        // width={200}
                        // height={200}
                        className={`object-cover  w-2/3 h-2/3 lg:w-[95%] lg:h-[95%]`}
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;