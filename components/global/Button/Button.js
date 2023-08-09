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
		<div
			style={{
				justifyContent,
			}}
			className={classes.ButtonContainer}
		>
			<a
				href={props.target}
				className={classes.Link}
				download={props.download}
				title={`${props.title} | Benjamin Bourgouin`}
			>
				{!props.submit ? (
					<button className={classes.Button}>{props.label}</button>
				) : (
					<button className={classes.Button} type="submit">
						{props.label}
					</button>
				)}
			</a>
		</div>
	);
}

export default Button;
