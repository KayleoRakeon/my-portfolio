/** @type {import('next').NextConfig} */

// Next-Translate
const nextTranslate = require('next-translate-plugin');

const nextConfig = nextTranslate({
	reactStrictMode: true,
});

module.exports = nextConfig;
