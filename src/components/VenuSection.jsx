import { useState } from 'react'

export default function VenuSection() {
    const [listExpanded, setListExpanded] = useState(false)
    const [strategyExpanded, setStrategyExpanded] = useState(false)

    return (
        <section id="about" className="flex flex-col lg:flex-row justify-between items-start p-4 py-32 lg:w-[95%] w-full max-w-auto mx-auto mt-6">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-12 text-left lg:ml-4">
                <h1 className="text-5xl font-semibold font-clash mb-6">
                    What is <span className="text-[#8B3EF8]">venu</span>?
                </h1>
                <p className="mb-4 text-[#200F36] font-inter font-normal text-lg">
                    Venu is a revolutionary mobile app that empowers users to discover, connect and immerse themselves in the vibrant catalogue of local events with friends.
                </p>
                <p className="mb-8 text-[#200F36] font-inter font-normal text-lg">
                    For businesses, the real value lies in Venu's all-in-one platform for marketing, advertising, analytics and social engagement, enabling businesses to reach their local community with precision, driving targeted traffic and expanding their audience by creating a means for seamless discovery based on user interests.
                </p>
                <div className="space-y-4 text-[#200F36] font-inter font-normal text-lg">
                    <div className="border rounded-lg border-[#E3D7F3] overflow-hidden">
                        <div
                            className="flex justify-between items-center cursor-pointer py-3 px-4"
                            onClick={() => setListExpanded(!listExpanded)}
                        >
                            <span className="font-medium">List of opportunities</span>
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
                            <span className="font-medium">Working strategy of venu</span>
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
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
                <div className="rounded-3xl  relative">
                    <img
                        src="/assets/img/venu-section.svg"
                        alt="Venu app interface"
                        className="w-3/4 mx-auto max-w-[515px] max-h-[468px]"
                    />
                </div>
            </div>
        </section>
    )
}