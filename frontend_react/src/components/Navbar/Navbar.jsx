import React from 'react'
import './Navbar.scss'

import { images } from '../../constants'

 const Navbar = () => {
  return (
   <nav className="app_navbar">
    <div className="app_navbar_logo">
      <img src={images.Liberato_Garced} alt="Logo Liberato's website" />
        </div>
      <ul>
        {['Home','About', 'Projets', 'Skills', 'Contact'].map( (item) => 
          <li ley= {`link-${item}`}> 
            <div  />
            <a href={`#${item}`}>{item}</a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar