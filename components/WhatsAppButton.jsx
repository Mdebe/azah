"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
const phoneNumber = "27641656426";

const message =
"Hello Azah Trading! I would like to enquire about your products and store.";

return (
<a
href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
target="_blank"
rel="noopener noreferrer"
className="
fixed
bottom-6
right-6
z-50
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-[#0B1F3B]
border-2
border-[#F4B400]
shadow-xl
transition-all
duration-300
hover:scale-110
hover:bg-[#F4B400]
group
"
title="Chat with Azah Trading on WhatsApp"
aria-label="Chat with Azah Trading on WhatsApp"
> <FaWhatsapp
     className="
       h-7
       w-7
       text-[#25D366]
       transition-colors
       duration-300
       group-hover:text-[#0B1F3B]
     "
   /> </a>
);
}
