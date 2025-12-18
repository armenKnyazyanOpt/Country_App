function Header ({darkMode, switchMode}) {
    return (
        <header className="header">
            <h1 className="header-title">Where in the world ? </h1>
            <button className="dark-mode-btn" onClick={switchMode}>
                <img className="dark-mode-icon" src="dark-mode.svg" alt=""/>
                <span>{darkMode ? 'Light' : 'Dark'} mode</span>
            </button>
        </header>
    )
}

export default Header;