import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
    return (
        <>
            <div className="max-w[1245px] mx-auto py-16 px-4 flex items-center justify-center text-white">
                <div>
                    <h1 className="w-full font-title text-3xl text-center">^Jose Tejada</h1>
                    <div className="flex justify-between sm:justify-start md:w-[75%] my-6">
                        <a href="https://github.com/khoime" target="_blank">
                            <FontAwesomeIcon className='mx-auto sm:m-9 pb-8' icon={faSquareGithub} size="2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/jose-miguel-tejada-5a3540309/" target="_blank">
                            <FontAwesomeIcon className='mx-auto sm:m-9 pb-8' icon={faLinkedin} size='2xl' />
                        </a>
                        <a href="mailto:j.m.tejada@hotmail.com" target="_blank">
                            <FontAwesomeIcon className='mx-auto sm:m-9 pb-8' icon={faEnvelope} size='2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
