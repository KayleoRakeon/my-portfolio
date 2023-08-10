// Librairie
import classes from './About.module.css';
import useTranslation from 'next-translate/useTranslation';

// Composants
import Button from '@/components/global/Button/Button';

function About() {
	// Variable
	const { t } = useTranslation('common');

	return (
		<section id="about" className={classes.About}>
			<article className={classes.SectionTitle}>
				<h2>{t('about-title')}</h2>
			</article>
			<article className={classes.Content}>
				<div className={classes.Quote}>
					<p>{t('about-quote')}</p>
					<p>— Nietzsche</p>
				</div>
				<div className={classes.AboutMe}>
					<p>{t('about-first-paragraph')}</p>
					<p>{t('about-second-paragraph')}</p>
				</div>
				<Button
					label={t('about-button')}
					target="/cv/cv-benjamin-bourgouin.pdf"
					align="left"
					download={true}
					title={t('about-button')}
				/>
			</article>
		</section>
	);
}

export default About;
