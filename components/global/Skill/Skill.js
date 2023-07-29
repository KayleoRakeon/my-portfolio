// Librairie
import classes from './Skill.module.css';
import Image from 'next/image';

function Skill({ ...props }) {
	return (
		<div className={classes.Skill}>
			<div>
				<Image
					src={`/pictos/${props.imgName}.svg`}
					width={50}
					height={50}
				/>
			</div>
			<p>
				{props.label}
				<span>{props.spanLabel}</span>
			</p>
		</div>
	);
}

export default Skill;
