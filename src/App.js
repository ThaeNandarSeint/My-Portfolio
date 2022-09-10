import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

// darkMode
import {themeContext} from './contexts/context'
import {useContext} from 'react'

function App() {
  // darkmode
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? 'white' : ''
      }}
    >
      <Navbar />
        <Intro darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills />
        <About darkMode={darkMode} />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
