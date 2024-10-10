import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  const navLinks = [
    { title: 'Home', link: '/', isProtected:true },
    { title: 'Cart', link: '/cart', isProtected:true },
    { title: 'Login', link: '/login', isProtected:false },
    { title: 'Sign Up', link: '/signup', isProtected:false },
  ];


  return (
    <nav className="bg-gray-800">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-start px-4">
      <a
          href="https://baitussalam.org/tech-park"
          className="flex items-center gap-3"
        >
      <img
            src="https://baitussalam.org/images/logo-2.svg"
            className="h-12 mx-5"
            alt="Logo"
          />
          </a>
        <div
          className='nav-elements fixed right-0 top-0 z-40 h-screen w-64 transform bg-gray-600 text-white transition-transform duration-300 ease-in-out md:relative md:right-auto md:top-auto md:h-auto md:w-auto md:translate-x-0 md:bg-transparent'>
          <ul className="mt-16 flex flex-col space-y-8 px-6 py-6 md:mt-0 md:flex-row md:space-x-8 md:space-y-0 md:px-0">
            {navLinks.map(({ title, link }, index) => (
              <li key={index} className="group">
                <NavLink to={link} className="relative p-2 text-lg font-medium text-white transition-all duration-300 ease-in-out hover:text-blue-400 md:text-base">
                  {title}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      <Logout/>
      </div>
    </nav>
  );
}

export default Navbar;