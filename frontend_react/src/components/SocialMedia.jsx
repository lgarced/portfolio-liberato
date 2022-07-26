import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub href='https://github.com/lgarced' />
    </div>
    <div>
      <BsLinkedin />
    </div>
    {/* <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;

