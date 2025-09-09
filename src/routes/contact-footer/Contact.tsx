import React from "react";
import contactData from "./contact.json";

// Optional: light types so TS knows what's in the JSON
type ContactData = {
  brand: { name: string; description: string };
  links: { name: string; href: string }[];
  contactInfo: { address: string; phone: string; email: string };
  footerText: string;
};

const data = contactData as ContactData;

export default function Contact() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">{data.brand.name}</h2>
          <p className="text-gray-400">{data.brand.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {data.links.map((link, idx) => (
              <li key={idx}>
                {/* If you're using react-router, swap <a> for <Link to={link.href}> */}
                <a href={link.href} className="hover:text-purple-400">
                  {link.name}
                </a>
              </li>
            ))}
            
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">📍 {data.contactInfo.address}</p>
          <p className="text-gray-400">✉️ {data.contactInfo.email}</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {data.brand.name}. {data.footerText}
      </div>
    </footer>
  );
}
