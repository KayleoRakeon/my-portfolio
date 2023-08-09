// Librairie
import classes from './Welcome.module.css';

// Composants
import Button from '@/components/global/Button/Button';

function Welcome() {
	return (
		<section className={classes.Welcome}>
			<div className={classes.Background}>
				<div className={classes.Left}></div>
				<div className={classes.Right}></div>
			</div>
			<article>
				<h1>
					hey salut,<span>moi c'est benjamin !</span>
				</h1>
				<Button label="Qui ça ?" target="#about" />
			</article>
		</section>
	);
}

export default Welcome;
