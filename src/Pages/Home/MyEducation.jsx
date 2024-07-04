

const MyEducation = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto my-8 text-white">
                <h1 className="text-4xl font-bold text-transparent text-center bg-gradient-to-r from-[#7545d8] to-white bg-clip-text"> Education & Courses</h1>
                <div className="grid lg:grid-cols-3 gap-4 ">


                    <div className="bg-gray-900 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8 my-6 space-y-3 ">

                       <h3 className="text-xl">Course :BBA (Accounting)</h3>
                       <h4 className="text-xl ">University : Dakshin Surma govt. College</h4>
                       <h4 className="text-xl ">Year : 2018-2024</h4>
                       


                    </div>
                    <div className="bg-gray-900 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8 my-6 space-y-3 ">

                       <h3 className="text-xl">Course : Graphic Design</h3>
                       <h4 className="text-xl ">Institute : Eshikon.com</h4>
                       <h4 className="text-xl ">Year :2022</h4>
                    </div>
                    <div className="bg-gray-900 rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8 my-6 space-y-3 ">

                       <h3 className="text-xl">Course : Web development</h3>
                       <h4 className="text-xl ">Institute : Programming Hero</h4>
                       <h4 className="text-xl ">Year :2024</h4>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MyEducation;
