import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import WhatsAppButton from "@/components/WhatsAppButton";

const GOOGLE_MAPS_URL =
"https://maps.app.goo.gl/3QTDxHD34rw1k5Fm6";

export const metadata: Metadata = {
title:
"Azah Trading | Home, Kitchen Essentials & Jackets in Port Shepstone",

description:
"Azah Trading is a physical retail store in Port Shepstone, KwaZulu-Natal, offering home essentials, kitchenware, cutlery, tableware, glassware, household items, jackets and outerwear. Visit us at Shop No. 11, Spink Building, 38 Wooley Street.",

keywords: [
// Brand
"Azah Trading",
"Azah Home",
"Azah Jacket Shop",
"Azah Home and Jacket Shop",


// Main location
"Azah Trading Port Shepstone",
"home store Port Shepstone",
"home essentials Port Shepstone",
"kitchenware Port Shepstone",
"kitchen essentials Port Shepstone",
"cutlery Port Shepstone",
"tableware Port Shepstone",
"glassware Port Shepstone",
"household products Port Shepstone",
"jackets Port Shepstone",
"jacket shop Port Shepstone",
"outerwear Port Shepstone",

// Exact location
"Azah Trading Wooley Street",
"Azah Trading Spink Building",
"Spink Building Port Shepstone",
"Wooley Street Port Shepstone",
"shops in Port Shepstone",
"shopping Port Shepstone",

// South Coast
"home essentials South Coast KZN",
"kitchenware South Coast KZN",
"cutlery South Coast",
"tableware South Coast",
"jacket shop South Coast KZN",
"household shop South Coast",

// Margate
"home essentials Margate",
"kitchenware Margate",
"cutlery Margate",
"tableware Margate",
"household products Margate",
"jacket shop Margate",
"jackets Margate",
"Azah Trading near Margate",

// Shelly Beach
"home essentials Shelly Beach",
"kitchenware Shelly Beach",
"cutlery Shelly Beach",
"tableware Shelly Beach",
"jackets Shelly Beach",
"household shop Shelly Beach",

// South Coast towns
"home essentials Port Edward",
"kitchenware Port Edward",
"jackets Port Edward",
"home essentials Hibberdene",
"kitchenware Hibberdene",
"jackets Hibberdene",
"home essentials Umzumbe",
"kitchenware Umzumbe",
"jackets Umzumbe",
"home essentials Harding",
"kitchenware Harding",
"household products Harding",

// Other surrounding areas
"home essentials Scottburgh",
"kitchenware Scottburgh",
"cutlery Scottburgh",
"tableware Scottburgh",
"jackets Scottburgh",
"home store KwaZulu-Natal",
"kitchen store KwaZulu-Natal",
"jacket shop KwaZulu-Natal",
"South Coast shopping",


],

alternates: {
canonical: "https://www.azah.co.za",
},

openGraph: {
title:
"Azah Trading | Home, Kitchen Essentials & Jackets in Port Shepstone",


description:
  "Discover home and kitchen essentials downstairs and jackets and outerwear upstairs at Azah Trading in Port Shepstone, KwaZulu-Natal.",

url: "https://www.azah.co.za",

siteName: "Azah Trading",

type: "website",

locale: "en_ZA",

images: [
  {
    url: "https://www.azah.co.za/images/shop/hero.jpg",
    width: 1200,
    height: 630,
    alt: "Azah Trading Home and Jacket Shop in Port Shepstone",
  },
],


},

twitter: {
card: "summary_large_image",


title: "Azah Trading | Port Shepstone",

description:
  "Home essentials, kitchenware, cutlery, tableware, jackets and outerwear available in-store at Azah Trading, Port Shepstone.",

images: [
  "https://www.azah.co.za/images/shop/hero.jpg",
],

},
};

export default function Home() {
return (
<> <Hero />


  <AboutUs />

  <Products />

  {/* =========================
      LOCATION / VISIT AZAH
  ========================== */}
  <section className="bg-white px-5 py-16 sm:px-6 md:px-8 md:py-24 lg:px-10">
    <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-20">

      {/* LEFT — STORE DETAILS */}
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9b7b2f]/20 bg-[#9b7b2f]/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7b2f] sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#9b7b2f]" />
          Visit Our Store
        </div>

        <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-5xl md:text-6xl">
          Discover
          <br />
          <span className="text-[#9b7b2f]">Azah Trading.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          Visit our physical store in Port Shepstone and explore our
          collections in person. Find everyday home and kitchen essentials
          downstairs, then discover jackets and outerwear upstairs.
        </p>

        {/* Address */}
        <div className="mt-8 rounded-2xl bg-[#f7f6f2] p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:text-xs">
            Azah Trading
          </p>

          <h3 className="mt-2 text-xl font-bold text-black">
            Spink Building
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            Shop No. 11
            <br />
            38 Wooley Street
            <br />
            Port Shepstone, 4240
            <br />
            KwaZulu-Natal, South Africa
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#9b7b2f]"
          >
            📍 Get Directions
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            About Azah
          </Link>
        </div>
      </div>

      {/* RIGHT — GOOGLE MAP */}
      <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f5f5f5] shadow-xl sm:rounded-[2rem]">

        <div className="h-[360px] sm:h-[440px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps?q=Azah+Trading,+Spink+Building,+38+Wooley+Street,+Port+Shepstone,+4240,+South+Africa&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Azah Trading - Spink Building, 38 Wooley Street, Port Shepstone"
          />
        </div>

        {/* Map overlay */}
        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7b2f]">
            Azah Trading
          </p>

          <p className="mt-1 text-sm font-semibold text-black">
            Shop No. 11 • Spink Building
          </p>

          <p className="text-xs text-gray-500">
            38 Wooley Street, Port Shepstone
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* =========================
      FINAL STORE MESSAGE
  ========================== */}
  <section className="bg-[#f6f5f1] px-5 py-16 sm:px-6 md:py-20">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9b7b2f] sm:text-xs">
        Azah Home & Jacket Shop
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
        Come and explore Azah Trading.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
        From practical home essentials and kitchenware to jackets and
        outerwear, discover our collections in-store at Port Shepstone.
      </p>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/cutlery"
          className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#9b7b2f]"
        >
          Explore Cutlery
        </Link>

        <Link
          href="/jackets"
          className="inline-flex items-center justify-center rounded-full border border-black px-7 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          Explore Jackets
        </Link>
      </div>
    </div>
  </section>

  <WhatsAppButton />
</>


);
}
