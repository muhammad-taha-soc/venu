
const features = [
    {
        title: "Personalized venue/activity recommendations based your interests and your attendance/ activity history",
        image: "/assets/img/features-img-1.svg",
        category: "end-user"
    },
    {
        title: "View stories and media content of the venues in your area",
        image: "/assets/img/features-img-4.svg",
        category: "end-user"
    },
    {
        title: "Curated listings with notifications so you'll never miss what's happening in your area",
        image: "/assets/img/features-img-4.svg",
        category: "end-user"
    },
    {
        title: "View events that your friends are interested in",
        image: "/assets/img/features-img-view-events.svg",
        category: "end-user"
    },
    {
        title: "Seamless booking and reservations",
        image: "/assets/img/features-img-booking.svg",
        category: "business"
    },
    {
        title: "Detailed venue profiles with comprehensive information about events",
        image: "/assets/img/features-img-4.svg",
        category: "business"
    },
    {
        title: "Invite friends to events directly through the app",
        image: "/assets/img/features-img-invite.svg",
        category: "end-user"
    },
    {
        title: "Create friendship groups to organize event attendance",
        image: "/assets/img/features-img-friendship.svg",
        category: "end-user"
    },
    {
        title: "Notify friends you're going somewhere",
        image: "/assets/img/features-img-notify.svg",
        category: "end-user"
    },
    {
        title: "Discover friends in your area with similar interests",
        image: "/assets/img/features-img-discover.svg",
        category: "end-user"
    },
    {
        title: "Create a story to share with the venue to be approved and feature on their story",
        image: "/assets/img/features-img-4.svg",
        category: "end-user"
    },
    {
        title: "Chat with Friends",
        image: "/assets/img/features-img-chat.svg",
        category: "end-user"
    },
    {
        title: "Transfer tickets and bookings to friends",
        image: "/assets/img/features-img-ticket.svg",
        category: "end-user"
    }
]

export default function ExcitingFeatures() {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto lg:w-[80%]">
                <h2 className="text-3xl font-bold text-center mb-8">Exciting <span className="text-purple-600">Features</span></h2>
                <div className="flex justify-center mb-12">
                    <div className="bg-purple-50 p-0.5 rounded-full inline-flex space-x-0.5">
                        <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">What End-Users Can Use</button>
                        <button className="bg-white text-purple-900 px-4 py-1.5 rounded-full text-sm font-medium">What businesses can use</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="">
                            <div className="aspect-w-1 aspect-h-1 flex flex-row items-end justify-center mb-4 bg-purple-50 p-6 rounded-lg">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    width={200}
                                    height={200}
                                    className={`object-cover rounded-lg relative ${index % 2 == 0 ? 'bottom-5':'top-5' }`}
                                />
                            </div>
                            <p className="text-sm text-gray-600">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}