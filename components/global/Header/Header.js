// Librairie
import classes from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo/logo_light_typo.svg';

function Header() {
	// State
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Methode
	const onMenuClickedHandler = () => {
		setIsMenuOpen(!isMenuOpen);
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
								<Link href="/">accueil</Link>
							</li>
							<li>
								<Link href="/projets">projets</Link>
							</li>
							<li>
								<Link href="/#contact">me contacter</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
