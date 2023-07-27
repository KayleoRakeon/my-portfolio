// Librairie
import '../styles/default.css';
import Head from 'next/head';

// Composant
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Header />

			<Layout>
				<Component {...pageProps} />
				<Footer />
			</Layout>
		</>
	);
}

export default MyApp;
