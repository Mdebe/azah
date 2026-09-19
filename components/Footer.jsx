
"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const phoneNumbers = {
    primary: "27641656426",
    secondary: "27615418189",
  };

  const whatsappMessage =
    "Hello Azah Trading! I would like to enquire about your products and store.";

  const googleMapsUrl =
    "https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

  const whatsappUrl = `https://wa.me/${
    phoneNumbers.primary
  }?text=${encodeURIComponent(whatsappMessage)}`;

  const instagramUrl = "#";
  const facebookUrl = "#";

  return (
    <footer className="relative overflow-hidden bg-[#0B1F3B] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F4B400]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#F4B400]/5 blur-3xl" />

      {/* Store CTA */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 md:flex-row lg:px-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-white/80">
              <span className="font-bold text-[#F4B400]">
                Visit Azah Trading.
              </span>{" "}
              Discover our collections in-store at Port Shepstone.
            </p>

            <p className="mt-1 text-xs text-white/50">
              Azah Home & Jacket Shop · Spink Building
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
            >
              <FaWhatsapp size={16} />
              WhatsApp Us
              <FaArrowRight className="opacity-60" size={10} />
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#F4B400]/40 hover:bg-white/10"
            >
              <FaMapMarkerAlt size={14} />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-8 pt-14 sm:grid-cols-2 md:grid-cols-12 lg:px-8">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-4">
          <Link href="/" className="inline-block">
            <h2 className="text-2xl font-extrabold tracking-tight">
              AZAH{" "}
              <span className="text-[#F4B400]">
                TRADING
              </span>
            </h2>

            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Azah Home & Jacket Shop
            </p>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
            Your local destination in Port Shepstone for kitchen and
            household essentials, cutlery, tableware, glassware,
            home items, jackets and outerwear.
          </p>

          {/* Social / Contact */}
          <div className="mt-6 flex gap-3">
            <a
              href={instagramUrl}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F4B400] hover:text-[#0B1F3B]"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href={facebookUrl}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F4B400] hover:text-[#0B1F3B]"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#25D366]"
            >
              <FaWhatsapp size={14} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B400]">
            Navigate
          </h4>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="text-white/65 transition hover:text-[#F4B400]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-white/65 transition hover:text-[#F4B400]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/cutlery"
                className="text-white/65 transition hover:text-[#F4B400]"
              >
                Cutlery
              </Link>
            </li>

            <li>
              <Link
                href="/jackets"
                className="text-white/65 transition hover:text-[#F4B400]"
              >
                Jackets
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-white/65 transition hover:text-[#F4B400]"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B400]">
            Our Collections
          </h4>

          <ul className="mt-5 space-y-3 text-sm text-white/55">
            <li className="transition hover:text-white">
              Cutlery & Tableware
            </li>

            <li className="transition hover:text-white">
              Kitchen Essentials
            </li>

            <li className="transition hover:text-white">
              Household Essentials
            </li>

            <li className="transition hover:text-white">
              Jackets & Outerwear
            </li>

            <li className="transition hover:text-white">
              Curtains & Home Items
            </li>
          </ul>
        </div>

        {/* Visit Us */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B400]">
            Visit Us
          </h4>

          <div className="mt-5 space-y-4 text-sm">
            {/* Address */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-2.5 text-white/65 transition hover:text-white"
            >
              <FaMapMarkerAlt
                className="mt-1 shrink-0 text-[#F4B400]"
              />

              <span>
                Shop No. 11
                <br />
                Spink Building
                <br />
                38 Wooley Street
                <br />
                Port Shepstone, 4240
              </span>
            </a>

            {/* Primary Phone */}
            <a
              href={`tel:+${phoneNumbers.primary}`}
              className="flex items-center gap-2.5 text-white/65 transition hover:text-white"
            >
              <FaPhoneAlt
                className="shrink-0 text-[#F4B400]"
                size={12}
              />

              064 165 6426
            </a>

            {/* Secondary Phone */}
            <a
              href={`tel:+${phoneNumbers.secondary}`}
              className="flex items-center gap-2.5 text-white/65 transition hover:text-white"
            >
              <FaPhoneAlt
                className="shrink-0 text-[#F4B400]"
                size={12}
              />

              061 541 8189
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/65 transition hover:text-white"
            >
              <FaWhatsapp
                className="shrink-0 text-[#25D366]"
              />

              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/40 md:flex-row lg:px-8">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Azah Trading. All rights reserved.
          </p>

          <p>
            Developed by{" "}
            <a
              href="https://www.amaphisi.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 underline underline-offset-4 transition hover:text-[#F4B400]"
            >
              Amaphisi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

