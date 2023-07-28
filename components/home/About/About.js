// Librairie
import classes from './About.module.css';

// Composants
import Button from '@/components/global/Button/Button';
import SectionTitle from '@/components/global/SectionTitle/SectionTitle';

function About() {
	return (
		<section id="about" className={classes.About}>
			<SectionTitle label="à propos" shape="rectangle" />
			<article className={classes.Content}>
				<div className={classes.Quote}>
					<p>" Le diable se cache dans les détails. "</p>
					<p>— Nietzsche</p>
				</div>
				<div className={classes.AboutMe}>
					<p>
						Passionné par le grand univers du monde numérique, je suis
						Analyste Développeur et Designer Numérique. Faire preuve
						de rigueur et accorder de l'attention aux détails sont
						deux qualités que je met en application chaque jour, en
						particulier dans mes travaux.
					</p>
					<p>
						Mes messages sont toujours ouverts, n'hésite pas à me
						contacter pour qu'on fasse connaissance et qu'on discute
						de ton projet !
					</p>
				</div>
				<Button
					label="Me contacter"
					target="#contact"
					align="center"
				/>
			</article>
		</section>
	);
}

export default About;
