import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { COMP_LOGO_BIG, COMP_ADDRESS, COMP_COPYRIGHT, COMP_FB, COMP_LINKEDIN, COMP_WHATSAPP, COMP_MOTTO, COMP_TIKTOK } from "@/app/utils/constants";

export function SocialSection() {
  return (
    <footer className="bg-blue-200 text-black py-8 px-6 text-center flex flex-col items-center rounded-lg mb-2 w-full max-w-9xl mx-auto">
      {COMP_LOGO_BIG && (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4">
          <Image src={COMP_LOGO_BIG} alt={COMP_MOTTO} fill className="object-contain" priority />
        </div>
      )}

      {/* <p className="mb-2 text-sm sm:text-base">&copy; {COMP_COPYRIGHT}.</p> */}
      <p className="mb-2 text-sm sm:text-base">&copy;&nbsp;{COMP_COPYRIGHT}.</p>

      <p className="mb-4 text-sm sm:text-base">📍 {COMP_ADDRESS}</p>

      <div className="flex flex-wrap justify-center gap-6 text-2xl">
        <a
          href={`https://www.linkedin.com/${COMP_LINKEDIN}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="text-black hover:text-blue-700 transition-transform duration-200 hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href={`https://wa.me/${COMP_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="text-black hover:text-green-600 transition-transform duration-200 hover:scale-110"
        >
          <FaWhatsapp />
        </a>

        <a
          href={`https://www.facebook.com/${COMP_FB}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
          className="text-black hover:text-blue-600 transition-transform duration-200 hover:scale-110"
        >
          <FaFacebook />
        </a>

        {/* <a
          href={`https://discord.gg/${COMP_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          title="Discord"
          className="text-black hover:text-indigo-600 transition-transform duration-200 hover:scale-110"
        >
          <FaDiscord />
        </a> */}

        <a
          href={`https://www.tiktok.com/@${COMP_TIKTOK}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          title="TikTok"
          className="text-black hover:text-pink-600 transition-transform duration-200 hover:scale-110"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
