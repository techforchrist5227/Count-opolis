import React from 'react'
import logo from "../Images/logo192.png"
const Header = () => {
  return (
    <div className='d-flex border pt-3 pl-2'>
        


        <img src={logo} alt="react logo for counter app" className='' style={{height:"12vh", verticalAlign:"top",marginRight:"100px"}}/>
        <span className='h2 pt-4'> - Count-Opolis</span>
        
    </div>
  )
}

export default Header