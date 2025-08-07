
// import React, { useContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import { ThemeContext } from "./context/ThemeContext";
// import Layout from "./layout/Layout";
// import HeroSection from "./components/shared/HeroSection";
// import AboutUs from "./pages/AboutUs";
// import NewArticles from "./pages/NewArticles";
// import SigninForm from "./auth/forms/SigninForm";
// import SignupForm from "./auth/forms/SignupForm";
// import PrivateRoute from "./protectedRouting/PrivateRoutes";
// const App = () => {
//   const { darkMode } = useContext(ThemeContext);
//   return (
//     <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HeroSection />} />
//           <Route
//             path="/about"
//             element={
//               <PrivateRoute>
//                 <AboutUs />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/news"
//             element={
//               <PrivateRoute>
//                 <NewArticles />
//               </PrivateRoute>
//             }
//           />
//           <Route path="/signin" element={<SigninForm />} />
//           <Route path="/signup" element={<SignupForm />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };
// export default App;





import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Layout from "../layout/Layout"
import HeroSection from "../components/shared/HeroSection";
import AboutUs from "../pages/AboutUs";
import NewArticles from "../pages/NewArticles";
import SigninForm from "../auth/forms/SigninForm";
import SignupForm from "../auth/forms/SignupForm";
import PrivateRoute from "../protectedRouting/PrivateRoutes";

// ✅ Admin Components
import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";
import Users from "../admin/Users";
import ViewUser from "../admin/ViewUser";
import CreatePost from "../admin/adminPost/CreatePost";
import AllPost from "../admin/adminPost/AllPost";


const UserLayout = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Routes>
        {/* Main Site Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <AboutUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/news"
            element={
              <PrivateRoute>
                <NewArticles />
              </PrivateRoute>
            }
          />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>

        {/* ✅ Admin Panel Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="/admin/users/:id" element={<ViewUser />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="all-posts" element={<AllPost />} /> {/* ✅ Add this line */}

        </Route>
      </Routes>
    </div>
  );
};

export default UserLayout;
