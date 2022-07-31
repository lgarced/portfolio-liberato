import React from 'react';
import { BsGithub, BsLinkedin,BsFileEarmarkPdf } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/lgarced">
        {" "}
        <BsGithub />
      </a>
    </div>
    {/* <div>
      <BsLinkedin />
    </div> */}
    <a target = '_blank' href="resume.PDF">
      <div>
        <BsFileEarmarkPdf />{" "}
      </div>
    </a>
  </div>
);

export default SocialMedia;

