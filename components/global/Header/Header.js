// Librairie
import classes from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo/logo_light_typo.svg';

function Header({ ...props }) {
	// State
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Methode
	const onMenuClickedHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const onLangSelectionClickHandler = () => {
		props.setLang(props.lang === 'FR' ? 'EN' : 'FR');
	};

	return (
		<header className={classes.Header}>
			<Image src={logo} alt="Logo de Benjamin Bourgouin" />
			<div
				className={
					classes.Menu + (isMenuOpen ? ' ' + classes.Open : '')
				}
			>
				<div
					className={classes.Burger}
					onClick={onMenuClickedHandler}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={classes.Overlay}>
					<div className={classes.NavContainer}>
						<nav>
							<div
								className={classes.Cross}
								onClick={onMenuClickedHandler}
							>
								<span></span>
								<span></span>
							</div>
							<ul>
								<li>
									<Link href="/">
										{props.lang === 'FR' ? 'accueil' : 'home'}
									</Link>
								</li>
								<li>
									<Link href="/projets">
										{props.lang === 'FR' ? 'projets' : 'projects'}
									</Link>
								</li>
								<li>
									<Link href="/#contact">
										{props.lang === 'FR'
											? 'me contacter'
											: 'contact me'}
									</Link>
								</li>
							</ul>
						</nav>

						<div className={classes.LangSelection}>
							<p>FR</p>
							<div
								className={classes.SelectorContainer}
								onClick={onLangSelectionClickHandler}
							>
								<div
									className={classes.Indicator}
									style={{
										left:
											props.lang === 'FR'
												? '-10px'
												: 'calc(100% - 26px)',
									}}
								></div>
							</div>
							<p>EN</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
