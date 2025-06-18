import Image from "next/image";
import { COMP_MOBILE, COMP_LOGO, COMP_NAME, COMP_LOGO_BIG } from "@/app/utils/constants";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaDiscord } from "react-icons/fa";

export function SocialSection() {
  return (
    <footer className="bg-blue-200 text-black py-6 px-4 text-center flex flex-col items-center rounded-lg" style={{ marginBottom: "0.5rem" }}>
      {COMP_LOGO && (
        <div className="relative w-34 h-34 mb-4">
          <Image src={COMP_LOGO_BIG} alt="Company Logo" fill className="object-contain" priority />
        </div>
      )}

      <p className="mb-4">&copy; {new Date().getFullYear()} Ghana. All rights reserved.</p>
      <div className="flex justify-evenly items-center text-base text-black w-full min-w-4xl">
        <a href={`https://www.linkedin.com/${COMP_NAME}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white text-2xl">
          <FaLinkedin />
        </a>

        <a href={`https://wa.me/${COMP_MOBILE}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white text-2xl">
          <FaWhatsapp />
        </a>

        <a href={`https://www.facebook.com/${COMP_NAME}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-red text-2xl">
          <FaFacebook />
        </a>

        <a href={`https://wa.me/${COMP_MOBILE}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white text-2xl">
          <FaWhatsapp />
        </a>

        <a href={`https://www.facebook.com/${COMP_NAME}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-red text-2xl">
          <FaFacebook />
        </a>

        <a href={`https://discord.gg/${COMP_NAME}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white text-2xl">
          <FaDiscord />
        </a>
      </div>
    </footer>
  );
}
