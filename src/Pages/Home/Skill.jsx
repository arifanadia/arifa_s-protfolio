import skill1 from "../../assets/logo/html.png"
import skill2 from "../../assets/logo/css.png"
import skill3 from "../../assets/logo/tailwind.png"
import skill4 from "../../assets/logo/js.png"
import skill5 from "../../assets/logo/react.png"
import skill6 from "../../assets/logo/jd node.png"
import skill7 from "../../assets/logo/express-js.png"
import skill8 from "../../assets/logo/mongo.png"
import skill9 from "../../assets/logo/firbase.png"

const Skill = () => {
    return (
        <section className="container mx-auto p-12">
            <div className="text-center">

                <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#7545d8] to-white bg-clip-text">___My Technical Arsenal</h1>

            </div>
            <div className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-8 justify-around my-12 ">
                <div className="bg-gray-800 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                    <img className="size-28 mx-auto" src={skill1} alt="" />
                </div>
                <div className="bg-gray-800 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                    <img className="size-28 mx-auto" src={skill2} alt="" />
                </div>
                <div className="bg-gray-800 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                    <img className="size-28 mx-auto" src={skill3} alt="" />
                </div>
                <div className="bg-gray-800  rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                    <img className="size-28 mx-auto" src={skill4} alt="" />
                </div>
                <div className="bg-gray-800  rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                    <img className="size-28 mx-auto" src={skill5} alt="" />
                </div>

            </div>
            <div className="md:max-w-5xl mx-auto">
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 justify-around items-center   ">
                    <div className="bg-gray-800 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                        <img className="size-28 mx-auto" src={skill6} alt="" />
                    </div>
                    <div className="bg-gray-800 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                        <img className="size-28 mx-auto" src={skill7} alt="" />
                    </div>
                    <div className="bg-gray-800 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                        <img className="size-28 mx-auto" src={skill8} alt="" />
                    </div>
                    <div className="bg-gray-800  rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8">
                        <img className="size-28 mx-auto" src={skill9} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skill;