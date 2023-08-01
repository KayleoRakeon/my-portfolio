// Librairie
import { Html, Head, Main, NextScript } from 'next/document';

// Composants
import MyApp from './_app';

export default function MyDocument() {
	return (
		<Html lang="fr">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bellefair&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
