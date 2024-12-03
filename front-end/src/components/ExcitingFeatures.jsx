import React, { useState } from "react";

const user = [
    {
        title: "Personalized venue/activity recommendations based your interests and your attendance/ activity history",
        image: "/assets/img/e-feature-1.png",
        category: "end-user"
    },
    {
        title: "View stories and media content of the venues in your area",
        image: "/assets/img/e-feature-2.png",
        category: "end-user"
    },
    {
        title: "Curated listings with notifications so you'll never miss what's happening in your area",
        image: "/assets/img/e-feature-3.png",
        category: "end-user"
    },
    {
        title: "View events that your friends are interested in",
        image: "/assets/img/e-feature-4.png",
        category: "end-user"
    },
    {
        title: "Seamless booking and reservations",
        image: "/assets/img/e-feature-5.png",
        category: "end-user"
    },
    {
        title: "Detailed venue profiles with comprehensive information about events",
        image: "/assets/img/e-feature-6.png",
        category: "end-user"
    },
    {
        title: "Invite friends to events directly through the app",
        image: "/assets/img/e-feature-7.png",
        category: "end-user"
    },
    {
        title: "Create friendship groups to organize event attendance",
        image: "/assets/img/e-feature-8.png",
        category: "end-user"
    },
    {
        title: "Notify friends you're going somewhere",
        image: "/assets/img/e-feature-9.png",
        category: "end-user"
    },
    {
        title: "Discover friends in your area with similar interests",
        image: "/assets/img/e-feature-10.png",
        category: "end-user"
    },
    {
        title: "Create a story to share with the venue to be approved and feature on their story",
        image: "/assets/img/e-feature-11.png",
        category: "end-user"
    },
    {
        title: "Chat with Friends",
        image: "/assets/img/e-feature-12.png",
        category: "end-user"
    },
    {
        title: "Transfer tickets and bookings to friends",
        image: "/assets/img/e-feature-13.png",
        category: "end-user"
    },
];
const business = [
    {
        title: "View customer metrics on demographic data for venue attendance to make targeted marketing decisions to connect with your community",
        image: "/assets/img/e-feature-business-1.png",
        category: "business"
    },
    {
        title: "View stories posted by your venue, create new stories and approve stories posted by customers, that are visible to everyone in your city",
        image: "/assets/img/e-feature-business-2.png",
        category: "business"
    },
    {
        title: "Manage events you’ve created, view attendees, access media and access bookings",
        image: "/assets/img/e-feature-business-3.png",
        category: "business"
    },
    {
        title: "View demographic metrics on specific events to make data driven business decisions",
        image: "/assets/img/e-feature-business-4.png",
        category: "business"
    },
    {
        title: "Seamlessly create new events and manage your media",
        image: "/assets/img/e-feature-business-5.png",
        category: "business"
    },
    {
        title: "View individual events to manage bookings, view stats and edit details",
        image: "/assets/img/e-feature-business-6.png",
        category: "business"
    },
    {
        title: "Manage your company profile, adjust settings and setup online payments",
        image: "/assets/img/e-feature-business-7.png",
        category: "business"
    },
    {
        title: "Choose your interface: If you are a group managing multiple venues or an independent venue",
        image: "/assets/img/e-feature-business-8.png",
        category: "business"
    },
    {
        title: "Seamlessly manage and switch between each business in one interface",
        image: "/assets/img/e-feature-business-9.png",
        category: "business"
    },
    {
        title: "Categorize your venue to make you visible to communities with exact interests",
        image: "/assets/img/e-feature-business-10.png",
        category: "business"
    },
    {
        title: "Send push notifications regarding promotions or event reminders to previous or potential customers",
        image: "/assets/img/e-feature-business-11.png",
        category: "business"
    },
    {
        title: "Manage upcoming bookings",
        image: "/assets/img/e-feature-business-12.png",
        category: "business"
    },
    {
        title: "Select whether its ticketed or free event",
        image: "/assets/img/e-feature-business-13.png",
        category: "business"
    },
];
// Component to display images for end-users
const EndUserFeatures = ({ features, imageLoaded, handleImageLoad }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {features.length > 0 ? (
                features.map((feature, index) => {
                    const isLastRow = index >= features.length - (features.length % 3 || 3);
                    const lastRowItems = features.length % 3;

                    return (
                        <div
                            key={feature.title}
                            className={`max-w-[379px] mx-auto ${isLastRow && lastRowItems === 1 ? "lg:col-span-full" : ""}`}
                        >
                            <div className="aspect-w-1 aspect-h-1 flex justify-center mb-4 rounded-lg relative">
                                {/* Skeleton loader */}
                                {!imageLoaded[feature.image] && (
                                    <div className="skeleton-loader absolute inset-0 bg-gray-200 rounded-lg animate-pulse"></div>
                                )}
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className={`rounded-lg w-full transition-opacity duration-500 ${imageLoaded[feature.image] ? "opacity-100" : "opacity-0"}`}
                                    loading="lazy"
                                    width="100%"
                                    height="auto"
                                    onLoad={() => handleImageLoad(feature.image)}
                                    style={{
                                        filter: !imageLoaded[feature.image] ? 'blur(10px)' : 'none',
                                        transition: 'filter 0.3s ease-out, opacity 0.5s ease-out'
                                    }}
                                />
                            </div>
                            {imageLoaded[feature.image] && (
                                <p className="text-2xl text-left font-clash font-medium text-black">{feature.title}</p>
                            )}
                        </div>
                    );
                })
            ) : (
                <p>No features available for end-users.</p>
            )}
        </div>
    );
};

// Component to display images for businesses
const BusinessFeatures = ({ features, imageLoaded, handleImageLoad }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {features.length > 0 ? (
                features.map((feature, index) => {
                    const isLastRow = index >= features.length - (features.length % 3 || 3);
                    const lastRowItems = features.length % 3;

                    return (
                        <div
                            key={feature.title}
                            className={`max-w-[379px] mx-auto ${isLastRow && lastRowItems === 1 ? "lg:col-span-full" : ""}`}
                        >
                            <div className="aspect-w-1 aspect-h-1 flex justify-center mb-4 rounded-lg relative">
                                {/* Skeleton loader */}
                                {!imageLoaded[feature.image] && (
                                    <div className="skeleton-loader absolute inset-0 bg-gray-200 rounded-lg animate-pulse"></div>
                                )}
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className={`rounded-lg w-full transition-opacity duration-500 ${imageLoaded[feature.image] ? "opacity-100" : "opacity-0"}`}
                                    loading="lazy"
                                    width="100%"
                                    height="auto"
                                    onLoad={() => handleImageLoad(feature.image)}
                                    style={{
                                        filter: !imageLoaded[feature.image] ? 'blur(10px)' : 'none',
                                        transition: 'filter 0.3s ease-out, opacity 0.5s ease-out'
                                    }}
                                />
                            </div>
                            {imageLoaded[feature.image] && (
                                <p className="text-2xl text-left font-clash font-medium text-black">{feature.title}</p>
                            )}
                        </div>
                    );
                })
            ) : (
                <p>No features available for businesses.</p>
            )}
        </div>
    );
};

// Component for selecting category buttons
const CategoryButtons = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="flex justify-center mb-12">
            <div className="bg-[#EFE7FB] p-0.5 rounded-full inline-flex space-x-0.5 font-inter font-semibold text-sm md:text-xl">
                <button
                    className={`px-3 py-[5px] md:px-6 md:py-[10px] rounded-full ${selectedCategory === "end-user" ? "bg-black text-white" : "text-black"}`}
                    onClick={() => setSelectedCategory("end-user")}
                >
                    What End-Users Can Use
                </button>
                <button
                    className={`px-3 py-[5px] md:px-6 md:py-[10px] rounded-full ${selectedCategory === "business" ? "bg-black text-white" : "text-black"}`}
                    onClick={() => setSelectedCategory("business")}
                >
                    What Businesses Can Use
                </button>
            </div>
        </div>
    );
};

// Main component to render features based on category toggle
const ExcitingFeatures = () => {
    const [selectedCategory, setSelectedCategory] = useState("end-user");
    const [imageLoaded, setImageLoaded] = useState({});

    // Handle image load event
    const handleImageLoad = (imageSrc) => {
        setImageLoaded(prevState => ({
            ...prevState,
            [imageSrc]: true
        }));
    };

    return (
        <section id="features" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-auto mx-auto lg:w-[95%]">
                <h2 className="text-5xl font-semibold font-clash text-center mb-8">
                    Exciting <span className="text-[#8B3EF8]">Features</span>
                </h2>

                {/* Category selection buttons */}
                <CategoryButtons selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                {/* Render selected category features */}
                {selectedCategory === "end-user" && (
                    <EndUserFeatures features={user} imageLoaded={imageLoaded} handleImageLoad={handleImageLoad} />
                )}

                {selectedCategory === "business" && (
                    <BusinessFeatures features={business} imageLoaded={imageLoaded} handleImageLoad={handleImageLoad} />
                )}
            </div>
        </section>
    );
};

export default React.memo(ExcitingFeatures);
