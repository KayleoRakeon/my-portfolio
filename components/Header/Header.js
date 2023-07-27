// Librairie
import classes from './Header.module.css';
import Link from 'next/link';

function Header() {
	return (
		<header className={classes.Header}>
			<img src="./logo/logo_light_typo.svg" />
			<div className="menu">
				<nav>
					<ul>
						<li>
							<Link href="/">accueil</Link>
						</li>
						<li>
							<Link href="/projets">projets</Link>
						</li>
						<li>
							<Link href="/contact">contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
