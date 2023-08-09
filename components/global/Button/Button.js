// Librairie
import classes from './Button.module.css';

function Button({ ...props }) {
	// Variables
	let justifyContent;
	switch (props.align) {
		case 'left':
			justifyContent = 'flex-start';
			break;
		case 'center':
			justifyContent = 'center';
			break;
		case 'right':
			justifyContent = 'flex-end';
			break;
	}

	return (
		<a
			href={props.target}
			className={classes.Link}
			style={{
				justifyContent,
			}}
		>
			{!props.submit ? (
				<button className={classes.Button}>{props.label}</button>
			) : (
				<button className={classes.Button} type="submit">
					{props.label}
				</button>
			)}
		</a>
	);
}

export default Button;
