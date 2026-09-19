"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
FaWhatsapp,
FaPhoneAlt,
FaMapMarkerAlt,
FaArrowRight,
FaStore,
FaClock,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
"https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

const PRIMARY_PHONE = "27641656426";
const SECONDARY_PHONE = "27615418189";

export default function ContactUsPage() {
return ( <main className="bg-white text-[#1c1c1c]">
{/* HERO */} <section className="relative overflow-hidden bg-[#0b1f3b]"> <div className="absolute inset-0 opacity-20"> <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#f4b400]" /> <div className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-[#18a999]" /> </div>

```
    <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4b400]">
            Get In Touch
          </span>

          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Contact
            <span className="block text-[#f4b400]">
              Azah Trading
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Have a question about our products or want to find our
            store? Contact Azah Trading directly or visit us in
            Port Shepstone.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${PRIMARY_PHONE}?text=Hello%20Azah%20Trading!%20I%20would%20like%20to%20make%20an%20enquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 py-3.5 font-bold text-white transition hover:scale-[1.02]"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              <FaMapMarkerAlt />
              Find Our Store
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative flex min-h-[300px] w-full max-w-[470px] items-center justify-center overflow-hidden rounded-3xl bg-white p-8 shadow-2xl sm:min-h-[390px]">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f4b400]/20" />
            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#18a999]/15" />

            <Image
              src="/logo.png"
              alt="Azah Trading"
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

  {/* CONTACT OPTIONS */}
  <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18a999]">
        Contact Options
      </span>

      <h2 className="mt-3 text-3xl font-black text-[#0b1f3b] sm:text-4xl">
        Speak to Azah Trading
      </h2>

      <p className="mt-5 leading-7 text-gray-600">
        Contact us directly about our home, kitchen, household and
        jacket collections, or visit our physical store.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {/* WHATSAPP */}
      <motion.a
        href={`https://wa.me/${PRIMARY_PHONE}?text=Hello%20Azah%20Trading!%20I%20would%20like%20to%20make%20an%20enquiry.`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:shadow-xl"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25d366] text-2xl text-white">
          <FaWhatsapp />
        </div>

        <h3 className="mt-5 text-xl font-black text-[#0b1f3b]">
          WhatsApp
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Send us a message
        </p>

        <p className="mt-4 font-bold text-[#18a999]">
          064 165 6426
        </p>
      </motion.a>

      {/* PHONE */}
      <motion.a
        href={`tel:+${PRIMARY_PHONE}`}
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:shadow-xl"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1f3b] text-2xl text-white">
          <FaPhoneAlt />
        </div>

        <h3 className="mt-5 text-xl font-black text-[#0b1f3b]">
          Call Us
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Speak to our team
        </p>

        <p className="mt-4 font-bold text-[#18a999]">
          064 165 6426
        </p>

        <p className="mt-1 text-sm text-gray-500">
          061 541 8189
        </p>
      </motion.a>

      {/* LOCATION */}
      <motion.a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:shadow-xl"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400] text-2xl text-[#0b1f3b]">
          <FaMapMarkerAlt />
        </div>

        <h3 className="mt-5 text-xl font-black text-[#0b1f3b]">
          Visit Us
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Find us in Port Shepstone
        </p>

        <p className="mt-4 font-bold text-[#18a999]">
          Spink Building
        </p>

        <p className="mt-1 text-sm text-gray-500">
          38 Wooley Street
        </p>
      </motion.a>
    </div>
  </section>

  {/* LOCATION + MAP */}
  <section className="bg-[#f5f7fa]">
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* ADDRESS */}
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18a999]">
            Visit Our Store
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#0b1f3b] sm:text-4xl">
            Come and see us
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Azah Trading is located in the Spink Building on Wooley
            Street, Port Shepstone.
          </p>

          <div className="mt-8 space-y-4">
            {/* ADDRESS */}
            <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#0b1f3b]">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-black text-[#0b1f3b]">
                  Address
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
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

            {/* PHONE */}
            <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b1f3b] text-white">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-black text-[#0b1f3b]">
                  Phone
                </h3>

                <div className="mt-1 space-y-1 text-sm">
                  <a
                    href="tel:+27641656426"
                    className="block text-gray-600 hover:text-[#18a999]"
                  >
                    064 165 6426
                  </a>

                  <a
                    href="tel:+27615418189"
                    className="block text-gray-600 hover:text-[#18a999]"
                  >
                    061 541 8189
                  </a>
                </div>
              </div>
            </div>

            {/* STORE */}
            <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#18a999] text-white">
                <FaStore />
              </div>

              <div>
                <h3 className="font-black text-[#0b1f3b]">
                  Store
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Azah Home downstairs
                  <br />
                  Azah Jacket Shop upstairs
                </p>
              </div>
            </div>
          </div>

          <Link
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0b1f3b] px-6 py-3.5 font-bold text-white transition hover:bg-[#122b50]"
          >
            Open Google Maps
            <FaArrowRight />
          </Link>
        </div>

        {/* MAP */}
        <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl">
          <iframe
            title="Azah Trading location in Port Shepstone"
            src="https://www.google.com/maps?q=Azah+Trading,+Spink+Building,+38+Wooley+Street,+Port+Shepstone,+4240,+South+Africa&output=embed"
            width="100%"
            height="520"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>

  {/* COLLECTION LINKS */}
  <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
    <div className="grid gap-6 md:grid-cols-2">
      <Link
        href="/cutlery"
        className="group rounded-3xl bg-[#0b1f3b] p-8 text-white transition hover:-translate-y-1 hover:shadow-xl sm:p-10"
      >
        <span className="text-sm font-bold uppercase tracking-widest text-[#f4b400]">
          Downstairs
        </span>

        <h2 className="mt-3 text-2xl font-black">
          Azah Home
        </h2>

        <p className="mt-4 leading-7 text-white/70">
          Explore cutlery, tableware, glassware, kitchen essentials and
          household products.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#f4b400]">
          Explore Azah Home
          <FaArrowRight className="transition group-hover:translate-x-1" />
        </span>
      </Link>

      <Link
        href="/jackets"
        className="group rounded-3xl bg-[#f4b400] p-8 text-[#0b1f3b] transition hover:-translate-y-1 hover:shadow-xl sm:p-10"
      >
        <span className="text-sm font-bold uppercase tracking-widest">
          Upstairs
        </span>

        <h2 className="mt-3 text-2xl font-black">
          Azah Jacket Shop
        </h2>

        <p className="mt-4 leading-7 text-[#0b1f3b]/70">
          Browse jackets and outerwear available at our Port Shepstone
          store.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 font-bold">
          Explore Jackets
          <FaArrowRight className="transition group-hover:translate-x-1" />
        </span>
      </Link>
    </div>
  </section>

  {/* FINAL CTA */}
  <section className="bg-[#0b1f3b]">
    <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
      <FaClock className="mx-auto text-3xl text-[#f4b400]" />

      <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
        Planning a visit?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
        Contact us before visiting if you would like to enquire about
        products or the store.
      </p>

      <a
        href={`https://wa.me/${PRIMARY_PHONE}?text=Hello%20Azah%20Trading!%20I%20am%20planning%20to%20visit%20your%20store%20and%20would%20like%20to%20make%20an%20enquiry.`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-7 py-3.5 font-bold text-white"
      >
        <FaWhatsapp />
        Message Us on WhatsApp
        <FaArrowRight />
      </a>
    </div>
  </section>
</main>


);
}
