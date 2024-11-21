import { useState } from "react";

const features = [
    {
        title: "Personalized venue/activity recommendations based your interests and your attendance/ activity history",
        image: "/assets/img/e-feature-1.svg",
        category: "end-user"
    },
    {
        title: "View stories and media content of the venues in your area",
        image: "/assets/img/e-feature-2.svg",
        category: "end-user"
    },
    {
        title: "Curated listings with notifications so you'll never miss what's happening in your area",
        image: "/assets/img/e-feature-3.svg",
        category: "end-user"
    },
    {
        title: "View events that your friends are interested in",
        image: "/assets/img/e-feature-4.svg",
        category: "end-user"
    },
    {
        title: "Seamless booking and reservations",
        image: "/assets/img/e-feature-5.svg",
        category: "end-user"
    },
    {
        title: "Seamless booking and reservations",
        image: "/assets/img/e-feature-5.svg",
        category: "business"
    },
    {
        title: "Detailed venue profiles with comprehensive information about events",
        image: "/assets/img/e-feature-3.svg",
        category: "business"
    },
    {
        title: "Detailed venue profiles with comprehensive information about events",
        image: "/assets/img/e-feature-3.svg",
        category: "end-user"
    },
    {
        title: "Invite friends to events directly through the app",
        image: "/assets/img/e-feature-6.svg",
        category: "end-user"
    },
    {
        title: "Create friendship groups to organize event attendance",
        image: "/assets/img/e-feature-7.svg",
        category: "end-user"
    },
    {
        title: "Notify friends you're going somewhere",
        image: "/assets/img/e-feature-8.svg",
        category: "end-user"
    },
    {
        title: "Discover friends in your area with similar interests",
        image: "/assets/img/e-feature-9.svg",
        category: "end-user"
    },
    {
        title: "Create a story to share with the venue to be approved and feature on their story",
        image: "/assets/img/e-feature-3.svg",
        category: "end-user"
    },
    {
        title: "Chat with Friends",
        image: "/assets/img/e-feature-10.svg",
        category: "end-user"
    },
    {
        title: "Transfer tickets and bookings to friends",
        image: "/assets/img/e-feature-11.svg",
        category: "end-user"
    }
];

export default function ExcitingFeatures() {
    const [selectedCategory, setSelectedCategory] = useState("end-user");

    // Filter features based on the selected category
    const filteredFeatures = features.filter(
        (feature) => feature.category === selectedCategory
    );

    return (
        <section id='features' className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-auto mx-auto lg:w-[95%]">
                <h2 className="text-5xl font-semibold font-clash text-center mb-8">
                    Exciting <span className="text-[#8B3EF8]">Features</span>
                </h2>
                <div className="flex justify-center mb-12">
                    <div className="bg-[#EFE7FB] p-0.5 rounded-full inline-flex space-x-0.5 font-inter font-semibold text-sm md:text-xl">
                        <button
                            className={`px-3 py-[5px] md:px-6 md:py-[10px] rounded-full ${selectedCategory === "end-user"
                                    ? "bg-black text-white"
                                    : "text-black"
                                }`}
                            onClick={() => setSelectedCategory("end-user")}
                        >
                            What End-Users Can Use
                        </button>
                        <button
                            className={`px-3 py-[5px] md:px-6 md:py-[10px] rounded-full ${selectedCategory === "business"
                                    ? "bg-black text-white"
                                    : "text-black"
                                }`}
                            onClick={() => setSelectedCategory("business")}
                        >
                            What businesses can use
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFeatures.map((feature, index) => {
                        const isLastRow =
                            index >= filteredFeatures.length - (filteredFeatures.length % 3 || 3);
                        const lastRowItems = filteredFeatures.length % 3;

                        return (
                            <div
                                key={index}
                                className={`max-w-[379px] mx-auto ${isLastRow && lastRowItems === 1
                                        ? "lg:col-span-full"
                                        : ""
                                    }`}
                            >
                                <div className="aspect-w-1 aspect-h-1 flex justify-center mb-4 rounded-lg">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="rounded-lg w-full"
                                    />
                                </div>
                                <p className="text-2xl text-left font-clash font-medium text-black">
                                    {feature.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
