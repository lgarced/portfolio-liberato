import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I am a Data Engineer <span>with more than 3 years of experience</span>
        <br />A software Engineer certified by University of California Irvine.{" "}
        <span> University of California Irvine.</span>
      </h2>
      <h3>
        <br />{" "}
        <span>
          {" "}
          I like to work hard, learn as much as I can, but also have as much fun
          as possible. The picture below was of my trip through China. The Yao
          People in Guangxi were welcoming and warm to me.
        </span>
      </h3>
      <div className="app__profiles">    
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={images.mechina} alt="About" />
          </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);