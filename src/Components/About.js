import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Aryan Wadhe</b> and I am from Maharashtra, India.
            I am a final-year B.Tech student pursuing <b>Computer Science(CS)</b> at the <b>Indian Institute of Information Technology, Lucknow.</b> <br/><br/>

            I have done an internship as a <b>Researcher</b> at IIIT Lucknow.

             I enjoy working on innovative projects and continuously enhancing my skills in <b>web development and coding.</b><br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me on <a href="https://www.linkedin.com/in/aryan-wadhe-12b2a1229/" target='_blank'>LinkedIn</a>, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='C++' />
        <Skills skill='C' />
        <Skills skill='React' />
        <Skills skill='CSS' />
        <Skills skill='Node' />
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Firebase' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Npm' />
        <Skills skill='Linux' />
        <Skills skill='Vercel' />
        <Skills skill='Figma' />
        
        
      </div>
    </>
  )
}

export default About