import React, { Component } from 'react';
import {Main} from '../types'

type Props = {
  data: Main
}

const Portfolio:React.FC<Props>= React.memo(({data})=>{
  const [projects, setPojects] = React.useState<any>();
  React.useEffect(()=>{
    setPojects(data?.projects)
  },[data])



  const renderProjects = React.useCallback(()=>(
    data.projects.map(function (projects) {
      const projectImage = 'images/portfolio/' + projects.image;
      
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )
    })
  ),[])

  return (
    <section id="portfolio">

      <div className="row">

        <div className="twelve columns collapsed">

          <h1>Check Out Some of My Works.</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {renderProjects()}
          </div>
        </div>
      </div>
    </section>
  );
})

export default Portfolio;