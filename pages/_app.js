// Librairie
import '../styles/default.css';
import Head from 'next/head';
import { useState } from 'react';

// Composant
import Header from '@/components/global/Header/Header';
import Footer from '@/components/global/Footer/Footer';
import Layout from '@/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
	// State
	const [lang, setLang] = useState('FR');

	return (
		<>
			<Head>
				<title>Benjamin Bourgouin | Portfolio</title>
				<meta
					name="description"
					content={
						lang === 'FR'
							? "Salut, moi c'est Benjamin Bourgouin, bienvenue sur mon Portfolio ! Je suis Analyste Développeur et Designer Numérique. J'ai plusieurs projets sympas à te montrer, hésite pas à faire un tour et à me contacter si tu aimes mon travail."
							: 'Hi, I’m Benjamin Bourgouin, welcome to my Portfolio! I’m a Developer Analyst and Digital Designer. I have several nice projects to show you, feel free to take a look and contact me if you like my work.'
					}
				/>
			</Head>

			<Header lang={lang} setLang={setLang} />

			<Layout>
				<Component {...pageProps} lang={lang} />
				<Footer lang={lang} />
			</Layout>
		</>
	);
}

export default MyApp;
