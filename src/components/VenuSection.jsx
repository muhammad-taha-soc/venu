import { useState } from 'react'
// import { ChevronDown, ChevronUp } from 'lucide-react'

export default function VenuSection() {
    const [listExpanded, setListExpanded] = useState(false)
    const [strategyExpanded, setStrategyExpanded] = useState(false)

    return (
        <div className="flex flex-col lg:flex-row justify-between items-start p-8 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-12 text-left">
                <h1 className="text-4xl font-bold mb-6">
                    What is <span className="text-purple-600">venu</span>?
                </h1>
                <p className="mb-4 text-gray-700">
                    Venu is a revolutionary mobile app that empowers users to discover, connect and immerse themselves in the vibrant catalogue of local events with friends.
                </p>
                <p className="mb-8 text-gray-700">
                    For businesses, the real value lies in Venu's all-in-one platform for marketing, advertising, analytics and social engagement, enabling businesses to reach their local community with precision, driving targeted traffic and expanding their audience by creating a means for seamless discovery based on user interests.
                </p>
                <div className="space-y-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setListExpanded(!listExpanded)}
                    >
                        <span className="font-medium">List of opportunities</span>
                        {listExpanded ? "+" : "+"}
                    </div>
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setStrategyExpanded(!strategyExpanded)}
                    >
                        <span className="font-medium">Working strategy of venu</span>
                        {strategyExpanded ? "+" : "+"}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
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