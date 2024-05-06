import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";

function NavBar() {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <nav className="flex justify-between items-center h-24 max-w-[1248px] mx-auto px-4 text-white nav z-10" >
                <h1 className="text-1xl navName text-center font-title">
                    <ReactTyped strings={['^Jose Tejada.']}
                        typeSpeed={80}
                        backSpeed={80}
                        loop
                    />
                </h1>
                <ul className="flex space-x-4 mx-10 navItems max-md:hidden">
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <a href="#whoami">Who am I?</a>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4 ">
                        <a href="#getInTouch">Get in touch</a>
                    </li>
                </ul>

                <div className=" block md:hidden p-10 " onClick={handleNav}>
                    {!nav ?
                        <div className='h-[1248px] w-96 closedNavIcon'>
                            <FontAwesomeIcon className='menuIcon absolute right-6 top-9' icon={faXmark}></FontAwesomeIcon>
                        </div>
                        :
                        <FontAwesomeIcon className='absolute right-6 top-9' icon={faBars}></FontAwesomeIcon>
                    }
                </div>
                <div className={!nav ? 'fixed md:hidden left-0 top-0 w-[60%] bg-black h-full ease-in-out duration-500' : 'fixed left-[-100%] top-0 h-full bg-black w-[60%] ease-in-out duration-500 '}>
                    <h1 className={!nav ? "text-1xl  navName text-center mt-6 ml-6 font-title" : "text-1xl notNavName  text-center mt-6 ml-6 font-title"}>
                        <ReactTyped strings={['^Jose Tejada.']}
                            typeSpeed={80}
                            backSpeed={80}
                            loop
                        />
                    </h1>
                    <ul onClick={handleNav} className="space-x-4 mx-10 navItems md:hidden font-content">
                        <li className="p-4 hover:underline hover:underline-offset-4">
                            <a href="#whoami">Who am I?</a>
                        </li>
                        <li className="mb-4 hover:underline hover:underline-offset-4">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-4 ">
                            <a href="#getInTouch">Get in touch</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
