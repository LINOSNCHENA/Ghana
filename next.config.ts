import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
        //  domains: ['ui-avatars.com', 'randomuser.me'], // Add both domains
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ui-avatars.com',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            },],

        deviceSizes: [360, 480, 640, 768, 828, 1024, 1080, 1200, 1366, 1440, 1600, 1920, 2048, 2560, 3840],
        imageSizes: [32, 64, 96, 128, 192, 256, 320, 384, 512, 640, 768]
    },
}

export default nextConfig;


