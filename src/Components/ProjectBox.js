import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    // TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    // TindogGithub : "https://github.com/DevanshSahni/tindog",
    // TindogWebsite : "https://devanshsahni.github.io/tindog/",
    SuperHeroDesc : "Developed this in early leraning of CSS and HTML. This website has featuring sleek designs, vibrant CSS, and captivating animations. Explore about your favorite heroes, and enjoy a seamless browsing experience.",
    SuperHerohub : "https://github.com/AryanWadhe/marvel-heroes",

    CryptoDesc : "Just Crypto is ReactJS web app for cryptocurrency data with live market and graphs depicting cryptocurrency using API integration.Initiated Google Authentication with Firebase and interactive graphs for 20+ cryptocurrencies using ChartJS.",
    CryptoGithub : "https://github.com/AryanWadhe/JustCryto_Simulator?tab=readme-ov-file",
    // CryptoWebsite : "https://devanshsahni.github.io/Rog-Free/",

    // NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    // NewsletterGithub:"",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    QuickStaffDesc:"Engineered a QuickStaff platform to match users with service providers, reducing search time by 50%. Deployed Hygraph schema for efficient data management reducing data retrieval times by 40%.",
    QuickStaffGithub:"https://github.com/AryanWadhe/Quickstaff_",

    // QuickStaffWebsite:"https://wiggles.vercel.app/",

    EasyBillDesc:"Developed a comprehensive Billing platform enabling users to create, manage, and send professional invoices. Automated PDF invoices and email distribution using PDFKit.Integrated real-time analytics dashboards, providing users with insights into their billing and payment trends.",
    EasyBillGithub:"https://github.com/AryanWadhe/QuickBill",
    EasyBillWebsite:"https://quick-bill-client.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox