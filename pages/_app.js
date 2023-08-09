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
			<Head>
				<title>Benjamin Bourgouin | Portfolio</title>
				<meta
					name="description"
					content="Salut, moi c'est Benjamin Bourgouin, bienvenue sur mon Portfolio ! Je suis Analyste Développeur et Designer Numérique. J'ai plusieurs projets sympas à te montrer, hésite pas à faire un tour et à me contacter si tu aimes mon travail."
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
