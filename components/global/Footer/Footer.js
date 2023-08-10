// Librairie
import classes from './Footer.module.css';
import useTranslation from 'next-translate/useTranslation';

// Composant
import SocialCard from '../SocialCard/SocialCard';

const COLORS = {
	social: '#8bd3dd',
	mail: '#f582ae',
	phone: '#f3d2c1',
};

function Footer() {
	// Variable
	const { t } = useTranslation('common');

	return (
		<footer className={classes.Footer}>
			<a
				href="https://bento.me/bourgouin-benjamin"
				target="_blank"
				title={t('footer-bento') + '| Benjamin Bourgouin'}
			>
				<SocialCard
					imgName="bentome"
					color={COLORS.social}
					info={t('footer-bento')}
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/benjamin-bourgouin-093421159/"
				target="_blank"
				title={t('footer-linkedin') + '| Benjamin Bourgouin'}
			>
				<SocialCard
					imgName="linkedin"
					color={COLORS.social}
					info={t('footer-linkedin')}
				/>
			</a>
			<a
				href="https://github.com/bourgouin-benjamin"
				target="_blank"
				title={t('footer-github') + '| Benjamin Bourgouin'}
			>
				<SocialCard
					imgName="github"
					color={COLORS.social}
					info={t('footer-github')}
				/>
			</a>
			<a
				href="mailto:benjamin.bourgouin.pro@gmail.com"
				target="_blank"
				title={t('footer-mail') + '| Benjamin Bourgouin'}
			>
				<SocialCard
					imgName="mail"
					color={COLORS.mail}
					info="benjamin.bourgouin.pro@gmail.com"
				/>
			</a>
			<a
				href="tel:+14384934734"
				title={t('footer-phone-ca') + '| Benjamin Bourgouin'}
			>
				<SocialCard
					imgName="phone"
					color={COLORS.phone}
					info="(438) 493-4734"
					country="CA"
				/>
			</a>
			<a
				href="tel:+33781836232"
				title={t('footer-phone-fr') + '| Benjamin Bourgouin'}
			>
				<SocialCard
					imgName="phone"
					color={COLORS.phone}
					info="07 81 83 62 32"
					country="FR"
				/>
			</a>
		</footer>
	);
}

export default Footer;
