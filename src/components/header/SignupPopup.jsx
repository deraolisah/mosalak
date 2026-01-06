import { useState } from "react";

const SignupPopup = ({ onSignInClick, selectedRole }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
    role: selectedRole || "" // Include role in form data
  });

  // Update role when selectedRole prop changes
  // useEffect(() => {
  //   if (selectedRole) {
  //     setFormData(prev => ({
  //       ...prev,
  //       role: selectedRole
  //     }));
  //   }
  // }, [selectedRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup data with role:", formData);
    // You can show the selected role to the user
    if (selectedRole) {
      alert(`Creating account as: ${selectedRole.toUpperCase()}`);
    }
  };

  return (
    <div className="bg-white rounded-md p-8 max-w-md w-full shadow-xl">
      {/* <h2 className="text-xl font-semibold text-center mb-0.5">Create Your Account</h2> */}
      
      {/* Show selected role if available */}
      {selectedRole && (
        <div className="mb-4 py-0.5 pb-1.5 px-3 bg-primary/10 rounded-lg text-center">
          <span className="text-xs">Creating account as a: </span>
          <span className="text-xs text-primary">
            {selectedRole.toUpperCase()}
          </span>
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            // placeholder="Enter your full name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone</label>
          <input 
            type="text" 
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            // placeholder="Enter email or phone number"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            // placeholder="Enter password"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            // placeholder="Confirm your password"
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full btn mt-2 rounded-sm"
        >
          CREATE ACCOUNT →
        </button>
      </form>
      
      <div className="text-center mt-4">
        <span className="text-gray-600">Already have an account? </span>
        <button 
          className="text-primary font-semibold hover:underline"
          onClick={onSignInClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignupPopup;