
import logo from "../../assets/logo/Logo.png"

const Navbar = () => {

    // const toggleDarkMode = () => {
    //     document.documentElement.classList.toggle('dark');
    // };

    const navOptions =
        // <>
        //     <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        //     <NavLink to={'/about-me'}><li><a>About Me</a></li></NavLink>
        //     <NavLink to={'/projects'}><li><a>Projects</a></li></NavLink>
        //     <NavLink to={'/'}><li><a>Blog</a></li></NavLink>
        // </>
        <>
            <li><a href="#/">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
        </>
    return (
        <section className=" bg-gradient-to-r from-[#000000F2] to-[#2e165aCF]  " >
            <div className="navbar text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold font-noto ">
                        <img className="size-10" src={logo} alt="arifa nadia" /><span className="hidden md:block">Arifa Nadia</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-none mr-2 bg-gradient-to-r from-[#7545d8] via-[#502c96] to-main_color text-white">Hire Me!</a>
                </div>

            </div>
        </section>
    );
};

export default Navbar;