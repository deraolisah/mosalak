import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/mosalak-logo.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import RolePopup from "./RolePopup";
import SignupPopup from "./SignupPopup";
import LoginPopup from "./LoginPopup";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null); // Add this state

  const navlink = ({isActive}) => isActive ? 
    "text-primary font-medium text-sm text-gray-700 hover:text-primary" : 
    "font-medium text-sm text-gray-700 hover:text-primary";

  const handleClosePopup = () => {
    setActivePopup(null);
    // Optionally reset selected role when closing
    // setSelectedRole(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  };

  // Handle role selection and continue to signup
  const handleRoleContinue = (role) => {
    setSelectedRole(role);
    console.log("Selected role:", role);
    setActivePopup("signup");
  };

  return (
    <>
      <header className="sticky top-0 z-60 bg-white/50 backdrop-blur-md shadow h-16 md:h-20">
        <div className="container w-full h-full flex items-center justify-between relative z-60">
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

          {/* User Actions - Home Page */}
          <div className="flex items-center gap-2.5">
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
            <button className="lg:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(prev => !prev)}>
              {isMenuOpen ? <RiCloseLargeLine /> : <RxHamburgerMenu />}
            </button>
          </div>


          {/* User Actions - Other Pages */}
          <div className="flex items-center gap-6">
            <div className="space-x-2.5 hidden md:flex">
              <button> Cart </button>
              <button> Wishlist </button>
              <button> Avatar </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <>
            <div className="lg:hidden flex flex-col gap-4 items-start absolute left-0 top-16 w-full bg-white z-10 p-4">
              <NavLink to="/marketplace" className={navlink}> Market Place </NavLink>
              <NavLink to="/freelancers" className={navlink}> Freelancers </NavLink>
              <NavLink to="/community" className={navlink}> Community </NavLink>
              <NavLink to="/postings" className={navlink}> Postings </NavLink>
              <NavLink to="/services" className={navlink}> Services </NavLink>
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
            </div>
            </>
          )}
          
        </div>
      </header>

      {isMenuOpen && (
        <div className="flex lg:hidden fixed inset-0 top-20 left-0 z-20 w-full h-full bg-black/70" onClick={() => { setIsMenuOpen(false)}}></div>
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
              selectedRole={selectedRole} // Pass the selected role to signup form
            />
          )}

          {/* Login Form Popup */}
          {activePopup === "login" && (
            <LoginPopup
              onClose={handleClosePopup}
              onCreateAccountClick={() => {
                setSelectedRole(null); // Reset role if going from login to signup
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