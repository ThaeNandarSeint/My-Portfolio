import React from 'react'
// css
import './Toggle.css'
// icons
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
// darkMode
import { themeContext } from '../../contexts/context'
import { useContext } from 'react'

export const Toggle = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  const handleClick = ()=>{
    theme.dispatch({type: 'toggle'})
  }
  return (
    <div className='toggle' onClick={handleClick}>
        <Moon />
        <Sun />
        <div className='t-button'        
        style={
          darkMode ? {left: "2px"} : {right: "2px"}
        }
        >
            
        </div>
    </div>
  )
}