
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Cutlery", href: "/cutlery" },
    { label: "Jackets", href: "/jackets" },
    { label: "About Us", href: "/about" },
    { label: "Visit Us", href: "/contact" },
  ];

  const whatsappNumber = "27641656426";

  const whatsappMessage =
    "Hello Azah Trading! I would like to enquire about your products and store.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* FIXED HEADER */}
      <header
        className={`fixed left-0 right-0 top-0 z-[100] w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-black/10 bg-white shadow-lg backdrop-blur-xl"
            : "border-black/5 bg-white shadow-sm"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "h-[72px]" : "h-[88px]"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className={`flex shrink-0 items-center transition-all duration-300 ${
              scrolled ? "w-[170px]" : "w-[190px]"
            }`}
            aria-label="Azah Trading Home"
          >
            <div
              className={`relative transition-all duration-300 ${
                scrolled
                  ? "h-[64px] w-[160px]"
                  : "h-[78px] w-[180px]"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Azah Trading"
                fill
                sizes="180px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden flex-1 items-center justify-center md:flex"
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-6 lg:gap-9">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative whitespace-nowrap py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-[#0B1F3B]"
                        : "text-[#555] hover:text-[#0B1F3B]"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] rounded-full bg-[#F4B400]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* DESKTOP WHATSAPP */}
          <div className="hidden w-[160px] shrink-0 justify-end md:flex">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 rounded-full font-bold text-white transition-all duration-300 ${
                scrolled
                  ? "px-4 py-2.5 text-xs"
                  : "px-5 py-3 text-xs"
              } bg-[#0B1F3B] hover:bg-[#25D366]`}
            >
              <FaWhatsapp size={17} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F3B]/5 text-[#0B1F3B] transition hover:bg-[#F4B400]/30"
              aria-label="Toggle menu"
              aria-expanded={open}
              type="button"
            >
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[99] md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div
            className={`absolute left-0 right-0 overflow-y-auto border-t border-black/5 bg-white shadow-2xl ${
              scrolled
                ? "top-[72px] max-h-[calc(100vh-72px)]"
                : "top-[88px] max-h-[calc(100vh-88px)]"
            }`}
          >
            <nav className="px-5 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-black/5 px-3 py-4 text-sm font-semibold ${
                      isActive
                        ? "text-[#0B1F3B]"
                        : "text-[#444] hover:text-[#0B1F3B]"
                    }`}
                  >
                    <span>{item.label}</span>

                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#F4B400]" />
                    )}
                  </Link>
                );
              })}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3B] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#25D366]"
              >
                <FaWhatsapp size={17} />
                WhatsApp Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

