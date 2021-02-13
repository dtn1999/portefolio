import React from 'react';
import {Main} from '../types'
type Props = {
  data :Main | undefined
}

const Footer:React.FC<Props>= React.memo(({data})=>{
  const [ networks, setNetworks ] = React.useState<any[]>([]);

  React.useEffect(()=>{
    if(data){
      const temp = data.social.map((network)=>(
         <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      ))
      setNetworks(temp)
    }
  },[data])
  return(
    <footer>
    <div className="row">
       <div className="twelve columns">
          <ul className="social-links">
             {networks}
          </ul>

          <ul className="copyright">
             <li>&copy; Copyright 2017 Nordic Giant</li>
             <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>

       </div>
       <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
    </div>
 </footer>
  )
})

export default Footer;
