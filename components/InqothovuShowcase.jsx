"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
{
number: "01",
title: "Kitchen & Tableware",
description:
"Discover cutlery, glassware, tea sets, kitchen essentials and practical items for everyday living.",
},
{
number: "02",
title: "Household Essentials",
description:
"Browse useful home items including pedal bins, bread tins, laundry baskets, food warmers, curtains and more.",
},
{
number: "03",
title: "Jackets & Outerwear",
description:
"Explore our upstairs collection of jackets and outerwear, available to view in-store.",
},
];

export default function AzahShowcase() {
return ( <section className="overflow-hidden bg-[#111111] px-6 py-24 text-white"> <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
{/* Store Image */}
<motion.div
className="relative min-h-[440px] overflow-hidden rounded-[2rem]"
initial={{ opacity: 0, scale: 0.96 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
> <Image
         src="/images/shop/hero.jpg"
         alt="Azah Trading store in Port Shepstone"
         fill
         sizes="(max-width: 1024px) 100vw, 45vw"
         className="object-cover"
       />

```
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute bottom-7 left-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a646]">
          Azah Trading · Port Shepstone
        </p>
      </div>
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a646]">
        Discover Azah
      </p>

      <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
        Everything for your home, all under one roof.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
        Visit Azah Trading in Port Shepstone and explore our carefully
        selected range of household essentials, kitchen and tableware,
        together with our collection of jackets and outerwear.
      </p>

      {/* Highlights */}
      <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
        {highlights.map((highlight) => (
          <div key={highlight.number} className="flex gap-5 py-5">
            <span className="pt-1 text-sm font-semibold text-[#c9a646]">
              {highlight.number}
            </span>

            <div>
              <h3 className="text-lg font-semibold">
                {highlight.title}
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-white/65">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap gap-4">
        <Link
          href="/cutlery"
          className="rounded-md bg-[#9b7b2f] px-6 py-3 font-semibold text-white transition hover:bg-[#b08d36]"
        >
          Explore Cutlery
        </Link>

        <Link
          href="/jackets"
          className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-[#c9a646] hover:text-[#c9a646]"
        >
          View Jackets
        </Link>
      </div>

      
    </motion.div>
  </div>
</section>


);
}
