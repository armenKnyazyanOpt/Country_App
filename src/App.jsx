import './App.scss'
import {ThemeProvider} from "./context/ThemeContext.jsx";
import {HomePage} from "./pages/HomePage.jsx";

function App() {

    return (
        <ThemeProvider>
            <div className="main-container">
                <HomePage />
            </div>
        </ThemeProvider>
  )
}

export default App
