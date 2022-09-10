import React from 'react'

// css
import './Intro.css'
// image
import Github from '../../img/github.png';
import GithubWhite from '../../img/github-white.png';
import GithubBlack from '../../img/github-black.png';
import LinkedIn from '../../img/linkedin.png'
import WhatsApp from '../../img/whatsapp.png'
// 
import html from '../../img/html.png'
import css from '../../img/css-3.png'
import js from '../../img/java-script.png'
import react from '../../img/structure.png'
import nodejs from '../../img/nodejs.png'
import php from '../../img/php.png'
import photoshop from '../../img/adobe-photoshop.png'

const Intro = ({ darkMode }) => {
  return (
    <div className='intro' id='intro'>
        <div className="i-left">
           <h1>Hy! I Am</h1>
           <h1>Thae Nandar Seint</h1>
           <p className={darkMode ? 'text-white' : 'text-black'}>Web Developer with intermediate level of Skills in Web Development and Design, producing great Quality of works.</p>
            <div className='i-icons'>
                <a target='_blank' href="https://github.com/ThaeNandarSeint"><img src={Github} /></a>
                <a target='_blank' href="https://www.linkedin.com/in/thae-nandar-seint-31493a248"><img src={LinkedIn} /></a>
                <a target='_blank' href="https://wa.link/pjtfea"><img src={WhatsApp} /></a>
            </div>
            <div className="i-btn">
              <a className={`first-btn ${darkMode ? 'darkMode-bg' : 'text-white'}`} target="_blank" href="https://drive.google.com/file/d/1rJGoK5BchdDG0krue-z93W9nnC9Gz8um/view?usp=sharing"><span>View CV Form</span><i></i></a>              
            </div>
        </div>
        <div className='i-right'>
          <div className="container">
            <img className="circle" src={html} />
            <img className="circle" src={css} />
            <img className="circle" src={js} />
            <img className="circle" src={react} />

            <img className="circle" src={nodejs} />
            <img className="circle" src={php} />
            <img className="circle" src={photoshop} />
            {
              darkMode ? <img className="circle" src={GithubWhite} /> : <img className="circle" src={GithubBlack} />
            }
          </div>
        </div>        
    </div>
  )
}

export default Intro
