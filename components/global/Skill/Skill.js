// Librairie
import classes from './Skill.module.css';

function Skill({ ...props }) {
	return (
		<div className={classes.Skill}>
			<div>
				<img src={`./pictos/${props.imgName}.svg`} />
			</div>
			<p>
				{props.label}
				<span>{props.spanLabel}</span>
			</p>
		</div>
	);
}

export default Skill;
