import CountUp from 'react-countup';

const Stats = () => {
    return (
        <section className='bg-main_color bg-opacity-50 '>
            <div className=" md:flex justify-between gap-4 max-w-6xl mx-auto p-8 space-y-4 lg:space-y-0 ">
                <div className="stat bg-black rounded-md  flex items-center space-x-2 ">
                    <div className="stat-value text-3xl text-white">
                        <CountUp
                            start={1050}
                            end={1080}
                            duration={2.75}
                            separator=","
                        />+
                    </div>
                    <div className="">Hours <br /> of Work</div>

                </div>
                <div className="stat bg-black rounded-md  flex items-center space-x-2 ">
                    <div className="stat-value text-4xl text-white">
                        <CountUp
                            start={0}
                            end={15}
                            duration={2.75}
                            separator=","
                        />+
                    </div>
                    <div className="">Projects <br /> Completed</div>

                </div>
                <div className="stat bg-black rounded-md  flex items-center space-x-2 ">
                    <div className="stat-value text-4xl text-white">
                        <CountUp
                            start={0}
                            end={8}
                            duration={2.75}
                            separator=","
                        />+
                    </div>
                    <div className="">Months <br /> of Experience</div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
