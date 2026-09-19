
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

const products = [
  {
    id: 1,
    category: "Home & Kitchen",
    title: "Pedal Bins",
    description:
      "Practical household essentials designed to keep your home organised and tidy.",
    image: "/images/products/pedal-bin.jpg",
    link: "/products",
  },
  {
    id: 2,
    category: "Kitchen",
    title: "Kettles",
    description:
      "Browse our selection of kettles and everyday kitchen essentials available in-store.",
    image: "/images/products/kettle.jpg",
    link: "/products",
  },
  {
    id: 3,
    category: "Gas Stove",
    title: "3 Plate Light Duty Gas Stove",
    description:
      "Includes regulator and pipe, ideal for restaurants and catering.",
    image: "/images/products/gas.jpg",
    link: "/cutlery",
  },
  {
    id: 4,
    category: "Kitchen",
    title: "Tea, Sugar & Coffee Sets",
    description:
      "Convenient three-piece sets for your everyday kitchen essentials.",
    image: "/images/products/tea-sugar-coffee.jpg",
    link: "/cutlery",
  },
  {
    id: 5,
    category: "Glassware",
    title: "Glassware",
    description:
      "Explore our glassware collection for everyday use and entertaining.",
    image: "/images/products/glassware.jpg",
    link: "/cutlery",
  },
  {
    id: 6,
    category: "Kitchen",
    title: "Bread Tins",
    description:
      "Useful kitchen storage essentials for keeping your bread fresh and organised.",
    image: "/images/products/bread-tin.jpg",
    link: "/products",
  },
  {
    id: 7,
    category: "Home",
    title: "Curtains",
    description:
      "Refresh your living spaces with a selection of curtains available in-store.",
    image: "/images/products/curtains.jpg",
    link: "/products",
  },
  {
    id: 8,
    category: "Home",
    title: "Food Warmers",
    description:
      "Practical serving and food-warming solutions for home and entertaining.",
    image: "/images/products/food-warmer.jpg",
    link: "/products",
  },
  {
    id: 9,
    category: "Laundry",
    title: "Laundry Baskets",
    description:
      "Keep laundry organised with practical baskets and household storage solutions.",
    image: "/images/products/laundry-basket.jpg",
    link: "/products",
  },
  {
    id: 10,
    category: "Jackets",
    title: "Jackets & Outerwear",
    description:
      "Discover our upstairs collection of jackets and outerwear available to explore in-store.",
    image: "/images/jackets/jackets-hero.jpg",
    link: "/jackets",
  },
];

export default function Products() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = products.length;
  const product = products[current];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);

      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  const nextSlide = () => {
    setDirection(1);

    setCurrent((prev) => (prev + 1) % total);
  };

  const previousSlide = () => {
    setDirection(-1);

    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index) => {
    if (index === current) return;

    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F7F8FA] py-20 sm:py-24 md:py-32"
    >
      {/* =================================
          DECORATIVE BACKGROUND
      ================================== */}

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#F4B400]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#0B1F3B]/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4B400]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =================================
            HEADER
        ================================== */}

        <motion.div
          className="mb-12 grid items-center gap-8 sm:mb-14 md:grid-cols-[1fr_auto] md:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Header text */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F4B400]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0B1F3B] sm:text-xs">
                Explore Azah Trading
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0B1F3B] sm:text-5xl md:text-6xl">
              Our{" "}
              <span className="text-[#F4B400]">
                Collections
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Discover a selection of products available at Azah Trading,
              from kitchen and household essentials downstairs to jackets
              and outerwear upstairs.
            </p>
          </div>

          {/* Logo */}
          <div className="relative flex justify-start md:justify-end">
            <div className="absolute -inset-4 rounded-full bg-[#F4B400]/10 blur-2xl" />

            <div className="relative flex h-28 w-56 items-center justify-center rounded-2xl border border-[#0B1F3B]/10 bg-white px-6 shadow-lg sm:h-32 sm:w-64">
              <Image
                src="/logo.png"
                alt="Azah Trading"
                width={260}
                height={140}
                className="h-auto max-h-24 w-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* =================================
            PRODUCT SLIDER
        ================================== */}

        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#0B1F3B]/10 bg-white shadow-2xl sm:rounded-[2rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 80 : -80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -80 : 80,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="grid lg:grid-cols-2"
              >
                {/* =================================
                    PRODUCT IMAGE
                ================================== */}

                <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden bg-[#E9EDF2] sm:min-h-[430px] lg:min-h-[560px]">
                  <Image
                    src={product.image}
                    alt={`${product.title} at Azah Trading`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority={current === 0}
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/80 via-[#0B1F3B]/5 to-transparent" />

                  {/* Category */}
                  <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                    <span className="rounded-full border border-white/20 bg-white/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B1F3B] shadow-lg backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                      {product.category}
                    </span>
                  </div>

                  {/* Slide Number */}
                  <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                    <p className="text-xs font-bold text-white/80 sm:text-sm">
                      {String(current + 1).padStart(2, "0")}{" "}
                      <span className="text-[#F4B400]">/</span>{" "}
                      {String(total).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Gold corner accent */}
                  <div className="absolute bottom-0 right-0 h-20 w-20 overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#F4B400]" />
                  </div>
                </div>

                {/* =================================
                    PRODUCT DETAILS
                ================================== */}

                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-7 bg-[#F4B400]" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0B1F3B]/60 sm:text-xs">
                      Azah Home
                    </p>
                  </div>

                  <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1F3B] sm:text-4xl md:text-5xl">
                    {product.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-base leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8">
                    {product.description}
                  </p>

                  {/* Store availability */}
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F3B] text-[#F4B400]">
                      <FaMapMarkerAlt size={12} />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        Available In-Store
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-[#0B1F3B]">
                        Port Shepstone
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                    <Link
                      href={product.link}
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F3B] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#F4B400] hover:text-[#0B1F3B]"
                    >
                      Explore Collection

                      <FaArrowRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B1F3B]/15 px-6 py-3.5 text-sm font-bold text-[#0B1F3B] transition-all duration-300 hover:border-[#F4B400] hover:bg-[#F4B400]"
                    >
                      <FaMapMarkerAlt size={12} />
                      Visit Store
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =================================
                PREVIOUS BUTTON
            ================================== */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous product"
              className="absolute left-3 top-[165px] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B1F3B] shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[#F4B400] sm:left-5 sm:top-1/2 sm:h-11 sm:w-11"
            >
              <FaChevronLeft size={12} />
            </button>

            {/* =================================
                NEXT BUTTON
            ================================== */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next product"
              className="absolute right-3 top-[165px] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B1F3B] shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[#F4B400] sm:right-5 sm:top-1/2 sm:h-11 sm:w-11"
            >
              <FaChevronRight size={12} />
            </button>
          </div>

          {/* =================================
              DOT NAVIGATION
          ================================== */}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 px-4 sm:mt-7">
            {products.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`View ${item.title}`}
                aria-current={
                  index === current ? "true" : undefined
                }
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-9 bg-[#0B1F3B] sm:w-10"
                    : "w-3 bg-[#0B1F3B]/20 hover:bg-[#F4B400] sm:w-5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* =================================
            COLLECTION LINKS
        ================================== */}

        <motion.div
          className="mt-14 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* CUTLERY */}
          <Link
            href="/cutlery"
            className="group relative overflow-hidden rounded-[1.5rem] bg-[#0B1F3B] p-6 text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
          >
            {/* Gold glow */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F4B400]/10 blur-2xl transition-all duration-500 group-hover:bg-[#F4B400]/20" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#F4B400]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 sm:text-xs">
                  Downstairs
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Cutlery & Tableware
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                Discover dining essentials, kitchenware, glassware and
                more available in-store.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F4B400] sm:mt-6">
                Explore downstairs

                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full border border-[#F4B400]/20 transition-transform duration-500 group-hover:scale-110" />

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* JACKETS */}
          <Link
            href="/jackets"
            className="group relative overflow-hidden rounded-[1.5rem] bg-white p-6 text-[#0B1F3B] shadow-xl ring-1 ring-[#0B1F3B]/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
          >
            {/* Gold glow */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F4B400]/10 blur-2xl transition-all duration-500 group-hover:bg-[#F4B400]/20" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#F4B400]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B1F3B]/45 sm:text-xs">
                  Upstairs
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Jackets & Outerwear
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#0B1F3B]/60">
                Explore our upstairs collection of jackets and outerwear
                available to browse in-store.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3B] sm:mt-6">
                Explore upstairs

                <FaArrowRight
                  size={11}
                  className="text-[#F4B400] transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full border border-[#0B1F3B]/10 transition-transform duration-500 group-hover:scale-110" />

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

