import React from 'react';
import './Header.css';
import CV from '../../assets/Wafa Ben Miloud.pdf'
import lamp from '../../assets/lamp.png'
import light from '../../assets/light.png'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiUpwork } from 'react-icons/si'
import DarkMode from '../DarkMode/DarkMode'

const Header = () => {
  return (
    <header>

      <div className="lamp_wrapper">

        <img src={lamp} alt="lamp" className="lamp" />
        <img src={light} alt="light" className="light" />

      </div>
      <div className='container header__container'>

        <h1>Wafa Ben Miloud</h1>
        <h5 className='text-light'>I'm a Fullstack Developer</h5>
        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn'>How Can I Help ? </a>
        </div>
        <div className='row'>


        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/wafa-ben-miloud-382126181/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/wafabenmiloud" target="_blank"><BsGithub/></a>
            <a href="https://www.upwork.com/freelancers/~01fc5f7163d2b11b28?viewMode=1" target="_blank"><SiUpwork/></a>
          </div>
          <div className="block">
            <div className="blob">
              <div className='me'>
              </div>
            </div>

            <p>Hi! I'm Wafa Ben Miloud, a full-stack developer who specializes in building web and mobile applications.
              <br /><br />
               <span><a href="#about">
            {" "}
           Read more about me          </a></span>.
            </p>
          </div>
          <a href="#contact" className='scroll__down'>Scroll</a>

        </div>

      </div>
    </header>
  )
}

export default Header
