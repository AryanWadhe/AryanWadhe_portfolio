import React from 'react';
import ProjectBox from './ProjectBox';
import marvel from '../images/marvel.png';
import Crypto from '../images/Crypto.png';
import EasyBill from '../images/EasyBill.png';
import QuickStaff from '../images/QuickStaff.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={EasyBill} projectName="EasyBill" />
        <ProjectBox projectPhoto={QuickStaff} projectName="QuickStaff" />
        <ProjectBox projectPhoto={marvel} projectName="SuperHero" />
        <ProjectBox projectPhoto={Crypto} projectName="Crypto" />
      </div>

    </div>
  )
}

export default Projects