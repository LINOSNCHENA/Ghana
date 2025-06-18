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
            },]
    },
}

export default nextConfig;


