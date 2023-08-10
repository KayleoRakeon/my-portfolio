// Librairie
import classes from './LastProject.module.css';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

// Composants
import Button from '@/components/global/Button/Button';

function LastProject() {
	// Variable
	const { t } = useTranslation('home');
	const lastProjectDatas = {
		title: t('lastproject-name'),
		image: 'kadaboo_1.jpg',
		description: [
			t('lastproject-description-1'),
			t('lastproject-description-2'),
		],
		link: '/#lastProject',
	};
	const projectFolder = lastProjectDatas.title
		.toLocaleLowerCase()
		.trim()
		.replaceAll(' ', '');

	return (
		<section id="lastProject" className={classes.LastProject}>
			<article className={classes.SectionTitle}>
				<h2>{t('lastproject-title')}</h2>
			</article>
			<article className={classes.LastProjectContainer}>
				<div className={classes.ProjectInfos}>
					<h3>{lastProjectDatas.title}</h3>
					<div className={classes.Description}>
						{lastProjectDatas.description.map((paragraph, key) => (
							<p key={key}>{paragraph}</p>
						))}
					</div>
					{/* <a href={lastProjectDatas.link}>{t('lastproject-cta')}</a> */}
				</div>
				<div className={classes.ImageContainer}>
					<Image
						src={`/projects/${projectFolder}/${lastProjectDatas.image}`}
						width={1080}
						height={1080}
						alt="Kadaboo, une application pour les éducateur.ice.s | Benjamin Bourgouin"
					/>
				</div>
			</article>
			<article className={classes.More}>
				<Button
					label={t('lastproject-button')}
					target="/projets"
					align="center"
					title={t('lastproject-button')}
				/>
			</article>
		</section>
	);
}

export default LastProject;
