import { useState } from 'react'
// import { ChevronDown, ChevronUp } from 'lucide-react'

export default function VenuSection() {
    const [listExpanded, setListExpanded] = useState(false)
    const [strategyExpanded, setStrategyExpanded] = useState(false)

    return (
        <div className="flex flex-col lg:flex-row justify-between items-start p-4 lg:w-[80%] w-full  max-w-7xl mx-auto mt-6">
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
                    <div
                        className="flex justify-between items-center cursor-pointer border py-3 px-4 rounded-lg border-[#E3D7F3]"
                        onClick={() => setListExpanded(!listExpanded)}
                    >
                        <span className="font-medium">List of opportunities</span>
                        {listExpanded ? "+" : "+"}
                    </div>
                    <div
                        className="flex justify-between items-center cursor-pointer border-solid border py-3 px-4 rounded-lg border-[#E3D7F3]"
                        onClick={() => setStrategyExpanded(!strategyExpanded)}
                    >
                        <span className="font-medium ">Working strategy of venu</span>
                        {strategyExpanded ? "+" : "+"}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 ">
                <div className=" rounded-3xl p-8 relative">
                    <img
                        src="/assets/img/venu-section.svg"
                        alt="Venu app interface"
                        className="w-3/4 mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}