import { useState, useRef } from "react";
import { Link, NavLink, useLocation, } from "react-router-dom";
import Logo from "../../assets/mosalak-logo.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import RolePopup from "./RolePopup";
import SignupPopup from "./SignupPopup";
import LoginPopup from "./LoginPopup";
import { ShoppingCart, Heart, ChevronDown } from 'lucide-react';
import AccountPopup from "./AccountPopup";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [accountPopup, setAccountPopup] = useState(false);

  const accountRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const location = useLocation();
  const isHome = location.pathname === '/';


  const navlink = ({isActive}) => isActive ? 
    "text-primary font-medium text-sm text-gray-700 hover:text-primary" : 
    "font-medium text-sm text-gray-700 hover:text-primary";

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  };

  const handleRoleContinue = (role) => {
    setSelectedRole(role);
    // console.log("Selected role:", role);
    setActivePopup("signup");
  };

  return (
    <>
      <header className="sticky top-0 z-60 bg-white md:bg-white/60 backdrop-blur-md shadow h-16 md:h-20">
        <div className="container w-full h-full flex items-center justify-between gap-6 relative z-60">
          <Link to="/" className="w-fit h-fit ">
            <img src={Logo} alt="Mosalak Hub Logo" className="w-38 md:w-52" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6 w-fit mx-auto flex-1">
            <NavLink to="/marketplace" className={navlink}> Market Place </NavLink>
            <NavLink to="/freelancers" className={navlink}> Freelancers </NavLink>
            <NavLink to="/community" className={navlink}> Community </NavLink>
            <NavLink to="/postings" className={navlink}> Postings </NavLink>
            <NavLink to="/services" className={navlink}> Services </NavLink>
          </nav>

          {/* User Actions - Conditional based on page */}
          <div className="w-fit flex items-center justify-end gap-2.5">
            {isHome ? (
              <div className="space-x-2.5 hidden md:flex">
                <button 
                  className="btn btn-text px-4"
                  onClick={() => setActivePopup("login")}
                >
                  Login
                </button>
                <button 
                  className="btn"
                  onClick={() => setActivePopup("role")}
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <div className="space-x-4 flex">
                  <Link to="/cart" className="text-sm text-dark/80 flex items-center gap-2 cursor-pointer relative"> 
                    <span className="hidden md:inline-flex"> Cart </span>
                    <ShoppingCart size={22} strokeWidth={1.5} className="text-primary" />
                    <span className="absolute -right-1.5 -top-1 w-4 h-4 flex items-center justify-center rounded-full bg-white border border-[#1B6392]/70 text-[9px] text-[#1B6392]/70 font-medium"> 2 </span>
                  </Link>
                  <Link to="/wishlist" className="text-sm text-dark/80 flex items-center gap-2 cursor-pointer"> 
                    <span className="hidden md:inline-flex"> Wishlist </span>
                    <Heart size={22} strokeWidth={1.5} className="text-primary text-xs" />
                  </Link>
                  <div ref={accountRef} className="text-sm text-dark/80 cursor-pointer relative"> 
                    <button onClick={() => { setAccountPopup(!accountPopup)}} className="flex items-center gap-0.5 cursor-pointer">
                      <span className="w-7 h-7 rounded-full bg-gray-300 text-primary md:hidden flex items-center justify-center">
                        A
                      </span>
                      <span className="hidden md:inline-flex"> Account </span>
                      <ChevronDown size={16} strokeWidth={1.5} className={`transition-all duration-200 ${accountPopup ? "rotate-180" : ""}`} />
                    </button>
                    {accountPopup && (
                      <AccountPopup isAuthenticated={isAuthenticated} />  
                    )}
                  </div>

                </div>
              </div>
            )}
            
            <button className="lg:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(prev => !prev)}>
              {isMenuOpen ? <RiCloseLargeLine /> : <RxHamburgerMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <>
              <div className="lg:hidden flex fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-full bg-white z-60 py-6">
                <div className="container flex flex-col gap-6 items-start ">
                  <NavLink to="/marketplace" className={navlink} onClick={()=> { setIsMenuOpen(false); scrollTo(0,0); }}> Market Place </NavLink>
                  <NavLink to="/freelancers" className={navlink} onClick={()=> { setIsMenuOpen(false); scrollTo(0,0); }}> Freelancers </NavLink>
                  <NavLink to="/community" className={navlink} onClick={()=> { setIsMenuOpen(false); scrollTo(0,0); }}> Community </NavLink>
                  <NavLink to="/postings" className={navlink} onClick={()=> { setIsMenuOpen(false); scrollTo(0,0); }}> Postings </NavLink>
                  <NavLink to="/services" className={navlink} onClick={()=> { setIsMenuOpen(false); scrollTo(0,0); }}> Services </NavLink>
                  
                  {/* Mobile Actions - Always show Login/Signup for simplicity, or conditionally */}
                  {!isAuthenticated && (
                    <div className="space-x-2.5 flex md:hidden">
                      <button 
                        className="btn btn-tertiary"
                        onClick={() => setActivePopup("login")}
                      >
                        Login
                      </button>
                      <button 
                        className="btn"
                        onClick={() => setActivePopup("role")}
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}          
        </div>
      </header>

      {isMenuOpen && (
        <div className="flex lg:hidden fixed inset-0 top-16 md:top-60 left-0 z-20 w-full h-full bg-black/70" onClick={() => { setIsMenuOpen(false)}}></div>
      )}

      {/* Popup Overlay */}
      {activePopup && (
        <div 
          className="fixed inset-0 bg-black/70 z-60 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Role Selection Popup - ONLY ONE INSTANCE */}
          {activePopup === "role" && (
            <RolePopup
              onClose={handleClosePopup}
              onContinue={handleRoleContinue}
              onSignInClick={() => setActivePopup("login")}
            />
          )}

          {/* Sign Up Form Popup - Pass the selected role if needed */}
          {activePopup === "signup" && (
            <SignupPopup
              onClose={handleClosePopup}
              onSignInClick={() => setActivePopup("login")}
              selectedRole={selectedRole}
            />
          )}

          {/* Login Form Popup */}
          {activePopup === "login" && (
            <LoginPopup
              onClose={handleClosePopup}
              onCreateAccountClick={() => {
                setSelectedRole(null);
                setActivePopup("role");
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Header;