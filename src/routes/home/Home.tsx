
import { Link } from "react-router-dom";
import data from "./home.json";
import Contact from "../contact-footer/Contact";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-sans w-full">
      {/* Navbar */}
       {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2">
            <img src={data.navbar.logo} alt="logo" className="w-8 h-8" />
            <span className="font-bold text-lg">{data.navbar.brand}</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-sm text-gray-600">
            {data.navbar.links.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="hover:text-blue-600">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3 text-sm text-gray-600">
            {data.navbar.links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="block hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">{data.hero.subtitle}</p>
        <a href="/converter" className="bg-white text-purple-600 font-semibold px-6 py-3 mt-6 rounded-lg shadow hover:bg-gray-100 transition">
          {data.hero.buttonText}
        </a>
      </section>

      
      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose {data.navbar.brand}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(data.advantages).map((adv, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {adv.title}
                </h3>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Number System Converter Section */}
      {/* <section className="py-2 bg-white text-center mb-8 mt-8">
        <h2 className="text-2xl font-bold mb-2">{data.section.title}</h2>
        <p className="text-gray-600">{data.section.subtitle}</p> */}
      {/* Input form can go here later */}
      {/* </section> */}
      <Contact />

    </div>
  );
}
