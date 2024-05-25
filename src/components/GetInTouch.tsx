import { useRef } from 'react';
import emailjs from '@emailjs/browser'

function GetInTouch() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return; // Safety check

        emailjs
            .sendForm('service_iy4dq4d', 'template_portfolio', form.current, {
                publicKey: 'H45qJX0G04Zhy3DAQ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error: { text: string }) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className="max-w[1245px]  mt-8 mx-auto py-16 px-4 flex items-center justify-center text-white font-content-sm">
                <form id='getInTouch' ref={form} onSubmit={sendEmail}>
                    <div className="getTouched mx-auto w-96">
                        <div className="mb-5">
                            <p className="block mb-5 font-title dark:text-white">Name</p>
                            <input type="text" name="user_name"
                                className=" font-content-sm ease-in-out duration-500 bg-[#222222] border border-gray-300 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-white"
                            />
                        </div>
                        <div className="mb-5">
                            <p className="block mb-5 font-title dark:text-white">Email</p>
                            <input type="email" name="user_email"
                                className=" font-content-sm ease-in-out duration-500 bg-[#222222] border border-gray-300 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-white"
                            />
                        </div>
                        <div className="mb-5">
                            <p className="block mb-5 font-title dark:text-white">Message</p>
                            <textarea name="message"
                                className=" mx-auto font-content-sm ease-in-out duration-500 bg-[#222222] border border-gray-300 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-white"
                            />
                        </div>
                    </div>
                    <div>
                        <div className=" flex justify-center" >
                            <input type="submit" value="Send"
                                className="text-xl ease-in-out duration-500 z-[-1] border-white border-2 w-[250px] my-6 font-title rounded-md font-medium mx-auto hover:border-gray-600"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default GetInTouch;
