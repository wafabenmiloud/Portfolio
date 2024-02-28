import React from 'react';
import './Footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiUpwork } from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <div className='footer__socials'>
        <a href="https://www.upwork.com/freelancers/~01fc5f7163d2b11b28?viewMode=1" target="_blank"><SiUpwork /></a>
        <a href="https://github.com/wafabenmiloud" target="_blank"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/wafa-ben-miloud-382126181/" target="_blank"><BsLinkedin /></a>


      </div>
      <div className="footer__copyright">
        <small> &copy; wafabenmiloud, All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer