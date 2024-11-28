"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
          DASIJE INVESTMENT LIMITED
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link
              href="/"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="#services"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
