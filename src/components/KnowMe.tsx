import photoMe from '../assets/knowMe.jpeg';
function KnowMe() {
    return (
        <>
            <div className="w-full text-white bg-[#141414] py-16 px-4" >
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className='w-[500px] mx-auto my-4' src={photoMe} alt="/" />
                    <div className='flex flex-col justify-center'>
                        <p className='font-content mx-8 text-[#888888] underline underline-offset-4' >^Joy over stress:</p>
                        <h1 className='font-title mx-8 md:text-4xl sm:text-3xl text-3xl py-2' id="whoami">Life's more than time passing by</h1>
                        <p className='font-content-sm mx-8 md:text-xl text-2xl' >
                            I've written my way to knowledge so that I could experience the joy of being productive and believe in wonderful experiences and
                            how I'll soon become more aware of where I am.
                            <a href="">
                            </a>
                            Life can be tough sometimes, we need to breathe, stay calm and carefully watch
                            and inspect our environment with such a joy that we can think of solutions despite of stress...
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KnowMe;
