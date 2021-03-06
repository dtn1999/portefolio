/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Main } from '../types';

type Props = {
   data : Main  
}

const About:React.FC<Props> = React.memo(({data})=> (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  
             src={require('../assets/me/me3.png')} 
             alt="Tchekambou Danyls Picture " />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{data.bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{data.name}</span><br />
						   <span>{data.address.street}<br />
						         {data.address.city},{data.address.zip},{data.address.state}, 
                   </span><br />
						   <span>{data.phone}</span><br />
                     <span>{data.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={data.resumedownload} className="button" target="blanck"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    ))

export default About;
