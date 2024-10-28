import b1 from "../assets/brand-1.png"
import b2 from "../assets/brand-2.png"
import b3 from "../assets/brand-3.png"
import b4 from "../assets/brand-4.png"
import b5 from "../assets/brand-5.png"
import b6 from "../assets/brand-6.png"

const TrustedBrands = () => {
    const logos = [
        { id: 1, src: b1, alt: "Culture Amp" },
        { id: 2, src: b2, alt: "Basecamp" },
        { id: 3, src: b3, alt: "Medium" },
        { id: 4, src: b4, alt: "Upwork" },
        { id: 5, src: b5, alt: "Himalayas" },
        { id: 6, src: b6, alt: "Basecamp" }
    ];

    return (
        <div className="my-10">
            <p className="text-center text-lg font-bold mb-4">
                These brands <span className="text-[#00BBD2]">trust</span> TK Media Group
            </p>
            <div className="flex flex-wrap justify-evenly items-center mt-5">
                {logos.map(logo => (
                    <div key={logo.id} className="flex justify-center items-center m-2">
                        <img src={logo.src} alt={logo.alt} className="h-6 w-auto md:h-10" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustedBrands;