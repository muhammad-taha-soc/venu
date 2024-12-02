import { useState } from 'react';

export default function VenuSection() {
    const [listExpanded, setListExpanded] = useState(false);
    const [strategyExpanded, setStrategyExpanded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);  // Track if the image has loaded

    const handleImageLoad = () => {
        setImageLoaded(true); // Set imageLoaded to true once image is loaded
    };

    return (
        <section id="about" className="flex flex-col lg:flex-row justify-between items-start p-4 py-32 lg:w-[95%] w-full max-w-auto mx-auto mt-6">
            <div className="lg:w-1/2 pr-0 lg:pr-12 text-left lg:ml-4">
                <h1 className="text-5xl font-semibold font-clash mb-6">
                    What is <span className="text-[#8B3EF8]">venu</span>?
                </h1>
                <p className="mb-4 text-[#200F36] font-inter font-normal text-lg">
                    Venu is a revolutionary mobile app that empowers users to discover, connect and immerse themselves in the vibrant catalogue of local events with friends.
                </p>
                <p className="mb-8 text-[#200F36] font-inter font-normal text-lg">
                    For businesses, the real value lies in Venu's all-in-one platform for marketing, advertising, analytics and social engagement, enabling businesses to reach their local community with precision, driving targeted traffic and expanding their audience by creating a means for seamless discovery based on user interests.
                </p>
                <div className="space-y-4 text-[#200F36] font-inter font-semibold text-lg">
                    <div className="border rounded-lg border-[#E3D7F3] overflow-hidden">
                        <div
                            className="flex justify-between items-center cursor-pointer py-3 px-4"
                            onClick={() => setListExpanded(!listExpanded)}
                        >
                            <span className="font-inter font-semibold text-lg">List of opportunities</span>
                            <span className="text-2xl leading-none">
                                {listExpanded ? '−' : '+'}
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${listExpanded ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="p-4 bg-[#F9F5FF]">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Discover local events and activities</li>
                                    <li>Connect with friends and make plans</li>
                                    <li>Get personalized event recommendations</li>
                                    <li>Track upcoming events and RSVPs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg border-[#E3D7F3] overflow-hidden">
                        <div
                            className="flex justify-between items-center cursor-pointer py-3 px-4"
                            onClick={() => setStrategyExpanded(!strategyExpanded)}
                        >
                            <span className="font-inter font-semibold text-lg">Working strategy of venu</span>
                            <span className="text-2xl leading-none">
                                {strategyExpanded ? '−' : '+'}
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${strategyExpanded ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="p-4 bg-[#F9F5FF]">
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>User-centric event discovery platform</li>
                                    <li>AI-powered recommendation system</li>
                                    <li>Social integration for group planning</li>
                                    <li>Business analytics and marketing tools</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-[515px] mt-8 lg:mt-0 lg:pl-12 flex justify-center items-center w-full">
                {/* Image Container */}
                <div className="rounded-3xl w-full h-full relative">
                    {/* Skeleton Loader */}
                    {!imageLoaded && (
                        <div className="skeleton-loader absolute inset-0 bg-gray-200 rounded-3xl"></div>
                    )}
                    <img
                        src="/assets/img/venu-section.svg"
                        alt="Venu app interface"
                        className={`w-full sm:w-3/4 md:w-2/3 lg:w-[515px] h-auto mx-auto rounded-3xl transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                        loading="lazy"
                        onLoad={handleImageLoad} // Trigger image load handler
                    />
                </div>
            </div>
        </section>
    );
}
