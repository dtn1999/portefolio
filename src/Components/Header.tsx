import React  from 'react';
import {Main} from '../types'


type Props = {
   data : Main 
}


// var city= this.props.data.address.city;
// var networks= this.props.data.social.map(function(network){
//   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
// })
const Header:React.FC<Props> = React.memo(({data})=>{
   
   const renderNetworks = React.useCallback(()=>(
      data.social.map((network)=>(
           <li key={network.name}><a href={network.url} target="blanck"><i className={network.className}></i></a></li>
      ))
   ),[data.social])
   return(
      <header id="home">
      {/* <ParticlesBg type="circle" bg={true} /> */}
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about" >About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {data.name}</h1>
            <h3>{data.description}.</h3>
            
            <br />
            <div>
                  <a href="#contact" id="open-for-job" className="submit">Open For Job</a>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
            <hr />
            <ul className="social">
               {renderNetworks()}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    )});

export default Header;
