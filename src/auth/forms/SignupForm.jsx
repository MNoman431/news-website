import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUserThunk } from "../../redux/thunks/AuthThunk";
// import { signupUserThunk } from "../redux/thunks/AuthThunk";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    dispatch(signupUserThunk(formData));
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-2xl sm:text-4xl flex flex-wrap">
            <span className="text-slate-500">Morning</span>
            <span className="text-slate-900">Dispatch</span>
          </Link>

          <h2 className="text-[24px] md:text-[30px] font-bold leading-[140%] tracking-tighter pt-5 sm:pt-12">
            Create a new account
          </h2>

          <p className="text-slate-500 text-sm md:text-base mt-2">
            Please provide your details to create an account.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="xyz@email.com"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="mt-3 w-full border border-dashed border-gray-300 p-3 text-center rounded-md text-gray-500 text-sm">
              GoogleAuth Component
            </div>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
