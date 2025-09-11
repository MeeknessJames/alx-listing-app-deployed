import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {}
        <div>
          <h3 className="text-xl font-bold mb-4">ALX Listing App</h3>
          <p className="text-gray-400 text-sm">
            Your trusted partner for finding luxury properties worldwide. We
            offer a curated selection of homes for every taste.
          </p>
        </div>

        {}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;