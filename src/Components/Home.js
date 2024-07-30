import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Photo1 from '../images/Photo1.png';
// import {CiCoffeeCup} from "react-icons/ci";
import { FaPen } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b1>Aryan Wadhe</b1></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>A <b>Glimpse Behind</b></h1>
          <p>
            I love the Solving bugs is like a thrilling puzzle—each line of code brings me closer to victory.
            In the <b>world of code</b>, challenges become adventures and I am ready for that.<br /><br />
            I am fluent in <b>C++</b> and decent in <b>Competitive Programming. </b> In addition to my development work, I actively participate in competitive programming contests to sharpen my <b>problem-solving skills.</b> <br /><br />
            I’m a <b>Writing</b> enthusiast! <FaPen style={{ scale: "1.1", rotate: "15deg" }} />
            <br />
            <b>#</b>Writer OP <FaFileAlt style={{ scale: "1", rotate: "0deg" }} />

          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Photo1} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
