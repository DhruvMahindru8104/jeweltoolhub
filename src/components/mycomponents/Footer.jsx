'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-between p-6 space-y-4 sm:flex-row sm:space-y-0">
        <div className="flex items-center gap-2">
      <Link href="/">
        <Image
          src="/Logobhai.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-12 w-auto rounded-full"
        />
      </Link>
      <div className={"text-sm font-semibold tracking-wide text-gray-800 "}>
        JewelToolHub
      </div>
    </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>

        <div className="flex -mx-2">
          {[
            { href: '#', label: 'Reddit', hover: 'hover:text-amber-600' },
            { href: '#', label: 'Facebook', hover: 'hover:text-blue-600' },
            { href: '#', label: 'Github', hover: 'hover:text-gray-800' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              aria-label={item.label}
              className={`mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 ${item.hover}`}
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href={`#${item.label.toLowerCase()}`} />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      
    </footer>
  );
}
