'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/membership', label: 'Membership' },
    { href: '/events', label: 'Events' },
    { href: '/community', label: 'Community' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/dark-logo.png" 
              alt="JSSC Logo" 
              width={300} 
              height={100}
              className="w-[300px] h-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/apply" variant="primary" className="ml-4">
              Apply Now
            </Button>
          </nav>

          <button
            className="lg:hidden text-charcoal p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/membership" variant="primary" className="w-full">
                Join Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
