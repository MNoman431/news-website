// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { signinUserThunk } from "../../redux/thunks/AuthThunk";


// const SigninForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const resultAction = await dispatch(signinUserThunk(formData));

//     if (signinUserThunk.fulfilled.match(resultAction)) {
//       navigate("/"); // 👈 redirect on successful login
//     }
//   };

//   return (
//     <div className="min-h-screen mt-20">
//       <div className="flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
//         {/* Left side */}
//         <div className="flex-1">
//           <Link to="/signin" className="font-bold text-2xl sm:text-4xl flex flex-wrap">
//             <span className="text-slate-500">Updated</span>
//             <span className="text-slate-900">Pakistan</span>
//           </Link>

//           <h2 className="text-[24px] md:text-[30px] font-bold leading-[140%] tracking-tighter pt-5 sm:pt-12">
//             Sign in to your account.
//           </h2>

//           <p className="text-slate-500 text-[14px] font-medium leading-[140%] md:text-[16px] md:font-normal mt-2">
//             Welcome back, Please provide your details
//           </p>
//         </div>

//         {/* Right side (form) */}
//         <div className="flex-1">
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="xyz@email.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50"
//             >
//               {loading ? "Signing In..." : "Sign In"}
//             </button>

//             {/* Optional: Error Message */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <div className="w-full mt-3">
//               <button
//                 type="button"
//                 className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
//               >
//                 Sign in with Google
//               </button>
//             </div>
//           </form>

//           <div className="flex gap-2 text-sm mt-5">
//             <span>Don't have an account?</span>
//             <Link to="/signup" className="text-blue-500 hover:underline">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SigninForm;


// // auth/forms/SigninForm.jsx
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signinUserThunk } from "../../redux/thunks/AuthThunk";
// import { useNavigate } from "react-router-dom";

// const SigninForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, loading, error } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(signinUserThunk(formData));

//     // ✅ If login is successful, check admin and redirect accordingly
//     if (result?.payload) {
//       const { isAdmin } = result.payload;
//       if (isAdmin) {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/"); // ya /user/dashboard if you have it
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Sign In</h2>

//       {error && <p className="text-red-500">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           required
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           required
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
//           disabled={loading}
//         >
//           {loading ? "Signing in..." : "Sign In"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SigninForm;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signinUserThunk } from "../../redux/thunks/AuthThunk";

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(signinUserThunk(formData));
console.log(resultAction," ye a rha he resultAction");
    if (signinUserThunk.fulfilled.match(resultAction)) {
      const user = resultAction.payload;

      if (user?.isAdmin) {
        navigate("/admin/dashboard"); // ✅ Go to admin panel
      } else {
        navigate("/"); // ✅ Regular user
      }
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left side */}
        <div className="flex-1">
          <Link to="/signin" className="font-bold text-2xl sm:text-4xl flex flex-wrap">
            <span className="text-slate-500">Updated</span>
            <span className="text-slate-900">Pakistan</span>
          </Link>

          <h2 className="text-[24px] md:text-[30px] font-bold leading-[140%] tracking-tighter pt-5 sm:pt-12">
            Sign in to your account.
          </h2>

          <p className="text-slate-500 text-[14px] font-medium leading-[140%] md:text-[16px] md:font-normal mt-2">
            Welcome back, Please provide your details
          </p>
        </div>

        {/* Right side (form) */}
        <div className="flex-1">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="xyz@email.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Optional: Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="w-full mt-3">
              <button
                type="button"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
              >
                Sign in with Google
              </button>
            </div>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;



























// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { signinUserThunk } from "../../redux/thunks/AuthThunk"; // 🔁 lowercase path fixed

// const SigninForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const resultAction = await dispatch(signinUserThunk(formData));

//     if (signinUserThunk.fulfilled.match(resultAction)) {
//       const { user } = resultAction.payload;

//       if (user?.isAdmin) {
//         navigate("/admin/dashboard"); // ✅ Go to admin panel
//       } else {
//         navigate("/"); // ✅ Regular user
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen mt-20">
//       <div className="flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
//         {/* Left side */}
//         <div className="flex-1">
//           <Link to="/signin" className="font-bold text-2xl sm:text-4xl flex flex-wrap">
//             <span className="text-slate-500">Updated</span>
//             <span className="text-slate-900">Pakistan</span>
//           </Link>

//           <h2 className="text-[24px] md:text-[30px] font-bold leading-[140%] tracking-tighter pt-5 sm:pt-12">
//             Sign in to your account.
//           </h2>

//           <p className="text-slate-500 text-[14px] font-medium leading-[140%] md:text-[16px] md:font-normal mt-2">
//             Welcome back, Please provide your details
//           </p>
//         </div>

//         {/* Right side (form) */}
//         <div className="flex-1">
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="xyz@email.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50"
//             >
//               {loading ? "Signing In..." : "Sign In"}
//             </button>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             {/* Optional Google button */}
//             <div className="w-full mt-3">
//               <button
//                 type="button"
//                 className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
//               >
//                 Sign in with Google
//               </button>
//             </div>
//           </form>

//           <div className="flex gap-2 text-sm mt-5">
//             <span>Don't have an account?</span>
//             <Link to="/signup" className="text-blue-500 hover:underline">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SigninForm;
