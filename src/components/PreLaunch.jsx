
export default function PreLaunch() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-7xl">
                <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white rounded-3xl overflow-hidden shadow-lg">
                    <div className="p-8 md:p-12 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center">
                            Pre-launch <span className="text-[#A261FF]">Sign Up</span>
                        </h2>
                        <p className="text-center max-w-3xl mx-auto text-sm md:text-base">
                            We are looking for businesses to join our Pre-Launch Beta. You will be able to publish your venue's content to the early stage users in your area, make use of the application and provide our team with feedback from your experiences that we will take onboard before the final launch date.
                        </p>
                        <p className="text-center max-w-3xl mx-auto text-sm md:text-base">
                            In return, we'll give you <span className="font-semibold text-[#A261FF]">6 months of using Venu for FREE</span> from the go live date and 50 premium listing vouchers to promote your business further when the app is live.
                        </p>
                        <div className="flex justify-center items-center space-x-4">
                            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
                                Pre-Launch Sign Up
                            </button>
                            <img
                                src="/assets/img/arrow-icon.svg"
                                width={24}
                                height={24}
                                alt="Arrow"
                                className="transform rotate-45"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {['Ben', 'Oscar'].map((name) => (
                        <div key={name} className="bg-purple-900 text-white rounded-2xl overflow-hidden shadow-md">
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="/assets/img/profile.svg"
                                        width={48}
                                        height={48}
                                        alt={`${name}'s profile`}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{name}</h3>
                                        <p className="text-sm text-purple-300">Co-Founder</p>
                                    </div>
                                </div>
                                <button className="bg-purple-800 hover:bg-purple-700 text-white text-xs px-3 py-1 rounded-full transition duration-300 ease-in-out">
                                    {name.toLowerCase()}@wearevenue.com
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}