import { useState } from 'react';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false); // Track if images have loaded
    const [email, setEmail] = useState(''); // Store email input
    const [loading, setLoading] = useState(false); // Track loading state for the button
    const [errorMessage, setErrorMessage] = useState(''); // Error message
    const [showThankYou, setShowThankYou] = useState(false); // State for showing thank you modal

    const handleImageLoad = () => {
        setImageLoaded(true); // Set imageLoaded to true once images are loaded
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Update email input on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading when form is submitted
        setErrorMessage(''); // Clear previous errors
        setShowThankYou(false); // Hide thank you modal when starting submission

        // Validate email input
        if (!email) {
            setErrorMessage('Please enter an email address.');
            setLoading(false);
            return; // Don't proceed with submission if email is empty
        }

        // Validate email format using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            setLoading(false);
            return; // Don't proceed if email format is invalid
        }

        // Send the email to your backend API
        try {
            const response = await fetch('https://venu-app.com:3000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setShowThankYou(true); // Show thank you modal if the response is OK
            } else {
                throw new Error('Failed to submit. Please try again.'); // Throw error if submission fails
            }
        } catch (error) {
            setErrorMessage(error.message); // Set error message if the API call fails
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };

    return (
        <div style={{ backgroundPosition: "-1101px -573px" }} className="bg-background-image bg-cover text-white bg-[#200F36] md:rounded-[64px]">
            <div className="flex flex-col md:flex-row justify-between md:text-left items-center md:items-end lg:w-[94%] w-full max-w-auto mx-auto">
                <div className="flex flex-col justify-center md:items-start text-center md:text-left h-[500px] lg:h-[650px] md:w-[85%] p-6 mt-16 lg:mt-0 sm:p-0">
                    <h1 className="lg:text-6xl text-4xl mt-5 font-clash md:px-6 font-semibold">
                        <span className="" >The Social, <span className="">
                            <div className="inline-flex -space-x-2 mb-4">
                                {['round-img-1.png', 'round-img-2.png', 'round-img-3.png', 'round-img-4.jpg'].map((img, i) => (
                                    <div
                                        key={i}
                                        className="w-5 h-5 lg:w-10 lg:h-10 rounded-full border-2 border-[#200F36] overflow-hidden"
                                    >
                                        <img
                                            src={`/assets/img/${img}`}
                                            alt={`User ${i + 1}`}
                                            className="md:w-full md:h-full object-cover"
                                            onLoad={handleImageLoad} // Trigger image load handler
                                        />
                                    </div>
                                ))}
                            </div>
                        </span> <br />Social <span className="relative p-1"><img src='/assets/img/vector-hero-img.png' className="bg-cover inline absolute w-[300px] h-[34px] lg:w-[693px] lg:h-[56px]" /> Network</span></span>
                    </h1>
                    <p className="lg:text-lg md:px-6 my-6 font-inter font-normal md:w-[85%]">
                        Connect your business to a thriving community that helps users discover real-time venue and event info tailored to their interests and social circles, making it easy to explore, organize, and attend together.</p>
                    <p className="lg:text-lg md:px-6 my-4 font-general font-semibold">
                        Show Your Interest In The Pre-Launch Beta</p>
                    <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 px-6">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange} // Update email input on change
                            placeholder="Enter your email"
                            className="w-full lg:w-[290px] flex-grow rounded-full border placeholder:text-base border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                        <button
                            onClick={handleSubmit} // Handle form submission
                            className="w-full md:w-[109px] mt-5 sm:mt-0 rounded-full bg-[#8B3EF8] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-t-4 border-white border-solid rounded-full animate-spin mx-auto"></div> // Loader inside the button
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <p className="text-red-500 mt-4 px-6 text-center">{errorMessage}</p> // Display error message
                    )}
                </div>
                <div className="aspect-w-1 aspect-h-1 flex items-center justify-center sm:mt-0 mt-10">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img
                            src='/assets/img/hero-section-group.png'
                            alt='hero'
                            className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"} w-2/3 lg:w-[95%] lg:h-[95%]  h-full`}
                            onLoad={handleImageLoad} // Trigger image load handler
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Thank You Modal */}
            {showThankYou && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 font-inter">
                    <div className="bg-white rounded-[48px] p-16 max-w-[794px]  w-full text-center relative">
                        <button
                            onClick={() => setShowThankYou(false)}
                            className="absolute right-6 top-4 text-black w-5 h-5 hover:text-gray-600"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="mb-6">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-9 h-9 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl text-black md:text-[40px] font-medium mb-2 font-inter">
                                Thank you for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3EF8] via-[#CA35A5] to-[#CA35A5]">joining</span> our waitlist!
                            </h2>
                        </div>

                        <div className="flex justify-center -space-x-2 mb-4">
                            {['round-img-1.png', 'round-img-2.png', 'round-img-3.png', 'round-img-4.jpg'].map((img, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                                >
                                    <img
                                        src={`/assets/img/${img}`}
                                        alt={`User`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <p className="text-black font-inter md:text-xl">
                            <span className="text-[#8B3EF8] font-bold">10529</span> people have joined us already
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
