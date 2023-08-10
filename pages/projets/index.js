// Librairie
import classes from './Projets.module.css';
import useTranslation from 'next-translate/useTranslation';

function Projets() {
	// Variables
	const { t } = useTranslation('projects');

	return (
		<section className={classes.Projects}>
			<p>{t('projects-comming-soon')}</p>
		</section>
	);
}

export default Projets;
