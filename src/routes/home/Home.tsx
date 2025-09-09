
import data from "./home.json";
import React from "react";
export default function Home() {
  return (
    <div className="font-sans w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={data.navbar.logo} alt="logo" className="w-8 h-8" />
            <span className="font-bold text-lg">{data.navbar.brand}</span>
          </div>
          <ul className="flex space-x-6 text-sm text-gray-600">
            {data.navbar.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-blue-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">{data.hero.subtitle}</p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          {data.hero.buttonText}
        </button>
      </section>

      {/* Number System Converter Section */}
      <section className="py-2 bg-white text-center">
        <h2 className="text-2xl font-bold mb-2">{data.section.title}</h2>
        <p className="text-gray-600">{data.section.subtitle}</p>
        {/* Input form can go here later */}
      </section>
    </div>
  );
}
