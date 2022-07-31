import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Liberato</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software & </p>
          <p className="p-text">Data Engineer</p>
        </div>
      </div>
    </motion.div>

    <div
      // whileInView={{ opacity: [0, 1] }}
      // whileHover={{
      //   scale: 1.03,
      //   boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      //   transition: { duration: 0.15 },
      // }}
      // transition={{ duration: 0.15 }}
      className="app__header-img"
    >
      <motion.img
        transition={{ duration: 0.15 }}
        whileInView={{ opacity: [0, 1] }}
        whileHover={{
          scale: 1.03,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          transition: { duration: 0.2 },
        }}
        src={images.me}
        alt="Photo of Liberato"
      />
    </div>
    <motion.div
      variants={scaleVariants}
      transition={{ duration: 0.15 }}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.node, images.react, images.sass, images.html].map(
        (circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');