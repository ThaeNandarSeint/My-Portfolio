import React from 'react'
// css
import './Skills.css'

import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
  const props1 = {
        percent: 85, // is require
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
        rotation: 0,
        // fill: "#00897B",
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
          // boxShadow: "inset 0 0 25px 10px #a2caff"
        }
      };
      const props2 = {
        percent: 80, // is require
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
        rotation: 90,
        // fill: "#00897B",
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
          // boxShadow: "inset 0 0 25px 10px #a2caff"
        }
      };
      const props3 = {
        percent: 65, // is require
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
        rotation: -90,
        // fill: "#00897B",
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
          // boxShadow: "inset 0 0 25px 10px #a2caff"
        }
      };
      const props4 = {
        percent: 60, // is require
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
        rotation: 180,
        // fill: "#00897B",
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
          // boxShadow: "inset 0 0 25px 10px #a2caff"
        }
      };
  return (
    <>
        <div className='skills' id='skills'>
            <h1><span style={{ color: 'var(--green)' }}>What Skills</span> I Have</h1>
        </div>
        <div className='s-container'>
            {/* <div class='progress-circle'>
            <CircularProgressbar value={66} />
            </div> */}
            <div class='progress-circle'>
            <CircularProgressBar {...props1} />
            <h3>HTML</h3>
            </div>
            <div class='progress-circle'>
            <CircularProgressBar {...props2} />
            <h3>CSS</h3>
            </div>
            <div class='progress-circle'>
            <CircularProgressBar {...props3} />
            <h3>JavaScript</h3>
            </div>
            <div class='progress-circle'>
            <CircularProgressBar {...props4} />
            <h3>React</h3>
            </div>
        </div>
    </>
  )
}