
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaStore,
  FaUtensils,
  FaTshirt,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32"
    >
      {/* =================================
          DECORATIVE BACKGROUND
      ================================== */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F4B400]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#0B1F3B]/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F4B400]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =================================
            SECTION HEADER
        ================================== */}
        <motion.div
          className="mb-14 grid items-center gap-10 lg:mb-20 lg:grid-cols-[1fr_0.65fr] lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Text */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F4B400]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0B1F3B] sm:text-xs">
                About Azah Trading
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-tight text-[#0B1F3B] sm:text-5xl md:text-6xl lg:text-7xl">
              One store.
              <br />
              <span className="text-[#F4B400]">
                Two collections.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Discover everyday home essentials downstairs and jackets and
              outerwear upstairs, all under one roof in the heart of Port
              Shepstone.
            </p>
          </div>

          {/* =================================
              LARGE LOGO
          ================================== */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Gold decorative circle */}
            <div className="absolute right-4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#F4B400]/10 blur-2xl sm:h-64 sm:w-64" />

            {/* Logo card */}
            <div className="relative flex h-[190px] w-full max-w-[390px] items-center justify-center rounded-[2rem] border border-[#0B1F3B]/10 bg-white p-8 shadow-xl sm:h-[220px] sm:p-10 lg:h-[250px]">
              {/* Gold corner accent */}
              <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden rounded-tr-[2rem]">
                <div className="absolute right-[-35px] top-[-35px] h-24 w-24 rounded-full bg-[#F4B400]" />
              </div>

              {/* Logo */}
              <div className="relative h-[125px] w-[260px] sm:h-[150px] sm:w-[320px]">
                <Image
                  src="/logo.png"
                  alt="Azah Trading logo"
                  fill
                  sizes="320px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0B1F3B]/50">
                  Azah Home & Jacket Shop
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================
            MAIN LAYOUT
        ================================== */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-28">
          {/* =================================
              LEFT — IMAGE SHOWCASE
          ================================== */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* =================================
                DESKTOP IMAGE COMPOSITION
            ================================== */}
            <div className="relative hidden min-h-[680px] lg:block">
              {/* Main store image */}
              <div className="absolute left-1/2 top-0 h-[500px] w-[78%] -translate-x-1/2 overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl">
                <Image
                  src="/images/shop/hero.jpg"
                  alt="Azah Trading store in Port Shepstone"
                  fill
                  sizes="(min-width: 1280px) 48vw, 55vw"
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/80 via-[#0B1F3B]/5 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B1F3B] shadow-lg">
                      <FaStore size={14} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                        Azah Trading
                      </p>

                      <p className="mt-1 text-xl font-bold text-white">
                        Port Shepstone
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Downstairs */}
              <div className="absolute bottom-5 left-0 z-20 h-[270px] w-[48%] overflow-hidden rounded-[1.75rem] border-[8px] border-white bg-gray-100 shadow-2xl">
                <Image
                  src="/images/cutlery/cutlery-hero.jpg"
                  alt="Cutlery and tableware downstairs at Azah Trading"
                  fill
                  sizes="24vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B1F3B]">
                    <FaUtensils size={13} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                    Downstairs
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Cutlery & Tableware
                  </p>
                </div>
              </div>

              {/* Upstairs */}
              <div className="absolute bottom-0 right-0 z-30 h-[270px] w-[48%] overflow-hidden rounded-[1.75rem] border-[8px] border-white bg-gray-100 shadow-2xl">
                <Image
                  src="/images/jackets/jackets-hero.jpg"
                  alt="Jackets and outerwear upstairs at Azah Trading"
                  fill
                  sizes="24vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B1F3B]">
                    <FaTshirt size={13} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                    Upstairs
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Jackets & Outerwear
                  </p>
                </div>
              </div>

              {/* Gold decorative circle */}
              <div className="absolute left-[8%] top-[40%] z-10 h-20 w-20 rounded-full bg-[#F4B400] shadow-lg" />

              {/* Decorative number */}
              <div className="absolute right-[1%] top-[30%] z-40 flex h-16 w-16 items-center justify-center rounded-full border border-[#F4B400]/40 bg-white shadow-xl">
                <span className="text-xs font-extrabold tracking-widest text-[#0B1F3B]">
                  02
                </span>
              </div>
            </div>

            {/* =================================
                MOBILE / TABLET
            ================================== */}
            <div className="lg:hidden">
              {/* Main store image */}
              <div className="relative h-[360px] overflow-hidden rounded-[1.75rem] bg-gray-100 shadow-xl sm:h-[460px]">
                <Image
                  src="/images/shop/hero.jpg"
                  alt="Azah Trading store in Port Shepstone"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/85 via-[#0B1F3B]/5 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B1F3B] shadow-lg">
                      <FaStore size={14} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                        Azah Trading
                      </p>

                      <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
                        Port Shepstone
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two collection images */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5">
                {/* Downstairs */}
                <div className="relative h-[210px] overflow-hidden rounded-[1.25rem] bg-gray-100 shadow-lg sm:h-[280px] sm:rounded-[1.5rem]">
                  <Image
                    src="/images/cutlery/cutlery-hero.jpg"
                    alt="Cutlery and tableware downstairs at Azah Trading"
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/90 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-3 sm:bottom-5 sm:left-5">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1F3B]">
                      <FaUtensils size={11} />
                    </div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
                      Downstairs
                    </p>

                    <p className="mt-1 text-sm font-bold leading-tight text-white sm:text-lg">
                      Cutlery & Tableware
                    </p>
                  </div>
                </div>

                {/* Upstairs */}
                <div className="relative h-[210px] overflow-hidden rounded-[1.25rem] bg-gray-100 shadow-lg sm:h-[280px] sm:rounded-[1.5rem]">
                  <Image
                    src="/images/jackets/jackets-hero.jpg"
                    alt="Jackets and outerwear upstairs at Azah Trading"
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/90 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-3 sm:bottom-5 sm:left-5">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1F3B]">
                      <FaTshirt size={11} />
                    </div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
                      Upstairs
                    </p>

                    <p className="mt-1 text-sm font-bold leading-tight text-white sm:text-lg">
                      Jackets & Outerwear
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile decorative line */}
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#0B1F3B]/10" />

                <span className="h-2 w-2 rounded-full bg-[#F4B400]" />

                <span className="h-px flex-1 bg-[#0B1F3B]/10" />
              </div>
            </div>
          </motion.div>

          {/* =================================
              RIGHT — DETAILS
          ================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Intro */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#F4B400]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B1F3B]/60">
                  About the Store
                </span>
              </div>

              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Azah Trading is a physical retail store in{" "}
                <span className="font-bold text-[#0B1F3B]">
                  Port Shepstone, KwaZulu-Natal
                </span>
                , bringing together two distinct collections under one roof.
              </p>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Whether you're looking for everyday dining essentials or
                something to complete your wardrobe, our two-floor store gives
                you the opportunity to browse and discover our collections
                in person.
              </p>
            </div>

            {/* =================================
                COLLECTION DETAILS
            ================================== */}
            <div className="mt-10 space-y-5">
              {/* Downstairs */}
              <div className="group rounded-2xl border border-[#0B1F3B]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B400]/50 hover:shadow-xl sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F4B400]">
                        01
                      </span>

                      <span className="h-px w-6 bg-[#F4B400]/50" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1F3B]/40">
                        Downstairs
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-extrabold text-[#0B1F3B] sm:text-2xl">
                      Cutlery & Tableware
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                      Explore our downstairs collection of cutlery, tableware
                      and dining essentials available in-store.
                    </p>
                  </div>

                  <Link
                    href="/cutlery"
                    aria-label="Explore cutlery and tableware"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3B] text-white transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#0B1F3B]"
                  >
                    <FaArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Upstairs */}
              <div className="group rounded-2xl border border-[#0B1F3B]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B400]/50 hover:shadow-xl sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F4B400]">
                        02
                      </span>

                      <span className="h-px w-6 bg-[#F4B400]/50" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1F3B]/40">
                        Upstairs
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-extrabold text-[#0B1F3B] sm:text-2xl">
                      Jackets & Outerwear
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                      Head upstairs to discover our selection of jackets and
                      outerwear available to explore in-store.
                    </p>
                  </div>

                  <Link
                    href="/jackets"
                    aria-label="Explore jackets and outerwear"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3B] text-white transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#0B1F3B]"
                  >
                    <FaArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            {/* =================================
                LOCATION STRIP
            ================================== */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-between gap-4 rounded-2xl bg-[#0B1F3B] px-5 py-4 text-white transition-all duration-300 hover:bg-[#102b52] sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4B400] text-[#0B1F3B]">
                  <FaStore size={14} />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Find Us
                  </p>

                  <p className="mt-0.5 text-sm font-semibold">
                    Spink Building · 38 Wooley Street
                  </p>
                </div>
              </div>

              <FaArrowRight
                size={13}
                className="shrink-0 text-[#F4B400]"
              />
            </a>

            {/* =================================
                BOTTOM CTA
            ================================== */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F3B] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#F4B400] hover:text-[#0B1F3B]"
              >
                More About Azah
                <FaArrowRight size={12} />
              </Link>

              <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-[#0B1F3B]/40 sm:block">
                Shop in-store
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

