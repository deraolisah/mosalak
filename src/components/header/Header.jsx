import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/mosalak-logo.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlink = ({isActive}) => isActive ? "text-primary font-medium text-sm text-gray-700 hover:text-primary" : "font-medium text-sm text-gray-700 hover:text-primary";


  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <header className="sticky top-0 z-50 bg-white shadow h-16 md:h-20">
      <div className="container w-full h-full flex items-center justify-between">
        <Link to="/" className="">
          <img src={Logo} alt="Mosalak Hub Logo" className="w-auto h-8" />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/marketplace" className={navlink}> Market Place </NavLink>
          <NavLink to="/freelancers" className={navlink}> Freelancers </NavLink>
          <NavLink to="/community" className={navlink}> Community </NavLink>
          <NavLink to="/postings" className={navlink}> Postings </NavLink>
          <NavLink to="/services" className={navlink}> Services </NavLink>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-2.5">
          <div className="space-x-2 hidden md:flex">
            <button className="btn btn-text px-3">
              Login
            </button>
            <button className="btn">
              Sign Up
            </button>
          </div>
          <button className="lg:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(prev => !prev)}>
            {isMenuOpen ? <RiCloseLargeLine /> : <RxHamburgerMenu />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;