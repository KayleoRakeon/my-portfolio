// Librairie
import classes from './Info.module.css';

function Info({ ...props }) {
	// Variable
	let styles;
	switch (props.type) {
		case 'error':
			styles = {
				background: '#ff6969',
				color: '#fef6e4',
			};
			break;
		case 'success':
			styles = {
				background: '#8bdd8e',
				color: '#001858',
			};
			break;
		default:
			styles = {
				background: '#fef6e4',
				color: '#001858',
			};
			break;
	}

	return (
		<div className={classes.Info} style={styles}>
			{props.label}
		</div>
	);
}

export default Info;
