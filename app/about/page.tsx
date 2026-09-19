"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
FaArrowRight,
FaMapMarkerAlt,
FaWhatsapp,
FaStore,
FaUtensils,
FaTshirt,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
"https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

export default function AboutPage() {
return ( <main className="bg-white text-[#1c1c1c]">
{/* HERO */} <section className="bg-[#0b1f3b]"> <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24"> <div className="grid items-center gap-12 lg:grid-cols-2">
<motion.div
initial={{ opacity: 0, x: -25 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
> <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4b400]">
About Azah Trading </span>

```
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            One store.
            <span className="block text-[#f4b400]">
              Two collections.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Azah Trading is a physical retail store in Port Shepstone,
            bringing together practical home essentials and a dedicated
            jacket and outerwear collection under one roof.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#0b1f3b]"
            >
              <FaMapMarkerAlt />
              Find Our Store
            </Link>

            <a
              href="https://wa.me/27615418189?text=Hello%20Azah%20Trading!%20I%20would%20like%20to%20find%20out%20more%20about%20your%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white"
            >
              <FaWhatsapp className="text-[#25d366]" />
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative flex min-h-[300px] w-full max-w-[480px] items-center justify-center overflow-hidden rounded-3xl bg-white p-8 shadow-2xl sm:min-h-[400px]">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#f4b400]/20" />
            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#18a999]/15" />

            <Image
              src="/logo.png"
              alt="Azah Trading logo"
              width={460}
              height={300}
              priority
              className="relative z-10 h-auto w-full max-w-[390px] object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* STORY */}
  <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18a999]">
          Our Store
        </span>

        <h2 className="mt-3 text-3xl font-black text-[#0b1f3b] sm:text-4xl">
          A practical shopping destination in Port Shepstone
        </h2>

        <p className="mt-6 leading-8 text-gray-600">
          Azah Trading is designed around a simple idea: make it easier
          for customers to discover useful products in one convenient
          location.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          Downstairs, Azah Home focuses on cutlery, tableware, kitchen
          essentials and household items. Upstairs, the Azah Jacket Shop
          offers jackets and outerwear.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          Customers can visit the store, browse the available collection
          and speak directly with the team about products in-store.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-3xl bg-[#f5f7fa] p-7">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b1f3b] text-white">
            <FaStore />
          </div>

          <h3 className="mt-5 text-xl font-black text-[#0b1f3b]">
            Physical Store
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Visit us in person at the Spink Building on Wooley Street.
          </p>
        </div>

        <div className="rounded-3xl bg-[#f4b400] p-7">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b1f3b] text-white">
            <FaUtensils />
          </div>

          <h3 className="mt-5 text-xl font-black text-[#0b1f3b]">
            Azah Home
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#0b1f3b]/70">
            Home, kitchen, cutlery, tableware and household essentials.
          </p>
        </div>

        <div className="rounded-3xl bg-[#18a999] p-7 text-white sm:col-span-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#18a999]">
            <FaTshirt />
          </div>

          <h3 className="mt-5 text-xl font-black">
            Azah Jacket Shop
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
            Our upstairs collection focuses on jackets and outerwear,
            giving customers a dedicated space to browse the available
            selection.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* LOCATION */}
  <section className="bg-[#f5f7fa]">
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18a999]">
            Visit Us
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#0b1f3b] sm:text-4xl">
            Find Azah Trading
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            We are located in the Spink Building on Wooley Street in Port
            Shepstone, serving shoppers from Port Shepstone and the
            surrounding South Coast areas.
          </p>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#0b1f3b]">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-black text-[#0b1f3b]">
                  Azah Trading
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Shop No. 11
                  <br />
                  Spink Building
                  <br />
                  38 Wooley Street
                  <br />
                  Port Shepstone, 4240
                  <br />
                  KwaZulu-Natal, South Africa
                </p>
              </div>
            </div>
          </div>

          <Link
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0b1f3b] px-6 py-3.5 font-bold text-white"
          >
            Open Google Maps
            <FaArrowRight />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-lg">
          <iframe
            title="Azah Trading location"
            src="https://www.google.com/maps?q=Azah+Trading,+Spink+Building,+38+Wooley+Street,+Port+Shepstone,+4240,+South+Africa&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>

  {/* FINAL CTA */}
  <section className="bg-[#0b1f3b]">
    <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
      <h2 className="text-3xl font-black text-white sm:text-4xl">
        Come and visit Azah Trading
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
        Explore Azah Home downstairs and the Azah Jacket Shop upstairs
        at our Port Shepstone store.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/cutlery"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-7 py-3.5 font-bold text-[#0b1f3b]"
        >
          Explore Azah Home
          <FaArrowRight />
        </Link>

        <Link
          href="/jackets"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 font-bold text-white"
        >
          View Jackets
          <FaArrowRight />
        </Link>
      </div>
    </div>
  </section>
</main>


);
}
