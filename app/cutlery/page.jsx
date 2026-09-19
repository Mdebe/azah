"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
FaArrowRight,
FaMapMarkerAlt,
FaWhatsapp,
FaUtensils,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
"https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

const products = [
{
name: "Cutlery & Tableware",
image: "/images/cutlery/cutlery-hero.jpg",
description:
"Everyday cutlery and tableware for kitchens, dining spaces and households.",
},
{
name: "Glassware",
image: "/images/products/glassware.jpg",
description:
"A selection of practical glassware for everyday use and entertaining.",
},
{
name: "3 Plate Light Duty Gas Stove",
image: "/images/products/gas.jpg",
description:
"Includes regulator & pipe ,Ideal for restaurants and catering.",
},
{
name: "Tea, Sugar & Coffee Sets",
image: "/images/products/tea-sugar-coffee.jpg",
description:
"Organise your kitchen counter with convenient tea, sugar and coffee sets.",
},
{
name: "Food Warmers",
image: "/images/products/food-warmer.jpg",
description:
"Useful food-serving essentials for homes, gatherings and everyday meals.",
},
];

export default function CutleryPage() {
return ( <main className="bg-white text-[#1c1c1c]">
{/* HERO */} <section className="relative overflow-hidden bg-[#0b1f3b]"> <div className="absolute inset-0 opacity-20"> <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#f4b400]" /> <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#18a999]" /> </div>

```
    <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            <FaUtensils className="text-[#f4b400]" />
            Azah Home
          </div>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Cutlery, Tableware
            <span className="block text-[#f4b400]">
              & Kitchen Essentials
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Discover practical home, kitchen and dining essentials at
            Azah Trading in Port Shepstone. Visit us in-store to explore
            our latest collection.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#0b1f3b] transition hover:scale-[1.02]"
            >
              <FaMapMarkerAlt />
              Visit Our Store
            </Link>

            <a
              href="https://wa.me/27641656426?text=Hello%20Azah%20Trading!%20I%20would%20like%20to%20enquire%20about%20your%20cutlery%20and%20home%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/15"
            >
              <FaWhatsapp className="text-[#25d366]" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[460px]">
              <Image
                src="/images/cutlery/cutlery-hero.jpg"
                alt="Cutlery and tableware at Azah Trading"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* INTRO */}
  <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18a999]">
        Explore Azah Home
      </span>

      <h2 className="mt-3 text-3xl font-black text-[#0b1f3b] sm:text-4xl">
        Practical products for everyday living
      </h2>

      <p className="mt-5 leading-7 text-gray-600">
        From dining essentials to useful kitchen and household items,
        Azah Trading brings together products designed for everyday homes.
        Our collection is available to explore at our physical store in
        Port Shepstone.
      </p>
    </div>

    {/* PRODUCT GRID */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <motion.article
          key={product.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative h-64 overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={`${product.name} at Azah Trading`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-black text-[#0b1f3b]">
              {product.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {product.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>

  {/* MORE PRODUCTS */}
  <section className="bg-[#f5f7fa]">
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          "Pedal Bins",
          "Kettles",
          "Bread Tins",
          "Laundry Baskets",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="mb-4 h-1 w-10 rounded-full bg-[#f4b400]" />
            <h3 className="font-black text-[#0b1f3b]">{item}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Available to explore in-store at Azah Trading.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* STORE CTA */}
  <section className="bg-[#0b1f3b]">
    <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-20">
      <h2 className="text-3xl font-black text-white sm:text-4xl">
        Visit Azah Home
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
        Come and browse our home, kitchen and tableware collection at
        Shop No. 11, Spink Building, Port Shepstone.
      </p>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-7 py-3.5 font-bold text-[#0b1f3b]"
        >
          <FaMapMarkerAlt />
          Get Directions
          <FaArrowRight />
        </Link>

        <Link
          href="/jackets"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
        >
          Explore Jackets
          <FaArrowRight />
        </Link>
      </div>
    </div>
  </section>
</main>


);
}
