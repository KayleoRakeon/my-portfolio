// Librairie
import classes from './About.module.css';

// Composants
import Button from '@/components/global/Button/Button';

function About() {
	return (
		<section id="about" className={classes.About}>
			<article className={classes.SectionTitle}>
				<h2>à propos</h2>
			</article>
			<article className={classes.Content}>
				<div className={classes.Quote}>
					<p>
						&quot; Le diable se cache dans
						les&nbsp;détails.&nbsp;&quot;
					</p>
					<p>— Nietzsche</p>
				</div>
				<div className={classes.AboutMe}>
					<p>
						Passionné par le grand univers du monde numérique, je suis
						Analyste Développeur et Designer Numérique. Faire preuve
						de rigueur et accorder de l&apos;attention aux détails
						sont deux qualités que je met en application chaque jour,
						en particulier dans mes travaux.
					</p>
					<p>
						Mes messages sont toujours ouverts, n&apos;hésite pas à me
						contacter pour qu&apos;on fasse connaissance et qu&apos;on
						discute de ton projet&nbsp;!
					</p>
				</div>
				<Button
					label="Télécharger mon&nbsp;CV"
					target="/cv/cv-benjamin-bourgouin.pdf"
					align="left"
					download={true}
				/>
			</article>
		</section>
	);
}

export default About;
