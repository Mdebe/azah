import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://YOUR-AZAH-DOMAIN.co.za";

export const metadata: Metadata = {
metadataBase: new URL(siteUrl),

title: {
default: "Azah Trading | Home, Kitchen & Jackets in Port Shepstone",
template: "%s | Azah Trading",
},

description:
"Azah Trading is a physical retail store in Port Shepstone offering home and kitchen essentials, cutlery, tableware, glassware, household items, jackets and outerwear. Visit us at Shop No. 11, Spink Building, 38 Wooley Street.",

keywords: [
"Azah Trading",
"Azah Home",
"Azah Jacket Shop",
"Azah Trading Port Shepstone",
"home essentials Port Shepstone",
"kitchen essentials Port Shepstone",
"cutlery Port Shepstone",
"tableware Port Shepstone",
"glassware Port Shepstone",
"household products Port Shepstone",
"jackets Port Shepstone",
"outerwear Port Shepstone",
"kitchenware Port Shepstone",
"Spink Building Port Shepstone",
"Wooley Street Port Shepstone",
"home and kitchen store Port Shepstone",
],

applicationName: "Azah Trading",
authors: [{ name: "Azah Trading" }],
creator: "Azah Trading",
category: "Home, Kitchen & Clothing Retail Store",

alternates: {
canonical: siteUrl,
},

icons: {
icon: "/logo.png",
shortcut: "/logo.png",
apple: "/logo.png",
},

openGraph: {
title: "Azah Trading | Home, Kitchen & Jackets in Port Shepstone",
description:
"Discover home and kitchen essentials, cutlery, tableware, household items, jackets and outerwear at Azah Trading in Port Shepstone.",
url: siteUrl,
siteName: "Azah Trading",
locale: "en_ZA",
type: "website",
images: [
{
url: `${siteUrl}/logo.png`,
width: 1200,
height: 630,
alt: "Azah Trading - Home, Kitchen & Jacket Shop in Port Shepstone",
},
],
},

twitter: {
card: "summary_large_image",
title: "Azah Trading | Port Shepstone",
description:
"Home and kitchen essentials, cutlery, tableware, household items, jackets and outerwear in Port Shepstone.",
images: [`${siteUrl}/logo.png`],
},

robots: {
index: true,
follow: true,
googleBot: {
index: true,
follow: true,
"max-image-preview": "large",
"max-snippet": -1,
},
},
};

type RootLayoutProps = {
children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
return ( <html lang="en-ZA"> <head> <meta name="google" content="notranslate" /> <meta name="googlebot" content="notranslate" /> </head>


  <body className="min-h-screen overflow-x-hidden bg-white text-gray-900">
    <Navbar />

    <main className="w-full">
      {children}
    </main>

    <Footer />

    {/* =========================
        AZAH TRADING LOCAL SEO
    ========================== */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",

          name: "Azah Trading",
          alternateName: [
            "Azah Home",
            "Azah Jacket Shop",
            "Azah Home & Jacket Shop",
          ],

          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          image: `${siteUrl}/images/shop/hero.jpg`,

          description:
            "Azah Trading is a physical retail store in Port Shepstone offering home and kitchen essentials, cutlery, tableware, glassware, household products, jackets and outerwear.",

          telephone: "+27641656426",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 11, Spink Building, 38 Wooley Street",
            addressLocality: "Port Shepstone",
            addressRegion: "KwaZulu-Natal",
            postalCode: "4240",
            addressCountry: "ZA",
          },

          areaServed: [
            "Port Shepstone",
            "Shelly Beach",
            "Marburg",
            "Oslo Beach",
            "Gamalakhe",
            "KwaZulu-Natal",
            "South Africa",
          ],

          department: [
            {
              "@type": "Store",
              name: "Azah Home",
              description:
                "Home and kitchen essentials including cutlery, tableware, glassware, kettles, food warmers, bread tins, laundry baskets and other household items.",
            },
            {
              "@type": "Store",
              name: "Azah Jacket Shop",
              description:
                "Jackets and outerwear available to explore in-store upstairs.",
            },
          ],

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Azah Trading Collections",

            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Cutlery & Tableware",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Pedal Bins",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Kettles",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Glassware",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Tea, Sugar & Coffee Sets",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Bread Tins",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Food Warmers",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Laundry Baskets",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Curtains",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Jackets & Outerwear",
                },
              },
            ],
          },

          sameAs: [
            "https://wa.me/27641656426",
          ],
        }),
      }}
    />
  </body>
</html>


);
}
