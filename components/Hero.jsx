
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronDown,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

const slides = [
  {
    image: "/images/shop/heo.jpg",
    mobileImage: "/images/shop/heo.jpg",
    eyebrow: "Welcome to Azah Trading",
    title: "One Store.",
    highlight: "Two Collections.",
    description:
      "Discover our cutlery collection downstairs and our jackets collection upstairs, all in one convenient store.",
  },
  {
    image: "/images/cutlery/cutlery-hero.jpg",
    mobileImage: "/images/cutlery/cutlery-hero.jpg",
    eyebrow: "Downstairs",
    title: "Cutlery &",
    highlight: "Tableware",
    description:
      "Explore our selection of cutlery, tableware and kitchen essentials available in-store.",
  },
  {
    image: "/images/jackets/jackets-hero.jpg",
    mobileImage: "/images/jackets/jackets-hero.jpg",
    eyebrow: "Upstairs",
    title: "Jackets &",
    highlight: "Outerwear",
    description:
      "Discover our collection of jackets and outerwear available to explore in-store.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diff =
      e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        setCurrent((prev) => (prev + 1) % slides.length);
      } else {
        setCurrent(
          (prev) =>
            (prev - 1 + slides.length) % slides.length
        );
      }
    }

    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[calc(100svh-80px)] w-full overflow-hidden sm:min-h-[calc(100vh-80px)]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* =====================================================
          BACKGROUND SLIDES
      ====================================================== */}

      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {/* Desktop Image */}
          <div className="absolute inset-0 hidden sm:block">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>

          {/* Mobile Image */}
          <div className="absolute inset-0 block sm:hidden">
            <Image
              src={item.mobileImage}
              alt={item.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </div>
      ))}

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl items-end px-4 pb-14 pt-24 sm:min-h-[calc(100vh-80px)] sm:px-8 sm:pb-20 lg:px-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-8 bg-white sm:w-10" />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 sm:text-xs sm:tracking-[0.28em]">
              {slide.eyebrow}
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {slide.title}

            <br />

            <span className="text-white/75">
              {slide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-7">
            {slide.description}
          </p>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:gap-3">

            {/* Cutlery */}
            <Link
              href="/cutlery"
              className="group inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-[0.98] sm:min-h-12 sm:w-auto sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
            >
              Explore Cutlery

              <FaArrowRight
                size={10}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:h-3 sm:w-3"
              />
            </Link>

            {/* Jackets */}
            <Link
              href="/jackets"
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-[0.98] sm:min-h-12 sm:w-auto sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
            >
              Explore Jackets
            </Link>

            {/* Google Maps */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-[0.98] sm:min-h-12 sm:w-auto sm:px-7 sm:py-4 sm:text-sm"
            >
              <FaMapMarkerAlt className="h-3 w-3 sm:h-[13px] sm:w-[13px]" />

              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          SLIDE COUNTER
      ====================================================== */}

      <div className="absolute bottom-10 right-8 z-20 hidden text-right lg:block">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
          Azah Trading
        </p>

        <p className="mt-1 text-sm text-white/80">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </p>
      </div>

      {/* =====================================================
          SLIDE DOTS
      ====================================================== */}

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 sm:bottom-8 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === current
                ? "w-8 bg-white sm:w-10"
                : "w-4 bg-white/40 hover:bg-white/70 sm:w-6"
            }`}
          />
        ))}
      </div>

      {/* =====================================================
          EXPLORE INDICATOR
      ====================================================== */}

      <div className="absolute bottom-7 left-7 z-20 hidden items-center gap-3 text-white/60 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Explore
        </span>

        <FaChevronDown
          size={10}
          className="animate-bounce"
        />
      </div>

   

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-black" />
    </section>
  );
}