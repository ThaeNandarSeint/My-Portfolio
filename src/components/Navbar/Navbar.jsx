import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { Toggle } from '../Toggle/Toggle'
// css
import './Navbar.css'

// darkMode
import {themeContext} from '../../contexts/context'

const Navbar = () => {
    // darkmode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (    
    <div class={darkMode ? 'wrapper bg-white' : 'wrapper'}>
        <nav>
            <input type="checkbox" id="show-search"/>
            <input type="checkbox" id="show-menu" />
            <label for="show-menu" class="menu-icon"><i className={`fas fa-bars ${darkMode ? 'text-black' : 'text-white'}`}></i></label>
            <div class="content">
                <div class="logo"><Link className={darkMode ? 'text-black' : 'text-white bg-black'} spy={true} to='intro' smooth={true} activeClass='activeClass'>Portfolio</Link></div>
                <ul className={`links ${ darkMode ? 'bg-white' : 'bg-black' }`}>
                    <li>
                        <Link className={darkMode ? 'text-black text-black-hover' : 'text-white text-white-hover'} spy={true} to='intro' smooth={true} activeClass='activeClass'>HOME</Link>
                    </li>
                    <li>
                        <Link className={darkMode ? 'text-black text-black-hover' : 'text-white text-white-hover'} spy={true} to='about' smooth={true} activeClass='activeClass'>ABOUT</Link>
                    </li>
                    <li>
                        <Link className={darkMode ? 'text-black text-black-hover' : 'text-white text-white-hover'} spy={true} to='skills' smooth={true} activeClass='activeClass'>SKILLS</Link>
                    </li>
                    <li>
                        <Link className={darkMode ? 'text-black text-black-hover' : 'text-white text-white-hover'} spy={true} to='projects' smooth={true} activeClass='activeClass'>PROJECTS</Link>
                    </li>
                    <li>
                        <Link className={darkMode ? 'text-black text-black-hover' : 'text-white text-white-hover'} spy={true} to='contact' smooth={true} activeClass='activeClass'>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <Toggle />
        </nav>
    </div>
  )
}

export default Navbar
