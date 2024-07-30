import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";
import { SiC, SiPython, SiLinux, SiOwasp, SiMysql, SiCss3, SiFirebase, SiWindows, SiUnix } from 'react-icons/si';

const Skills = ({skill}) => {
    const icon = {
        C: <SiC />,
        Firebase: <SiFirebase />,
        'C++': <CgCPlusPlus/>,
        CSS: <SiCss3 />,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,  
        Linux: <SiLinux />,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      <div className='SkillIcon'>
                {icon[skill]}
            </div>
            <div className='SkillName'>
                {skill}
            </div>
    </div>
  )
}

export default Skills
