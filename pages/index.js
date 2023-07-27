// Composants
import Welcome from '@/components/home/Welcome/Welcome';
import About from '@/components/home/About/About';
import Skills from '@/components/home/Skills/Skills';
import LastProject from '@/components/home/LastProject/LastProject';
import Contact from './contact';

function Home() {
	return (
		<>
			<Welcome />
			<About />
			<Skills />
			<LastProject />
			<Contact />
		</>
	);
}

export default Home;
