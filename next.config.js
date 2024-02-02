/** @type {import('next').NextConfig} */

// Next-Translate
const nextTranslate = require('next-translate-plugin');

const nextConfig = nextTranslate({
	reactStrictMode: true,
	env: {
		mongodb_username: 'benjaminbourgouin',
		mongodb_password: 'fVvaf0mTISxWNvci',
		mongodb_db: 'projects'
	}
});

module.exports = nextConfig;
