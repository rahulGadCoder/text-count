import classes from './Header.module.css';
import Navigation from './Navigation';

const Header = (props) => {
    return (
        <header className={classes['main-header']}>
            <h1>The Header Page</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    )
}

export default Header;