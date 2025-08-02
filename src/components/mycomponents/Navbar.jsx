'use client';

import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Link style based on active page
  const linkClass = (path) =>
    pathname === path
      ? "font-medium text-yellow-500 dark:text-yellow-500"
      : "font-medium text-black hover:text-gray-500 dark:text-neutral-300 dark:hover:text-neutral-400";

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm pt-3 border-b border-gray-200 dark:bg-neutral-900">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link
            href="/"
            className="flex-none text-xl font-semibold focus:outline-hidden focus:opacity-80"
            aria-label="Brand"
            onClick={() => setIsOpen(false)} // Logo click pe bhi close
          >
            <span className="inline-flex items-center gap-x-2 text-xl font-bold">
              <Image
                src="/Logobhai.png"
                alt="Brand Logo"
                width={55}
                height={55}
                className="rounded-md"
              />
              <span className="text-black dark:text-white">
                JewelToolHub
              </span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-300 bg-white text-black shadow-sm hover:bg-gray-50 focus:outline-hidden dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
            >
              {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} sm:block`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/goldsmith-tools" className={linkClass("/goldsmith-tools")} onClick={() => setIsOpen(false)}>Tools</Link>
            <Link href="/jewellery-boxes" className={linkClass("/jewellery-boxes")} onClick={() => setIsOpen(false)}>Jewellery Boxes</Link>
            <Link href="/contact" className={linkClass("/contact")} onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
