// Librairie
import classes from './Button.module.css';

function Button({ ...props }) {
	return (
		<a href={props.target} className={classes.Link}>
			<button className={classes.Button}>{props.label}</button>
		</a>
	);
}

export default Button;
