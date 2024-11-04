// src/components/HeroSection.js
import hero from "../assets/hero-img.png"

const Hero = () => {
    return (
        <div className="text-white bg-[#200F36] rounded-[64px]">
            <div className="flex flex-col md:flex-row justify-between md:text-left items-center md:items-end lg:w-[80%] w-full  max-w-7xl mx-auto mt-6">
            <div className=" flex flex-col justify-center items-center md:items-start text-center md:text-left h-[500px] lg:h-[650px] md:w-[65%] ">
                {/* <div className="flex md:ml-6 items-center bg-blue-100 border-2 md:mt-3 border-[#00BBD2] rounded py-2 px-4 space-x-2">
                    <div className="flex -space-x-1 overflow-hidden">
                        <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/influencer1.jpg" alt="Influencer 1" />
                        <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/influencer2.jpg" alt="Influencer 2" />
                        <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/influencer3.jpg" alt="Influencer 3" />
                    </div>
                    <span className="font-bold md:text-sm text-xs text-black">TRUSTED BY <span className="text-[#00BBD2]">830+</span> INFLUENCERS</span>
                </div> */}
                <h1 className="lg:text-5xl text-3xl mt-5  md:px-6">

                    <span className="font-bold" >Show Your <span className="">
                        {/* <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/influencer1.jpg" alt="Influencer 1" />
                        <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/influencer2.jpg" alt="Influencer 2" />
                        <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/influencer3.jpg" alt="Influencer 3" /> */}
                        <div className="inline-flex -space-x-2 mb-4">
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
                    </span> City <br />Who You Are!</span>
                </h1>
                <p className="lg:text-xl md:px-6 my-6">
                    Connect your business to a thriving community that helps users discover real-time venue and event info tailored to their interests and social circles, making it easy to explore, organize, and attend together.</p>
                <p className="lg:text-xl md:px-6 my-4">
                    Show Your Interest In The Pre-Launch Beta</p>
                {/* <div className="flex md:ml-6 flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    <button className="bg-black text-white border border-white rounded-full py-2 px-6 text-sm uppercase hover:bg-white hover:text-black transition-colors">
                        Schedule a call
                    </button>
                    <button className="text-black border border-white rounded-full py-2 px-6 text-sm uppercase hover:bg-white hover:text-black transition-colors">
                        Check reviews
                    </button>
                </div> */}
                    <div className="flex flex-col sm:flex-row items-center space-x-2 px-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                        <button className="mt-5 md:mt-0 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Sign Up
                        </button>
                    </div>
            </div>
            <img src='/assets/img/hero-2.svg' alt="Content Creation" className="" />
            
            {/* <div className="">

            <img src='/assets/img/hero-2.svg' alt="Content Creation" className="absolute bottom-0" />
                <img src='/assets/img/hero.svg' alt="Content Creation" className="absolute bottom-0" />
            </div> */}
            {/* <div className="md:w-1/2 relative">
                <Image
                    src="/assets/img/hero.svg"
                    alt="Venu App Screenshot 1"
                    width={300}
                    height={600}
                    className="absolute top-0 left-0 md:left-1/4 z-10 rounded-xl shadow-lg"
                />
                <Image
                    src="/assets/img/hero.svg"
                    alt="Venu App Screenshot 2"
                    width={300}
                    height={600}
                    className="absolute top-12 left-12 md:left-1/3 rounded-xl shadow-lg"
                />
            </div> */}
            </div></div>
    );
};

export default Hero;