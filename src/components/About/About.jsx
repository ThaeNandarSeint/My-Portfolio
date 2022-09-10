import React from 'react'

import me from '../../img/cv-white.png'
import ncc from '../../img/ncc.png'
import CertWhite from '../../img/cert-white.png'
import CertBlack from '../../img/cert-black.png'
import GithubWhite from '../../img/github-white.png'
import GithubBlack from '../../img/github-black.png'

// css
import './About.css'
import { Link } from 'react-router-dom'

export const About = ({ darkMode }) => {
  return (
    <div className='about' id='about'>
      <div className='a-title'>Get To Know</div>
      <h1>About Me</h1>
      <div className='a-container'>
          <img className='a-img' src={me} />
          <div className='a-content'>   
            <div className='a-cards'>
              <a target='_blank' href='https://res.cloudinary.com/dnos24ywq/image/upload/v1662780570/Certificates/design-cert_zvugv5.jpg' className={`a-card ${darkMode ? 'text-white' : 'text-black'}`}>
                {
                  darkMode ? <img src={CertWhite} /> : <img src={CertBlack} />
                }
                <h3>Design Cert</h3>
              </a>
              {/* <a target='_blank' href='https://res.cloudinary.com/dnos24ywq/image/upload/v1662091795/Certificates/me_ttemxu.jpg' className='a-card'>
                <img className='ncc-img' src={ncc} />
                <h3>NCC Diploma</h3>
              </a> */}
              <a target='_blank' href='https://github.com/ThaeNandarSeint?tab=repositories' className={`a-card ${darkMode ? 'text-white' : 'text-black'}`}>
                {
                  darkMode ? <img src={GithubWhite} /> : <img src={GithubBlack} />
                }
                <h3>Projects</h3>
              </a>
              {/* <a target='_blank' href='https://res.cloudinary.com/dnos24ywq/image/upload/v1662091795/Certificates/me_ttemxu.jpg' className={`a-card ${darkMode ? 'text-white' : 'text-black'}`}>
                {
                  darkMode ? <img src={CertWhite} /> : <img src={CertBlack} />
                }
                <h3>Web Cert</h3>
              </a> */}
            </div>        
            <p> 
              Seeking an opportunity to extend my web development knowledge and web design skills at your company. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia web tools. Handled multiple projects simultaneously while ensuring all projects were completed within the deadline date.
            </p>
            {/* <button className='button'>Let's Talk</button> */}
          </div>
      </div>
    </div>
  )
}
