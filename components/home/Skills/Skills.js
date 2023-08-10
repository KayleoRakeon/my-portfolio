// Librairie
import classes from './Skills.module.css';
import useTranslation from 'next-translate/useTranslation';

// Composants
import Skill from '@/components/global/Skill/Skill';

function Skills() {
	// Variable
	const { t } = useTranslation('common');
	const skillsDatas = {
		dev: [
			{
				label: t('skills-dev-1-1'),
				spanLabel: t('skills-dev-1-2'),
				imgName: 'frontend',
			},
			{
				label: t('skills-dev-2-1'),
				spanLabel: t('skills-dev-2-2'),
				imgName: 'backend',
			},
			{
				label: t('skills-dev-3-1'),
				spanLabel: t('skills-dev-3-2'),
				imgName: 'mobile',
			},
			{
				label: t('skills-dev-4-1'),
				spanLabel: t('skills-dev-4-2'),
				imgName: 'seo',
			},
		],
		design: [
			{
				label: t('skills-design-1-1'),
				imgName: 'branding',
			},
			{
				label: t('skills-design-2-1'),
				spanLabel: t('skills-design-2-2'),
				imgName: 'wireframe',
			},
			{
				label: t('skills-design-3-1'),
				spanLabel: t('skills-design-3-2'),
				imgName: 'ux',
			},
		],
	};

	return (
		<section id="skills" className={classes.Skills}>
			<article className={classes.SectionTitle}>
				<h2>{t('skills-title')}</h2>
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
