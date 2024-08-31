import tumascoImg from '../assets/tumascoImg.png'
import toscanaImg from '../assets/hoteltoscana_screenshot.png'
function Projects() {
    return (
        <>
            <div className="w-full text-white bg-[#222222] py-16 px-4" id="projects" >
                <div className="max-w-[1240px] mx-auto flex">
                    <div className="project-card max-w-xl bg-white shadow dark:bg-[#141414] dark:border-gray-700 mx-auto ease-in-out duration-500 hover:scale-110">
                        <a href="https://tumasco.com/index.php" target='_blank'>
                            <img className="" src={tumascoImg} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="https://tumasco.com/index.php">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-title">Tumasco: shopping</h5>
                            </a>
                            <p className="mb-3 font-content-sm text-gray-700 dark:text-gray-400">An automated shopping website</p>
                            <a href="https://tumasco.com/index.php" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none">
                                Go to Site
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="project-card max-w-xl bg-white shadow dark:bg-[#141414] dark:border-gray-700 mx-auto ease-in-out duration-500 hover:scale-110">
                        <a href="https://hoteltoscanaoriente.site" target='_blank'>
                            <img className="" src={toscanaImg} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="https://hoteltoscanaoriente.site">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-title">Hotel Toscana: booking website </h5>
                            </a>
                            <p className="mb-3 font-content-sm text-gray-700 dark:text-gray-400">An website for booking management </p>
                            <a href="https://hoteltoscanaoriente.site" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none">
                                Go to Site
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
