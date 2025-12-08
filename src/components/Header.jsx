import './Header.scss';

function Header ({darkMode, switchMode}) {
    return (
        <header className="header">
            <h1>Where in the world ? </h1>
            <div className="dark-mode-btn" onClick={switchMode}>
                <img src="dark-mode.svg" alt=""/>
                <span>{darkMode ? 'Light' : 'Dark'} mode</span>
            </div>
        </header>
    )
}

export default Header;