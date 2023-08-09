// Librairie
import classes from './Footer.module.css';

// Composant
import SocialCard from '../SocialCard/SocialCard';

const COLORS = {
	social: '#8bd3dd',
	mail: '#f582ae',
	phone: '#f3d2c1',
};

function Footer() {
	return (
		<footer className={classes.Footer}>
			<a
				href="https://www.facebook.com/benjamin.bourgouin.webdesigner/"
				target="_blank"
				title="Contacte-moi sur Facebook | Benjamin Bourgouin"
			>
				<SocialCard
					imgName="facebook"
					color={COLORS.social}
					info="Benjamin Webdesigner"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/benjamin-bourgouin-093421159/"
				target="_blank"
				title="Contacte-moi sur LinkedIn | Benjamin Bourgouin"
			>
				<SocialCard
					imgName="linkedin"
					color={COLORS.social}
					info="Benjamin Bourgouin"
				/>
			</a>
			<a
				href="https://github.com/KayleoRakeon"
				target="_blank"
				title="Visite mon profil GitHub | Benjamin Bourgouin"
			>
				<SocialCard
					imgName="github"
					color={COLORS.social}
					info="Benjamin Bourgouin"
				/>
			</a>
			<a
				href="mailto:benjamin.bourgouin.pro@gmail.com"
				target="_blank"
				title="Envoi moi un courriel | Benjamin Bourgouin"
			>
				<SocialCard
					imgName="mail"
					color={COLORS.mail}
					info="benjamin.bourgouin.pro@gmail.com"
				/>
			</a>
			<a
				href="tel:+14384934734"
				title="Contacte-moi par téléphone au Québec, Canada | Benjamin Bourgouin"
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
				title="Contacte-moi par téléphone en France | Benjamin Bourgouin"
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
