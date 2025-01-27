import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full bg-blue-600 text-white py-4 mb-6">
        <h1 className="text-3xl font-bold text-center">My Portfolio</h1>
      </header>

      <main className="max-w-4xl w-full">
        {/* About Section */}
        <section className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi, I'm a passionate front-end developer specializing in React JS. I enjoy building beautiful and functional websites that make a difference.
          </p>
        </section>

        {/* Projects Section */}
        <section className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-4 rounded shadow">
              <h3 className="text-xl font-medium">Project 1: Portfolio Website</h3>
              <p className="text-gray-600">A responsive portfolio website built with React, showcasing my skills and projects.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded shadow">
              <h3 className="text-xl font-medium">Project 2: E-commerce App</h3>
              <p className="text-gray-600">An e-commerce platform with product search, filters, and a shopping cart.</p>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input type="text" className="w-full border-gray-300 rounded px-3 py-2" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input type="email" className="w-full border-gray-300 rounded px-3 py-2" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea className="w-full border-gray-300 rounded px-3 py-2" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-6 text-gray-600">
        <p>© 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
