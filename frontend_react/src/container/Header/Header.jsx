import React from 'react'
import './Header.scss'
import { images } from '../../constants'
import {motion} from 'framer-motion'

const scaleVariants = {
  whileInView: { 
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut'


  }}
}

const Header = () => {
  return (
    <div className="app_header app_flex">+
      <motion.div 
       whileInView={{ x: [-100, 0], opacity: [0, 1] }}
       transition={{ duration: 0.5 }}
       className = "app_header_info"
       >
        <div className="app_header-badge"> 
          <div className="badge-cmp app__flex">
             <span>🙌</span>
             <div style={{marginLeft: 20}}>
              <p className="p-text"> Hello I am </p>
                <h1 className="head-text">  
                  Liberato Garced  </h1>
             </div>
          </div>
          <div className="tag-cmp app__flex">
             <p className="p-text"> Data Engineer </p>
             <p className="p-text">Software Engineer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
       whileInView={{ opacity: [0, 1] }}
       transition={{ duration: 0.5, delayChildren: 0.5 }}
       className = "app_header_img"
      >
        <img src= {images.me} alt="Liberato"  className="img-header"></img>

      </motion.div >
      <motion.div 
       whileInView={{ scale: [0,1] }}
       transition={{ duration: 1 , ease: 'easeInOut'}}
       className = "app_header_info"
      >

      </motion.div>

    </div>
  )
}

export default Header;