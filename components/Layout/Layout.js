// Librairie
import classes from './Layout.module.css';

function Layout(props) {
	return <div className={classes.Container}>{props.children}</div>;
}

export default Layout;
