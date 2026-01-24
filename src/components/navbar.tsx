"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLinkActive = (href: string) => router.pathname === href;

  return (
    <nav className="w-full flex items-center justify-between p-5 text-Chocolate relative">
      {/* Logo */}
      <Link href="/">
        <Image
          className="hover:scale-110 transition-transform"
          src="/LogoMark300ppi.png"
          width={150}
          height={150}
          alt="Logo"
        />
      </Link>

      {/* Hamburger Button (mobile only) */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={38} /> : <Menu size={48} />}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg flex flex-col py-2 z-50">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 text-2xl hover:bg-gray-100 ${
                isLinkActive("/") ? "font-extrabold" : "font-medium"
              }`}
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 text-2xl hover:bg-gray-100 ${
                isLinkActive("/aboutUs") ? "font-extrabold" : "font-medium"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 text-2xl hover:bg-gray-100 ${
                isLinkActive("/courses") ? "font-extrabold" : "font-medium"
              }`}
            >
              Courses
            </Link>
            <Link
              href="/consulting"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 text-2xl hover:bg-gray-100 ${
                isLinkActive("/consulting") ? "font-extrabold" : "font-medium"
              }`}
            >
              Consulting
            </Link>
 
          </div>
        )}
      </div>

     
    </nav>
  );
}