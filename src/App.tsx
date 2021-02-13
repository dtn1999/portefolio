import React from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import { ResumeData } from './types';



const App:React.FC = React.memo(()=>{
  const [state, setState] = React.useState<ResumeData>();

 const fecthResumeData = React.useCallback(async()=>{
      const response = await fetch('./resumeData.json');
      const JSONResponse = await response.json();
      
      // if no problem set state
      setState(JSONResponse);
 },[])

  React.useEffect(()=>{
    fecthResumeData()
  },[])

  if(!state){
    return (
      <div className="App">
        <h1> Loading ...</h1>
      </div>
    );
  }
   
  return(
    <div className="App">
        <Header data={state.main}/>
        <About data={state.main}/>
        <Resume data={state.resume}/>
        <Portfolio data={state.portfolio}/>
        <Contact data={state.main}/>
        <Footer data={state.main}/>
    </div>
  )
})



export default App;
