// Librairie
import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
	return (
		<Html>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="author" content="Benjamin Bourgouin" />
				<meta
					name="keywords"
					content="Benjamin Bourgouin, Analyste, Développeur, Designer, Numérique, Webdesign, Programmation, Front-end, Back-end, mobile, branding, SEO, wireframe, maquettage, développement web"
				/>
				<link
					rel="icon"
					type="image/x-icon"
					href="/logo/logo_favicon.ico"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bellefair&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
