// Librairie
import classes from './Skills.module.css';

// Composants
import Skill from '@/components/global/Skill/Skill';

function Skills() {
	// Variable
	const skillsDatas = {
		dev: [
			{
				label: 'développement',
				spanLabel: 'front-end',
				imgName: 'frontend',
			},
			{
				label: 'développement',
				spanLabel: 'back-end',
				imgName: 'backend',
			},
			{
				label: 'développement',
				spanLabel: 'mobile',
				imgName: 'mobile',
			},
			{
				label: 'optimisation',
				spanLabel: 'SEO',
				imgName: 'seo',
			},
		],
		design: [
			{
				label: 'branding',
				imgName: 'branding',
			},
			{
				label: 'wireframing',
				spanLabel: 'et maquettage',
				imgName: 'wireframe',
			},
			{
				label: 'réflexion',
				spanLabel: 'ui/ux',
				imgName: 'ux',
			},
		],
	};

	return (
		<section id="skills" className={classes.Skills}>
			<article className={classes.SectionTitle}>
				<h2>expertise</h2>
			</article>
			<article className={classes.SkillsContainer}>
				<div className={classes.Dev}>
					{skillsDatas.dev.map((skill, key) => (
						<Skill
							key={key}
							label={skill.label}
							spanLabel={skill.spanLabel}
							imgName={skill.imgName}
						/>
					))}
				</div>
				<div className={classes.Design}>
					{skillsDatas.design.map((skill, key) => (
						<Skill
							key={key}
							label={skill.label}
							spanLabel={skill.spanLabel}
							imgName={skill.imgName}
						/>
					))}
				</div>
			</article>
		</section>
	);
}

export default Skills;
