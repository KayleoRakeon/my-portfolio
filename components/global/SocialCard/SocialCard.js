// Librairie
import classes from './SocialCard.module.css';
import Image from 'next/image';

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
					<Image
						src={`/pictos/${props.imgName}.svg`}
						width={20}
						height={20}
						alt="Pictogramme de lien social | Benjamin Bourgouin"
					/>
				</div>
				{props.country ? (
					<div className={classes.Country}>
						<p>{props.country}</p>
					</div>
				) : (
					''
				)}
				<div className={classes.SocialInfo}>
					<p>{props.info}</p>
				</div>
			</div>
		</div>
	);
}

export default SocialCard;
