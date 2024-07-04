import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact" className="container mx-auto lg:flex justify-around items-center my-12">
            <div className="bg-main_color bg-opacity-30 p-12">
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#7545d8] to-white bg-clip-text">
                    Let&apos;s work together!</h1>
                <p className="text-xl text-white my-3">Feel free to adjust the wording to better fit your style and purpose!!</p>
                <form className="space-y-6 mt-8">
                    <div className="flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <input type="text" className="grow" placeholder="First Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <input type="text" className="grow" placeholder="Last Name" />
                        </label>
                    </div>
                    <div className="flex gap-4 ">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <input type="email" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <input type="number" className="grow" placeholder="Phone Number" />
                        </label>
                    </div>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                    <button className="btn rounded-2xl text-white font-bold bg-gradient-to-r from-[#7545d8] via-secondary_color to-main_color">Send Message</button>
                </form>

            </div>
            <div className="space-y-6 p-12">
                <div className="flex items-center gap-4">
                    <p className="bg-gradient-to-r from-secondary_color via-[#7545d8] to-main_color rounded-full p-2"><FiPhoneCall className="text-xl" /></p>
                    <div>
                        <h5 className="text-xl text-gray-50 ">Phone</h5>
                        <h3 className="text-white font-bold text-2xl mt-2">+88 013 14264106</h3>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-gradient-to-r from-secondary_color via-[#7545d8] to-main_color rounded-full p-2"><MdOutlineEmail className="text-xl" /></p>
                    <div>
                        <h5 className="text-xl text-gray-50 ">Email</h5>
                        <h3 className="text-white font-bold text-2xl mt-2">contactarifanadia@gmail.com</h3>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-gradient-to-r from-secondary_color via-[#7545d8] to-main_color rounded-full p-2"><MdOutlineLocationOn className="text-xl" /></p>
                    <div>
                        <h5 className="text-xl text-gray-50 ">Address</h5>
                        <h3 className="text-white font-bold text-2xl mt-2">Hetimgonj,Sylhet,Bangladesh</h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;