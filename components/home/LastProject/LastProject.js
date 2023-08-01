// Librairie
import classes from './LastProject.module.css';
import Image from 'next/image';

// Composants
import Button from '@/components/global/Button/Button';

function LastProject() {
	// Variable
	const lastProjectDatas = {
		title: 'Kadaboo',
		image: 'kadaboo_1.jpg',
		description: [
			'Kadaboo est une application destinée aux proffessionnel.le.s du milieu de l’éducation à la petite enfance. Le but de Kadaboo est de se comporter comme une banque d’activité pédagogique à réaliser avec les enfants, en fonction de différents thèmes, groupes d’âges, et/ou buts pédagogiques.',
			'L’idée principale de Kadaboo part d’un constat: Les éducateur.ice.s prennent souvent sur leur temps libre pour trouver des idées d’activités pertinentes et ludiques à réaliser avec les enfants. Kadaboo leur permettrait désormais d’écourter ce temps de recherche et ainsi passer du temps de qualité avec leurs proches. ',
		],
		link: '#',
	};
	const projectFolder = lastProjectDatas.title
		.toLocaleLowerCase()
		.trim()
		.replaceAll(' ', '');

	return (
		<section id="lastProject" className={classes.LastProject}>
			<article className={classes.SectionTitle}>
				<h2>dernier projet</h2>
			</article>
			<article className={classes.LastProjectContainer}>
				<div className={classes.ProjectInfos}>
					<h3>{lastProjectDatas.title}</h3>
					<div className={classes.Description}>
						{lastProjectDatas.description.map((paragraph, key) => (
							<p key={key}>{paragraph}</p>
						))}
					</div>
					<a href={lastProjectDatas.link}>plus de détails</a>
				</div>
				<div className={classes.ImageContainer}>
					<Image
						src={`/projects/${projectFolder}/${lastProjectDatas.image}`}
						width={1080}
						height={1080}
					/>
				</div>
			</article>
			<article className={classes.More}>
				<Button
					label="Voir tous mes&nbsp;projets"
					target="/projets"
					align="center"
				/>
			</article>
		</section>
	);
}

export default LastProject;
