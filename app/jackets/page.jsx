"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
FaArrowRight,
FaMapMarkerAlt,
FaWhatsapp,
FaTshirt,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
"https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

const jackets = [
{
name: "Jackets & Outerwear",
image: "/images/jackets/jackets-hero.jpg",
description:
"Explore our collection of jackets and outerwear available upstairs at Azah Trading.",
},
{
name: "Everyday Jackets",
image: "/images/jackets/jacket.jpg",
description:
"Practical outerwear for everyday wear, available to browse in-store.",
},
{
name: "Seasonal Outerwear",
image: "/images/jackets/je.webp",
description:
"Visit the jacket section to see the latest styles and available selections.",
},
];

export default function JacketsPage() {
return ( <main className="bg-white text-[#1c1c1c]">
{/* HERO */} <section className="relative overflow-hidden bg-[#1c1c1c]"> <div className="absolute inset-0"> <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#0b1f3b] opacity-70" /> <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#f4b400] opacity-10" /> </div>

```
    <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
            <FaTshirt className="text-[#f4b400]" />
            Azah Jacket Shop
          </div>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Jackets
            <span className="block text-[#f4b400]">
              & Outerwear
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Explore the jacket collection upstairs at Azah Trading in
            Port Shepstone. Visit our store and browse the available
            styles in person.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#1c1c1c]"
            >
              <FaMapMarkerAlt />
              Visit Us
            </Link>

            <a
              href="https://wa.me/27641656426?text=Hello%20Azah%20Trading!%20I%20would%20like%20to%20enquire%20about%20the%20jackets%20and%20outerwear."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white"
            >
              <FaWhatsapp className="text-[#25d366]" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
            <div className="relative h-[430px] overflow-hidden rounded-2xl sm:h-[560px]">
              <Image
                src="/images/jackets/jackets-hero.jpg"
                alt="Jackets and outerwear at Azah Trading"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#f4b400] px-5 py-4 shadow-xl sm:left-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c]">
              Upstairs
            </p>
            <p className="mt-1 font-black text-[#1c1c1c]">
              Azah Jacket Shop
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* COLLECTION */}
  <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="max-w-3xl">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18a999]">
        Explore the Collection
      </span>

      <h2 className="mt-3 text-3xl font-black text-[#0b1f3b] sm:text-4xl">
        Find your next jacket in-store
      </h2>

      <p className="mt-5 leading-7 text-gray-600">
        Our upstairs jacket section gives shoppers the opportunity to
        see and choose from the available outerwear collection at Azah
        Trading.
      </p>
    </div>

    <div className="mt-12 grid gap-7 md:grid-cols-3">
      {jackets.map((item, index) => (
        <motion.article
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="group overflow-hidden rounded-2xl bg-[#f5f7fa]"
        >
          <div className="relative h-80 overflow-hidden bg-gray-200">
            <Image
              src={item.image}
              alt={`${item.name} at Azah Trading`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-black text-[#0b1f3b]">
              {item.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {item.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>

  {/* TWO FLOOR STORE */}
  <section className="bg-[#f5f7fa]">
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-[#0b1f3b] p-8 text-white sm:p-10">
          <span className="text-sm font-bold uppercase tracking-widest text-[#f4b400]">
            Downstairs
          </span>

          <h3 className="mt-3 text-2xl font-black">
            Azah Home
          </h3>

          <p className="mt-4 leading-7 text-white/70">
            Discover cutlery, tableware, kitchen essentials and useful
            household products.
          </p>

          <Link
            href="/cutlery"
            className="mt-6 inline-flex items-center gap-2 font-bold text-[#f4b400]"
          >
            Explore Azah Home
            <FaArrowRight />
          </Link>
        </div>

        <div className="rounded-3xl bg-[#f4b400] p-8 text-[#0b1f3b] sm:p-10">
          <span className="text-sm font-bold uppercase tracking-widest">
            Upstairs
          </span>

          <h3 className="mt-3 text-2xl font-black">
            Azah Jacket Shop
          </h3>

          <p className="mt-4 leading-7 text-[#0b1f3b]/70">
            Browse jackets and outerwear available at our Port Shepstone
            store.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-[#0b1f3b]">
    <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
      <h2 className="text-3xl font-black text-white sm:text-4xl">
        Come see the collection
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
        Visit Azah Trading at Shop No. 11, Spink Building, 38 Wooley
        Street, Port Shepstone.
      </p>

      <Link
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#f4b400] px-7 py-3.5 font-bold text-[#0b1f3b]"
      >
        <FaMapMarkerAlt />
        Get Directions
        <FaArrowRight />
      </Link>
    </div>
  </section>
</main>


);
}
