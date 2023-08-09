// Librairie
import classes from './LastProject.module.css';

// Composants
import SectionTitle from '@/components/global/SectionTitle/SectionTitle';
import Button from '@/components/global/Button/Button';

function LastProject() {
	// Variable
	const lastProjectDatas = {
		title: 'Kadaboo Le Projet',
		image: 'kadaboo_1.jpg',
		description: [
			'Kadaboo est une application destinée aux proffessionnel.le.s du milieu de l’éducation à la petite enfance. Le but de Kadaboo est de se comporter comme une banque d’activité pédagogique à réaliser avec les enfants, en fonction de différents thèmes, groupes d’âges, et/ou buts pédagogiques.',
			'L’idée principale de Kadaboo part d’un constat : Les éducateur.ice.s prennent souvent sur leur temps libre pour trouver des idées d’activités pertinentes et ludiques à réaliser avec les enfants. Kadaboo leur permettrait désormais d’écourter ce temps de recherche et ainsi passer du temps de qualité avec leurs proches. ',
		],
		link: '#',
	};
	const projectFolder = lastProjectDatas.title
		.toLocaleLowerCase()
		.trim()
		.replaceAll(' ', '');

	return (
		<section id="lastProject" className={classes.LastProect}>
			<SectionTitle label="dernier projet" shape="rectangle" />
			<article className={classes.LastProjectContainer}>
				<div className={classes.ProjectInfos}>
					<h3>{lastProjectDatas.title}</h3>
					{lastProjectDatas.description.map((paragraph) => (
						<p>{paragraph}</p>
					))}
					<Button
						label="plus de détails"
						target={lastProjectDatas.link}
						align="left"
					/>
				</div>
				<p>
					{lastProjectDatas.title
						.toLocaleLowerCase()
						.trim()
						.replaceAll(' ', '')}
				</p>
				<img
					src={`./projects/${projectFolder}/${lastProjectDatas.image}`}
				/>
			</article>
		</section>
	);
}

export default LastProject;
