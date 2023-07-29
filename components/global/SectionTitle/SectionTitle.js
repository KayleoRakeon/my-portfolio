// Librairie
import classes from './SectionTitle.module.css';
import Image from 'next/image';

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

			{props.label === 'à propos' ||
			props.label === 'me contacter' ? (
				<div>
					<Image src="/pictos/arrow.png" width={50} height={30} />
				</div>
			) : (
				''
			)}
		</article>
	);
}

export default SectionTitle;
