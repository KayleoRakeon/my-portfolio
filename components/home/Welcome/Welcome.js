// Librairie
import classes from './Welcome.module.css';
import useTranslation from 'next-translate/useTranslation';

// Composants
import Button from '@/components/global/Button/Button';

function Welcome() {
	// Variables
	const { t } = useTranslation('common');

	return (
		<section className={classes.Welcome}>
			<div className={classes.Background}>
				<div className={classes.Left}></div>
				<div className={classes.Right}></div>
			</div>
			<article>
				<h1>
					{t('welcome-title-firstLine')}
					<span>{t('welcome-title-secondLine')}</span>
				</h1>
				<Button
					label="Qui ça ?"
					target="#about"
					align="center"
					title="Découvre qui je suis | Benjamin Bourgouin"
				/>
			</article>
		</section>
	);
}

export default Welcome;
