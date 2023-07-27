// Librairie
import classes from './SocialCard.module.css';

function SocialCard({ ...props }) {
	return (
		<div
			className={classes.Wrapper}
			style={{
				margin:
					props.imgName === 'mail' ? '50px 0 50px 0' : '0 0 20px 0',
			}}
		>
			<div className={classes.SocialCard}>
				<div
					className={classes.Icon}
					style={{
						background: props.color,
					}}
				>
					<img src={`./pictos/${props.imgName}.svg`} />
				</div>
				<div className={classes.SocialInfo}>
					<p>{props.info}</p>
				</div>
			</div>
		</div>
	);
}

export default SocialCard;
