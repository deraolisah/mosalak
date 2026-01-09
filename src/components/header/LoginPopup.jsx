import { useState } from "react";
import { Eye, EyeClosed } from 'lucide-react';

const LoginPopup = ({ onCreateAccountClick }) => {

  const [showPassword, setShowPassword ] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login data:", formData);
  };

  return (
    <div className="bg-white rounded-md p-8 max-h-[90vh] max-w-md w-full shadow-xl overflow-y-auto">
      <h2 className="text-xl font-semibold tracking-normal text-center mb-6">Sign in to your account</h2>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder=""
            required
          />
        </div>
        
        <div>
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder=""
              required
            />
            <button className="absolute top-1/2 right-4 -translate-y-1/2 text-dark/40 cursor-pointer" onClick={toggleShowPassword}> 
              {!showPassword ? (
                <Eye /> 
              ) : (
                <EyeClosed />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2 rounded text-primary focus:ring-primary" 
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
          <button type="button" className="text-xs text-primary/80 hover:underline">
            Forgot Password?
          </button>
        </div>
        
        <button 
          type="submit"
          className="w-full btn mt-2"
        >
          LOGIN
        </button>
      </form>
      
      <div className="text-center mt-0 flex flex-col gap-4 relative">
        {/* <span className="before:absolute after:left-0 after:top-6.5 after:w-full after:h-px after:bg-dark/40 after:content-['']"></span> */}
        <span className="after:absolute after:left-0 after:top-6.5 after:w-full after:h-px after:bg-dark/40 after:content-['']"></span>
        <span className="text-dark/60 text-sm z-2 w-fit mx-auto px-2.5 bg-white">Don't have account </span>
        <button 
          className="btn btn-tertiary"
          onClick={onCreateAccountClick}
        >
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;