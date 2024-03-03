import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'
import slide5 from '../../assets/slide5.png'
import slide6 from '../../assets/slide6.png'
import slide7 from '../../assets/slide7.png'
import slide8 from '../../assets/slide8.png'
import slide9 from '../../assets/slide9.png'
import slide10 from '../../assets/slide10.png'
import slide11 from '../../assets/slide11.png'
const Experience = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        

    };
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <Slider {...settings}>
                <div> <img src={slide1} alt="slide" /></div>
                <div> <img src={slide2} alt="slide" /></div>
                <div><img src={slide3} alt="slide" /></div>
                <div> <img src={slide4} alt="slide" /></div>
                <div> <img src={slide5} alt="slide" /></div>
                <div>  <img src={slide6} alt="slide" /></div>
                <div> <img src={slide7} alt="slide" /></div>
                <div> <img src={slide8} alt="slide" /></div>
                <div> <img src={slide9} alt="slide" /></div>
                <div> <img src={slide10} alt="slide" /></div>
                <div> <img src={slide11} alt="slide" /></div>
             
           
            </Slider>
            {/* <div className='container experience__container'>
    
          <div className='experience__frontend'>
                <h3>Frontend Developement</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>Flutter</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>

            </div>
            <div className='experience__backend'>
                <h3>Backend Developement</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>Node JS</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>PostgreSQL</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>  
        </div>*/}
        </section>
    )
}

export default Experience