// Librairie
import classes from './Info.module.css';

function Info({ ...props }) {
	// Variable
	let background;
	switch (props.type) {
		case 'error':
			background = '#ff6969';
			break;
		case 'success':
			background = '#8bdd8e';
			break;
		default:
			background = '#fef6e4';
			break;
	}

	return (
		<div className={classes.Info} style={{ background }}>
			{props.label}
		</div>
	);
}

export default Info;
