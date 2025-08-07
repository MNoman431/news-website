import React from "react";
import herosection from "../assets/herosection.jpeg"; // Adjust the path as necessary

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center text-gray-800 dark:text-gray-200">
      
      {/* Content Section */}
      <div className="w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Welcome to UpdatedPakistan
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              At UpdatedPakistan, we are committed to delivering the latest, most relevant news from across the country. Whether it’s technology, education, real estate, sports, or business — we aim to keep you informed, always.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
          src={herosection}
              alt="Newsroom"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Noman Rehan</h3>
            <p className="text-gray-500 dark:text-gray-400">Founder & Editor</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Ali Raza</h3>
            <p className="text-gray-500 dark:text-gray-400">Content Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Ayesha Khan</h3>
            <p className="text-gray-500 dark:text-gray-400">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
