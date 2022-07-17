import React, { useState } from 'react'
import './Navbar.scss'
import{ HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion'

import { images } from '../../constants'

 const Navbar = () => {
     const [toogle, setToggle] = useState(false);
  return (
   <nav className="app_navbar">
    <div className="app_navbar_logo">
      <img src={images.Liberato_Garced} alt="Logo Liberato's website" />
        </div>
      <ul className="app_navbar_links">
        {['Home','About', 'Projets', 'Skills', 'Contact'].map( (item) => (
          <li className="app_flex p-text" key={`link-${item}`}> 
            <div  />
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>
      
      <div className="app_navbar-menu">
           <HiMenuAlt4 onClick ={ () => setToggle(true) }/>
          {
            toogle &&  (
              <motion.div
                whileInView={ { x: [300, 0] } }
                transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                <HiX onClick ={ () => setToggle(false) }/>
                <ul>    
                    {['HOME','ABOUT', 'PROJECTS', 'SKILS', 'CONTACT'].map( (item) => (
                   <li key={item}> 
                      <a href={`#${item}`} onClick ={ () => setToggle(false) }> 
                      {item}
                       </a>
                    </li>
                    ))}
                   </ul> 
              </motion.div>
            )}
      </div>
    </nav>
  )}

export default Navbar