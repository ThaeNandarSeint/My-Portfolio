import React from 'react'
// css
import './Skills.css'

import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
  const props = {
        colorSlice: "#29f68a",
        colorCircle: "#29f68a",
        fontColor: "#365b74",
        fontSize: "1.6rem",
        fontWeight: 400,
        size: 150,
        stroke: 5,
        strokeBottom: 5,
        speed: 20,
        cut: 0,
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        strokeDasharray: "10,1",
        inverse: false,
        round: false,
        number: false,
        linearGradient: ["#e47487", "#ea3b58"],
        styles: {
          borderRadius: "50%",
        }
      };
  return (
    <>
        <div className='skills' id='skills'>
            <h1><span style={{ color: 'var(--green)' }}>What Skills</span> I Have</h1>
        </div>
        <div className='s-container'>
            <div class='progress-circle'>
            <CircularProgressBar { ...props} percent={85} rotation={0} />
            <h3>HTML</h3>
            </div>
            <div class='progress-circle'>
            <CircularProgressBar {...props} percent={80} rotation={90} />
            <h3>CSS</h3>
            </div>
            <div class='progress-circle'>
            <CircularProgressBar {...props} percent={75} rotation={-90} />
            <h3>JavaScript</h3>
            </div>
            <div class='progress-circle'>
            <CircularProgressBar {...props} percent={70} rotation={180} />
            <h3>React</h3>
            </div>
        </div>
    </>
  )
}