// Librairie
import '../styles/default.css';
import Head from 'next/head';

// Composant
import Header from '@/components/global/Header/Header';
import Footer from '@/components/global/Footer/Footer';
import Layout from '@/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />

			<Layout>
				<Component {...pageProps} />
				<Footer />
			</Layout>
		</>
	);
}

export default MyApp;
