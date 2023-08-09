// Librairie
import classes from './Footer.module.css';

// Composant
import SocialCard from '../../SocialCard/SocialCard';

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
			>
				<SocialCard
					imgName="linkedin"
					color={COLORS.social}
					info="Benjamin Bourgouin"
				/>
			</a>
			<a href="https://github.com/KayleoRakeon" target="_blank">
				<SocialCard
					imgName="github"
					color={COLORS.social}
					info="Benjamin Bourgouin"
				/>
			</a>
			<a
				href="mailto:benjamin.bourgouin.pro@gmail.com"
				target="_blank"
			>
				<SocialCard
					imgName="mail"
					color={COLORS.mail}
					info="benjamin.bourgouin.pro@gmail.com"
				/>
			</a>
			<a href="tel:+14384934734">
				<SocialCard
					imgName="phone"
					color={COLORS.phone}
					info="(438) 493-4734"
				/>
			</a>
			<a href="tel:+33781836232">
				<SocialCard
					imgName="phone"
					color={COLORS.phone}
					info="07 81 83 62 32"
				/>
			</a>
		</footer>
	);
}

export default Footer;
