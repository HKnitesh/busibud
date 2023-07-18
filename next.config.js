/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash:true,
    output:'export',
    images:{
        unoptimized:true,
        domains: ["res.cloudinary.com","www.w3.org"],
    },
}

module.exports = nextConfig
