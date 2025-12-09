import './Header.scss';

function Header ({darkMode, switchMode}) {
    return (
        <header>
            <h1>Where in the world ? </h1>
            <button className="dark-mode-btn" onClick={switchMode}>
                <img src="dark-mode.svg" alt=""/>
                <span>{darkMode ? 'Light' : 'Dark'} mode</span>
            </button>
        </header>
    )
}

export default Header;