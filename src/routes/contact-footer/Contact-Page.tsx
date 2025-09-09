import React from "react";
import contactData from "./contact.json";

type ContactData = {
  brand: { name: string; description: string };
  links: { name: string; href: string }[];
  contactInfo: { address: string; phone: string; email: string };
};

const data = contactData as ContactData;

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Contact {data.brand.name}</h1>
        <p className="text-lg max-w-2xl mx-auto">{data.brand.description}</p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Address Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <div className="text-purple-600 text-4xl mb-4">📍</div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p className="text-gray-600">{data.contactInfo.address}</p>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <div className="text-purple-600 text-4xl mb-4">📞</div>
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-600">{data.contactInfo.phone}</p>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <div className="text-purple-600 text-4xl mb-4">✉️</div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-600">{data.contactInfo.email}</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-100 py-12">
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">Quick Links</h3>
        <ul className="flex flex-wrap justify-center gap-6">
          {data.links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-purple-600 font-medium hover:text-purple-800 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
