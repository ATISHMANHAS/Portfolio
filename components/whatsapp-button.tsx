"use client"

import Image from "next/image"

export default function WhatsAppButton() {
    const phoneNumber = "+919596085704"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-white p-1 rounded-md transition-all duration-300 transform hover:scale-110"
            aria-label="Contact on WhatsApp"
        >
            <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={40}
                height={40}
            />
        </a>
    )
}
