// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import DarkMode from "./DarkMode";


const Navbar = () => {
    return (
        <header className="shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <h1 className="text-xl sm:text-2xl font-cinzel font-bold">
                        <span className="text-slate-500 dark:text-gray-300">Updated</span>{" "}
                        <span className="text-slate-900 dark:text-white">Pakistan</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-6">
                    <Link
                        to="/"
                        className="text-slate-700 dark:text-gray-300 hover:underline font-cinzel font-bold"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-slate-700 dark:text-gray-300 hover:underline font-cinzel font-bold"
                    >
                        About
                    </Link>
                    <Link
                        to="/news"
                        className="text-slate-700 dark:text-gray-300 hover:underline font-cinzel font-bold"
                    >
                        News Articles
                    </Link>
                </nav>

                {/* Desktop Search */}
                <div className="hidden lg:flex items-center bg-slate-100 dark:bg-gray-800 rounded-lg px-3 py-1">
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="bg-transparent focus:outline-none w-40 text-slate-700 dark:text-gray-300"
                    />
                    <FaSearch className="text-slate-600 dark:text-gray-400 ml-2" />
                </div>

                {/* Dark Mode Toggle & Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <DarkMode />
                    <Link to="/signin" className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 rounded-md transition duration-300 ease-in-out">
                        Sign In
                    </Link>

                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    <button>
                        <FaBars className="text-xl text-slate-700 dark:text-gray-300" />
                    </button>
                </div>
            </div>

            {/* Mobile Search and Menu */}
            <div className="lg:hidden px-4 py-3 space-y-4 bg-white dark:bg-gray-900">
                <div className="flex items-center bg-slate-100 dark:bg-gray-800 rounded-lg px-3 py-1">
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="bg-transparent focus:outline-none w-full text-slate-700 dark:text-gray-300"
                    />
                    <FaSearch className="text-slate-600 dark:text-gray-400 ml-2" />
                </div>
                <nav className="flex flex-col gap-3">
                    <Link
                        to="/"
                        className="text-slate-700 dark:text-gray-300 hover:underline font-cinzel font-bold"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-slate-700 dark:text-gray-300 hover:underline font-cinzel font-bold"
                    >
                        About
                    </Link>
                    <Link
                        to="/news"
                        className="text-slate-700 dark:text-gray-300 hover:underline font-cinzel font-bold"
                    >
                        News Articles
                    </Link>
                    <DarkMode />
                    <button className="px-4 py-2 bg-black-600 hover:bg-blue-700 text-white rounded-md transition">
                        Sign In
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
