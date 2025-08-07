import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
import { ThemeContext } from "../../context/ThemeContext"; // Adjust the import path as necessary

const DarkMode = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition duration-300"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkMode;










// import React, { useEffect, useState } from "react";

// const DarkMode = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition duration-300"
//     >
//       {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//     </button>
//   );
// };

// export default DarkMode;
