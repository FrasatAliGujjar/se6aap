import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#133e87] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo or Title */}
        <div className="text-xl font-bold mb-4 lg:mb-0">
          Attendance Portal
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 lg:mt-0">
          <Link href="https://www.facebook.com/m.frasataligujjar" className="hover:text-gray-300" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.505 0-1.796.715-1.796 1.763v2.313h3.591l-.467 3.622h-3.124V24h6.116c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </Link>
          <Link href="https://x.com/MFrasatAli79" className="hover:text-gray-300" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.941 13.941 0 011.671 3.149a4.822 4.822 0 001.523 6.573A4.903 4.903 0 01.96 9.1v.06a4.918 4.918 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.928 4.928 0 004.6 3.417A9.869 9.869 0 010 21.543a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.513 14.01-14.01 0-.213-.004-.425-.014-.637A10.004 10.004 0 0024 4.557z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/frasataligujjar/" className="hover:text-gray-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.792 0 0 .775 0 1.73v20.54C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.73V1.73C24 .775 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.674c-1.148 0-2.078-.934-2.078-2.086 0-1.153.93-2.086 2.078-2.086s2.078.933 2.078 2.086c0 1.152-.93 2.086-2.078 2.086zM20.452 20.452h-3.56v-5.428c0-1.296-.026-2.962-1.806-2.962-1.806 0-2.082 1.411-2.082 2.868v5.522h-3.56V9h3.42v1.563h.05c.476-.902 1.635-1.848 3.364-1.848 3.6 0 4.268 2.367 4.268 5.445v6.292z" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/innoxent_engineers_ntu/" className="hover:text-gray-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0 1.837c-3.148 0-3.515.012-4.756.069-1.201.056-2.006.25-2.597.84-.591.591-.784 1.396-.84 2.597-.057 1.241-.069 1.608-.069 4.756s.012 3.515.069 4.756c.056 1.201.25 2.006.84 2.597.591.591 1.396.784 2.597.84 1.241.057 1.608.069 4.756.069s3.515-.012 4.756-.069c1.201-.056 2.006-.25 2.597-.84.591-.591.784-1.396.84-2.597.057-1.241.069-1.608.069-4.756s-.012-3.515-.069-4.756c-.056-1.201-.25-2.006-.84-2.597-.591-.591-1.396-.784-2.597-.84-1.241-.057-1.608-.069-4.756-.069z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;