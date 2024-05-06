import { ReactTyped } from "react-typed";
function Hero() {
    return (
        <>
            <div className="text-white heroContainer">
                <div className="max-w[800px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center font-content">
                    <h1 className="z-[-1] mx-20 md:text-7xl sm:text-5xl  justifiy-center text-center text-4xl font-bold md:py-6 p-2">'The path I'm part of may be thy solution'</h1>
                    <div>
                        <p className=" z-[-1] md:text-5xl sm:text-4xl text-xl font-title tracking-widest">
                            <ReactTyped strings={['^Backend Jr. Dev', '^Student', '^Athlete']}
                                typeSpeed={80}
                                backSpeed={80}
                                loop
                            />
                        </p>
                        <button
                            className="z-[-1] border-white border-2 w-[250px] my-6 font-title rounded-md font-medium mx-auto hover:border-gray-600 ease-in-out duration-500">
                            <a href="#whoami" className="ease-in-out duration-500">Get to know me</a>
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Hero;
