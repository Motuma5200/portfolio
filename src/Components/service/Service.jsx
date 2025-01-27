import React, { useState } from 'react'
import './Service.css'

function Service() {

  const [toggleState , setToggleState] = useState(0);

  const toggleTag = (index) => {
    setToggleState(index);
  }

  return (
    <section className="service section" id="services">
        <h2 className="section-tittle">Services</h2>
        <span className="section-subtittle">What I offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div className = 'service__header'>
              <i className="uil uil-arrow services_icon"></i>
              <h2 className="service__tittle">UX/UI <br/> Designer</h2>
            </div>

            <span onClick={() => toggleTag(2)} className="service__button" >View More 
              <i className="uil uil-arrow-right services__button-icon"></i></span>

              <div className= {toggleState ===2 ? "services_modal active_modal" : "services_modal"}>
                <div className="services__modal-content">
                  <i onClick={()=> toggleTag(0)} className="uil uil-times services__modal-close"></i>
                  <h3 className="services__modal-tittle">UX/UI Designer</h3>
                   <p className="services__modal-description">
                   Services with more than 2 years of experiences.
                    Providing quality 
                    works to companies and clients.
                   </p>

                   <ul className="services__modal-services grid">
                    <li className="services__madal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I design visually appealing and user-friendly interfaces.
                       </p>
                    </li>

                    <li className="services__madal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I test designs with real users to identify and fix usability issues.
                       </p>
                    </li>

                    <li className="services__madal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I design interactive elements to enhance user engagement.
                       </p>
                    </li>

                   </ul>
        
                </div>
              </div>
          </div>

          <div className="services__content">
            <div className='service__header'>
              <i className="uil uil-web-grid services_icon"></i>
              <h2 className="service__tittle">Product <br/> Designer</h2>
            </div>

            <span onClick={() => toggleTag(1)} className="service__button">View More 
              <i className="uil uil-arrow-right services__button-icon"></i></span>

              <div className = {toggleState ===1 ? "services_modal active_modal" : "services_modal"}>
                <div className="services__modal-content">
                  <i onClick={() => toggleTag(0)} className="uil uil-times services__modal-close"></i>
                  <h3 className="services__modal-tittle">Product Designer</h3>
                   <p className="services__modal-description">
                    Services with more than 2 years of experiences.
                    Providing quality 
                    works to companies and clients.
                   </p>

                   <ul className="services__modal-services grid">
                    <li className="services__madal-service">
                      <i className="uil uil-check-cicle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I generate and refine product concepts.
                       </p>
                    </li>

                    <li className="services__madal-service">
                      <i className="uil uil-check-cicle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I ensure a seamless and enjoyable user experience 
                       throughout the product lifecycle.
                       </p>
                    </li>

                    <li className="services__madal-service">
                      <i className="uil uil-check-cicle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I create and test prototypes to validate product ideas
                       </p>
                    </li>

                    

                   </ul>
        
                </div>
              </div>
          </div>


          <div className="services__content">
            <div className= 'service__header'>
              <i className="uil uil-edit services_icon"></i>
              <h2 className="service__tittle">Visual <br/> designer</h2>
            </div>

            <span onClick = {() => toggleTag(3)} className="service__button">View More 
              <i className="uil uil-arrow-right services__button-icon"></i></span>

              <div className = {toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                <div className="services__modal-content">
                  <i onClick={()=> toggleTag(0)} className="uil uil-times services__modal-close"></i>
                  <h3 className="services__modal-tittle">Visual Designer</h3>
                   <p className="services__modal-description">
                   Services with more than 2 years of experiences.
                    Providing quality 
                    works to companies and clients.
                   </p>

                   <ul className="services__modal-services grid">
                    <li className="services__madal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I create logos, color schemes and visual elements that represent a brand
                       </p>
                    </li>

                    <li className="services__madal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                       <p className="services__modal-info">
                       I create custom illustrations for various purposes.
                       </p>
                    </li>

                    <li className="services__madal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                       <p className="services__modal-info">
                        I design animations and motion graphics for digital media.
                       </p>
                    </li>   

                   </ul>
        
                </div>
              </div>
          </div>
        </div>

        
    </section>
  )
}

export default Service