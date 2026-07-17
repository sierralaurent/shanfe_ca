"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const isLinkActive = (href: string) => router.pathname === href;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkScreen();

  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);

  return (
    <nav className="w-full flex items-center justify-between p-5 mobile:p-3 text-Chocolate relative">
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

      {/* Navigation */}
      <div
        ref={menuRef}
        className="flex items-center gap-10 mobile:gap-3 text-xl mobile:text-lg font-medium"
      >
        {/* Aerospace */}
        <div
            className="relative"
            onMouseEnter={() => {
              if (!isMobile) setOpenMenu("aerospace");
            }}
          >
            {isMobile ? (
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "aerospace" ? null : "aerospace")
                }
                className="hover:font-bold transition-all"
              >
                Aerospace
              </button>
            ) : (
              <Link href="/aerospace/aerospaceandhypobaricshome">
                <button className="hover:font-bold transition-all">
                  Aerospace
                </button>
              </Link>
            )}

          {openMenu === "aerospace" && (
            <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg flex flex-col py-2 z-50">
              <Link
                href="/aerospace/aerospaceandhypobaricshome"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/aerospaceandhypobaricshome") ? "font-extrabold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/aerospace/aerospaceaboutus"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/aboutUs") ? "font-extrabold" : ""
                }`}
              >
                About Us
              </Link>

              <Link
                href="/aerospace/aerospacecourses"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/courses") ? "font-extrabold" : ""
                }`}
              >
                Courses
              </Link>

              <Link
                href="/aerospace/aerospaceaudits"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/audits") ? "font-extrabold" : ""
                }`}
              >
                Audits
              </Link>
            </div>
          )}
        </div>

        {/* Diving */}
        <div
          className="relative"
          onMouseEnter={() => {
            if (!isMobile) setOpenMenu("diving");
          }}
        >
          {isMobile ? (
            <button
              onClick={() =>
                setOpenMenu(openMenu === "diving" ? null : "diving")
              }
              className="hover:font-bold transition-all"
            >
              Diving & Hyperbarics
            </button>
          ) : (
            <Link href="/diving/divingandhyperbaricshome">
              <button className="hover:font-bold transition-all">
                Diving & Hyperbarics
              </button>
            </Link>
          )}

          {openMenu === "diving" && (
            <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg flex flex-col py-2 z-50">
              <Link
                href="/diving/divingandhyperbaricshome"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/diving/divingandhyperbaricshome") ? "font-extrabold" : ""
                }`}
              >
                Home
              </Link>

              <Link
                href="/diving/aboutUs"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/diving/aboutUs") ? "font-extrabold" : ""
                }`}
              >
                About Us
              </Link>

              <Link
                href="/diving/courses"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/diving/courses") ? "font-extrabold" : ""
                }`}
              >
                Courses
              </Link>

              <Link
                href="/diving/audits"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/diving/audits") ? "font-extrabold" : ""
                }`}
              >
                Audits
              </Link>

              <Link
                href="/diving/consulting"
                onClick={() => setOpenMenu(null)}
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isLinkActive("/diving/consulting") ? "font-extrabold" : ""
                }`}
              >
                Consulting
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}