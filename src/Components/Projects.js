import React from 'react';
import ProjectBox from './ProjectBox';
import marvel from '../images/marvel.png';
import Crypto from '../images/Crypto.png';
// import TindogImage from '../images/TindogImage.png';
import QuickStaff from '../images/QuickStaff.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={QuickStaff} projectName="QuickStaff" />
        {/* <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" /> */}
        <ProjectBox projectPhoto={Crypto} projectName="Crypto" />
    <ProjectBox projectPhoto={marvel} projectName="SuperHero" />
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects
