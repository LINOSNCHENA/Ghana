import Image from "next/image";
import { COMP_MOBILE, COMP_LOGO, COMP_NAME, COMP_LOGO_BIG } from "@/app/utils/constants";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaDiscord, FaTiktok, FaInstagram, FaWeixin } from "react-icons/fa";

export function SocialSection() {
  return (
    <footer className="bg-blue-200 text-black py-6 px-4 text-center flex flex-col items-center rounded-lg mb-2">
      {COMP_LOGO && (
        <div className="relative w-40 h-40 mb-4">
          <Image src={COMP_LOGO_BIG} alt="Company Logo" fill className="object-contain" priority />
        </div>
      )}

      <p className="mb-4 font-medium">
        &copy; {new Date().getFullYear()} {COMP_NAME || "Our Company"}, Ghana. All rights reserved.
      </p>

      <div className="mb-4">
        <p className="font-semibold">Contact us:</p>
        <a href={`tel:${COMP_MOBILE}`} className="text-blue-600 hover:underline">
          {COMP_MOBILE}
        </a>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-6 text-base text-black max-w-4xl">
        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/${COMP_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-700 text-3xl transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* WhatsApp */}
        <a href={`https://wa.me/${COMP_MOBILE}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-600 text-3xl transition-colors" title="WhatsApp">
          <FaWhatsapp />
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/${COMP_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600 text-3xl transition-colors"
          title="Facebook"
        >
          <FaFacebook />
        </a>

        {/* TikTok */}
        <a
          href={`https://www.tiktok.com/@${COMP_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-900 text-3xl transition-colors"
          title="TikTok"
        >
          <FaTiktok />
        </a>

        {/* Instagram */}
        <a
          href={`https://www.instagram.com/${COMP_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-pink-600 text-3xl transition-colors"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        {/* WeChat */}
        <a
          href={`https://weixin.qq.com/${COMP_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-green-500 text-3xl transition-colors"
          title="WeChat"
        >
          <FaWeixin />
        </a>

        {/* Discord */}
        <a
          href={`https://discord.gg/${COMP_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-indigo-600 text-3xl transition-colors"
          title="Discord"
        >
          <FaDiscord />
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-700">Follow us on social media for updates and promotions</p>
    </footer>
  );
}
