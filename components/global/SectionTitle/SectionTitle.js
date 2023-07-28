// Librairie
import classes from './SectionTitle.module.css';

function SectionTitle({ ...props }) {
	// Variable
	const size = {
		width: props.shape === 'rectangle' ? '100%' : '500px',
		height: props.shape === 'rectangle' ? 'auto' : '500px',
	};

	return (
		<article className={classes.SectionTitle}>
			<div style={size}>
				<h2>{props.label}</h2>
			</div>
			<div>
				<img src="./pictos/arrow.png" />
			</div>
		</article>
	);
}

export default SectionTitle;
