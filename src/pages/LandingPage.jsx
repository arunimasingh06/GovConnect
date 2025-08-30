import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="p-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">GovConnect</h1>
          <div>
            <button
              onClick={handleLoginClick}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Connecting Government and Citizens for a Brighter Future
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
            Streamline public services, enhance transparency, and foster community engagement with our innovative platform.
          </p>
          <button
            onClick={handleLoginClick}
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started - Login
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Efficient Services</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Access a wide range of government services online, submit applications, and track progress effortlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Transparent Operations</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Gain insights into government projects, financial reports, and public initiatives with complete transparency.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Community Engagement</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Participate in polls, provide feedback, and stay connected with local government and community updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience Better Governance?</h3>
          <p className="text-xl mb-8">Join GovConnect today and be a part of a more connected and efficient community.</p>
          <button
            onClick={handleLoginClick}
            className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 GovConnect. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-blue-400 hover:underline mx-2">Privacy Policy</a> |
            <a href="#" className="text-blue-400 hover:underline mx-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
